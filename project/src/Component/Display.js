  
import React, {Component} from 'react';
import axios from 'axios';

class Display extends Component {
    constructor(){
        super();
        this.state = {
         myList: [] 
        }
    }
 componentDidMount(){
    this.getMovies();

 }
 componentDidUpdate = () => {
    this.getMovies();
 }
  
 getMovies = () =>{
    axios.get('/api/movies')
    .then(res => {
        console.log(res.data)
        this.setState({
        myList: res.data
        })
    })
    .catch(error => {
        console.error(error);
    })
 }

updateState = (item, value) =>{
    this.setState({
      item:value  
    })
}
onDeleteClick = (index) => {
axios.delete(`/api/movies/${index}`)
.then(res => {
    console.log(res.data)
})
.catch(error => {
    console.error(error);
});
}


    render(){
        return (
            <section>
                {this.state.myList.map((movie, index) =>{
                  return(  
                    <div>
                        <h2>{movie.name}</h2>
                        <img src={movie.img} alt="movie"/> 
                        <button onClick={() => {this.onDeleteClick(index)}}>Delete</button>
                    </div>
                  )
                })}
                
               
            </section>
        )
    }
}

export default Display;