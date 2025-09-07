const express = require('express')
const users = require('./MOCK_DATA.json')

const app = express();
const PORT = 8000;


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
    return res.json(users);
})

app.route('/api/users/:id').get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
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
    // todo : pending
    return res.json({ status: "pending" })
})


app.listen(PORT, () => {
    console.log(`Server Stsrted at Port: ${PORT}`);

})