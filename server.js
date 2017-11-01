const express = require('express'), app = express();
const bodyParser = require('body-parser');
app.use(express.static(__dirname + '/public_html'));
app.listen(process.env.PORT || 8080);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/get-userinfo', function (req, res) {
	var id = req.body.id;
	console.log(id);
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.end(JSON.stringify({
		user: id
	}));
});
