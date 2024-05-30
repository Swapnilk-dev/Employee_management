const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(employeeRoutes);

const PORT = process.env.PORT || 9002;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
