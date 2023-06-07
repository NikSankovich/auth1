let express = require('express');
const cors = require("cors");
let app = express();

const port = process.env.PORT || 4002;
app.use(cors());
app.use(express.json());
app.options("*", cors());
let authRoutes = require('./routes/authRoutes');
app.use('/', authRoutes);

app.listen(port, () => {
    console.log('Web server listening on port ', port);
})