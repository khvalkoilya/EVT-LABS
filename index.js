import express from 'express';
import path from 'path';
import fs from 'fs';

const app = express();

const __dirname = path.resolve()
const PORT = process.env.PORT || '8000';

app.use(express.static(path.join(__dirname, '/static')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'static', 'pages', 'index.html'))
})

app.get('/second', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'static', 'pages', 'second.html'))
})

app.get('/close', (req, res) => {
  res.status(403);

  res.sendFile(path.resolve(__dirname, 'static', 'errors', '403.html'));
})

app.get('/*', (req, res) => {
  res.status(404);

  res.sendFile(path.resolve(__dirname, 'static', 'errors', '404.html'));
})

app.use(express.urlencoded({
  extended: true
}))

app.post('/accounts', (req, res) => {
  const { name, email } = req.body;
  fs.appendFileSync('logs.txt', `Account - email: ${email}, name: ${name};\n`)
  res.redirect('/');
})

app.listen(PORT, () => {
  console.log('Server has been started at port: ', PORT);
});