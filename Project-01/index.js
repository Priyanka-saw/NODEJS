const express = require('express')
// const users = require('./MOCK_DATA.json')
const fs = require('fs');

const mongoose = require('mongoose');
const { type } = require('os');

const app = express();
const PORT = 8000;


// connections
mongoose.connect('mongodb://127.0.0.1:27017/priyanka-dev-1')
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('mongo Error', err));

// Creating Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,

    },
    jobTitle: {
        type: String,
    },
    gender: {
        type: String,
    },
    
}, { timestamps: true }  // createdAt, updatedAt
)

// Model
const User = mongoose.model('User', userSchema);



// middleware - plugin
// take the value from frontend to backend
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
    console.log('hello from middleware 1');
    // return res.json({message: "hello from middleware 1"})

    fs.appendFile('log.txt', `\n New Request at ${new Date().toISOString()} : ${req.path} : ${req.method} : ${req.ip}`, (err, data) => {
        if (err) console.log(err);
    })
    req.myName = "priyanka";
    next();

});


app.use((req, res, next) => {
    console.log('hello from middleware 2', req.myName);
    // return res.end("hye");


    next();

});



// routes
app.get('/users', async(req, res) => {
    const allDbUsers = await User.find({});
    const html = `
      <ul>
      ${allDbUsers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join('')}
      </ul>
    `;
    res.send(html);
})



// REST Api
app.get('/api/users', async(req, res) => {
    //    console.log( res.header);

        const allDbUsers = await User.find({});
 
    
    // res.setHeader('X-myName', 'Priyanka');  //custom header 
    //Always use X to cuatom header
    return res.json(allDbUsers);
})

app.route('/api/users/:id').get(async(req, res) => {

    const user = await User.findById(req.params.id);

    // instead of findind id wecan take id from db
    // const id = Number(req.params.id);
    // const user = users.find((user) => user.id === id);

    if (!user) return res.status(404).json({ message: "User Not Found" });
    return res.json(user);
})
    .patch(async(req, res) => {
        // edit the user with id
        await User.findByIdAndUpdate(req.params.id, {lastName: 'updated-last-name'}, {new: true});
        
     return res.json({ status: "sucess" });
    })
    .delete(async(req, res) => {
        // delete the user with id
        await User.findByIdAndDelete(req.params.id);
        return res.json({ status: "success" });

    })

app.post('/api/users', async (req, res) => {
    const body = req.body;
    // console.log("body", body);
    if (!body || !body.first_name || !body.last_name || !body.email) {
        return res.status(400).json({ message: "All Fields are required" })
    }

    // users.push({ ...body, id: users.length + 1 });
    // fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
    //     return res.status(201).json({ status: "pending" });
    // });

  const result =   await User.create({ 
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,   

});

 console.log('result', result);

return res.status(201).json({msg: 'success'});
});

app.listen(PORT, () => {
    console.log(`Server Started at Port: ${PORT}`);

})