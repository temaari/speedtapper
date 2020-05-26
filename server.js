const  express = require('express');
const  mongoose = require('mongoose');
const  morgan = require('morgan');
const  path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api')

// Setting up MongoDB
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/seer29' , {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!');
});

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// http request logger
app.use(morgan('tiny'));
app.use('/api', routes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.listen(PORT, console.log(`Server is starting at ${PORT}`));