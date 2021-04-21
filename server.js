const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello ' + req.user.name + '\nLong Live Comrade Stalin!');
})
app.listen(port, () => {
	console.log('Server listening on :' + port);
});