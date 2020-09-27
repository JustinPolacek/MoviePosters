const movies = [
    {
        id: 0,
        name: 'Interstellar',
        date: '2014'
    },
    {
        id: 1,
        name: 'Inception',
        date: '2010'
    },
    {
        id: 2,
        name: 'Knocking on heavens door',
        date: '1990'
    },
    {
        id: 3,
        name: 'Terminator',
        date: '1985'
    }
];



function getMovies(req, res) {
    res.status(200).send(movies)
}


module.exports = {
    getMovies
}

