const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log(req.headers['sec-ch-ua'])
  //res.send(`<h1>El browser es: ${req.headers['user-agent']}<h1/>`);
  //res.redirect(`/${req.headers['sec-ch-ua']}`);
  res.redirect('/chrome')
});
app.get('/chrome', (req, res) => {
//res.send(`<h1>El browser es: ${req.headers['user-agent']}<h1/>`);
res.send(`<h1>El browser es: ${req.headers['user-agent']}<h1/>`);
});

app.listen(3000, () => console.log('Listening on port 3000!'));