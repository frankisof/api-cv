const cors = require('cors')
const express = require('express')


const app = express();
app.use(cors());
app.options('*', cors());

const port = 8080;

app.get('/', (req, res, next) => {
	res.send('node express api <br> by adsoft');
});


app.get('/header', (req, res, next) => {
  res.sendfile("assets/header.json");
});

app.get('/workexperience', (req, res, next) => {
	res.sendfile("assets/work.json");
  });
app.get('/skill', (req, res, next) => {
	res.sendfile("assets/skill.json");
  });
app.get('/certifications', (req, res, next) => {
	res.sendfile("assets/certifications.json");
  });
app.get('/interests', (req, res, next) => {
	res.sendfile("assets/interests.json");
  });

app.listen(port,  () => 
	console.log('listening on port ' + port
));
