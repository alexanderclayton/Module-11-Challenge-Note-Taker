const express = require('express');
const PORT = 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

require('./routes/api.js')(app);
require('./routes/html.js')(app);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});