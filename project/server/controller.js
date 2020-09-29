const movies = [
    {
        id: 0,
        name: 'Interstellar',
        date: '2014',
        img: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
    },
    {
        id: 1,
        name: 'Inception',
        date: '2010',
        img: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg'
    },
    {
        id: 2,
        name: 'Knocking on heavens door',
        date: '1990',
        img: 'https://m.media-amazon.com/images/M/MV5BMTk2MjcxNjMzN15BMl5BanBnXkFtZTgwMTE3OTEwNjE@._V1_UY1200_CR135,0,630,1200_AL_.jpg'
    },
    {
        id: 3,
        name: 'Terminator',
        date: '1985',
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Terminator1984movieposter.jpg/220px-Terminator1984movieposter.jpg'
    }
];



function getMovies(req, res) {
    res.status(200).send(movies)
}
function deleteMovie(req, res){
    let index = req.params.index
    // let { index } = req.params;
    movies.splice(index, 1)
    res.status(200).send('Movie Deleted');

}


module.exports = {
    getMovies,
    deleteMovie
}

