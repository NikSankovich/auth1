let express = require('express');

let app = express();

const port = process.env.PORT || 4002;

app.use(express.json());

let authRoutes = require('./routes/authRoutes');
app.use('/', authRoutes);

app.listen(port, () => {
    console.log('Web server listening on port ', port);
})