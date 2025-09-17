const express = require('express')
const users = require('./MOCK_DATA.json')
const fs = require('fs');

const app = express();
const PORT = 8000;

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
app.get('/users', (req, res) => {
    const html = `
      <ul>
      ${users.map((users) => `<li>${users.first_name}</li>`).join('')}
      </ul>
    `;
    res.send(html);
})



// REST Api
app.get('/api/users', (req, res) => {
    //    console.log( res.header);

    res.setHeader('X-myName', 'Priyanka');  //custom header 
    //Always use X to cuatom header
    return res.json(users);
})

app.route('/api/users/:id').get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if(!user) return res.status(404).json({message: "User Not Found"});
    return res.json(user);
})
    .patch((req, res) => {
        // edit the user with id
        res.json({ status: "pending" });
    })
    .delete((req, res) => {
        // delete the user with id 
        return res.json({ status: "pending" });

    })

app.post('/api/users', (req, res) => {
    const body = req.body;
    // console.log("body", body);
    if (!body || !body.first_name || !body.last_name || !body.email) {
        return res.status(400).json({ message: "All Fields are required" })
    }
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.status(201).json({ status: "pending" });
    });
})


app.listen(PORT, () => {
    console.log(`Server Started at Port: ${PORT}`);

})