const express = require('express'), app = express();
const bodyParser = require('body-parser');
app.use(express.static(__dirname + '/public_html'));
app.listen(process.env.PORT || 8081);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var exampleJson = '{\n' +
	'  "profiles": [\n' +
	'    {\n' +
	'      "id" : "0",\n' +
	'      "firstName": "John",\n' +
	'      "lastName": "Doe",\n' +
	'      "gradYear": "2210",\n' +
	'      "advisor": "John Doe 2",\n' +
	'      "projects": [\n' +
	'        {\n' +
	'          "id": "1",\n' +
	'          "name": "The best project",\n' +
	'          "desc": "This is a great description"\n' +
	'        },\n' +
	'        {\n' +
	'          "id": "2",\n' +
	'          "name": "The best project",\n' +
	'          "desc": "This is a great description"\n' +
	'        }      ]\n' +
	'    },\n' +
	'    {\n' +
	'      "id" : "1",\n' +
	'      "firstName": "John",\n' +
	'      "lastName": "Doe",\n' +
	'      "gradYear": "2210",\n' +
	'      "advisor": "John Doe 2",\n' +
	'      "projects": {\n' +
	'        "project": {\n' +
	'          "id": "1",\n' +
	'          "name": "The best project",\n' +
	'          "desc": "This is a great description"\n' +
	'        }\n' +
	'      }\n' +
	'    }\n' +
	'  ]\n' +
	'}\n';

exampleJson = JSON.parse(exampleJson);
app.post('/get-userinfo', function (req, res) {
	var id = req.body.id;
	console.log(id);
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.end(JSON.stringify({
		user: exampleJson.profiles[0].id,
		projectAmount: exampleJson.profiles[0].projects.length,
		projectsJSON: exampleJson.profiles[0].projects
	}));
});
