const express = require('express');
const app = express();
const controller = require('./controller');

console.log(controller)

app.use(express.json());


// teams controller
app.get('/api/movie', controller.getMovies);



const port = 5050
app.listen(port, () => console.log(`Server rocking out on ${port}`));