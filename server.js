const express = require('express'), app = express();
app.use(express.static(__dirname + '/public_html'));
app.listen(process.env.PORT || 8080);