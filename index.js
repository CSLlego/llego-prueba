const express = require('express');
const cors = require('cors');
const app = express();

const { config } = require('./config/config');
const routerApi = require('./routes/index');

// middleware
app.use(cors());
app.use(express.json());

// routes
routerApi(app);

app.get('*', (req, res) => {
    res.sendStatus(404);
});

app.listen(config.port, console.log(`SERVER ON PORT ${config.port}`));