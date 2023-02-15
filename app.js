// const express = require('express');
// const app = express();
// const knex = require('knex');

// app.post('/users', (req, res) => {
//     knex('users')
//         .insert(req.body)
//         .then(() => res.send('Record inserted'))
//         .catch(error => res.status(500).send(error));
// });

// app.get('/users', (req, res) => {
//     knex('users')
//         .select()
//         .then(rows => res.send(rows))
//         .catch(error => res.status(500).send(error));
// });

// app.get('/users/:id', (req, res) => {
//     knex('users')
//         .where({ id: req.params.id })
//         .select()
//         .then(rows => res.send(rows[0]))
//         .catch(error => res.status(500).send(error));
// });

// app.put('/users/:id', (req, res) => {
//     knex('users')
//         .where({ id: req.params.id })
//         .update(req.body)
//         .then(() => res.send('Record updated'))
//         .catch(error => res.status(500).send(error));
// });

// app.delete('/users/:id', (req, res) => {
//     knex('users')
//         .where({ id: req.params.id })
//         .delete()
//         .then(() => res.send('Record deleted'))
//         .catch(error => res.status(500).send(error));
// });

// const newUser = {
//     name: 'John Doe',
//     email: 'johndoe@example.com',
// };

// knex('users')
//     .insert(newUser)
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error(error);
//     });


// app.listen(5000, function () {
//     console.log('Server started on port 5000');
// });