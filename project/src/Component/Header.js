import React, { Component } from 'react';

class Header extends Component{
    render(){
    return (
        <div>
            <h1 className="head">
                NETFLIX
            </h1>
            <nav>
                <a href="#"><li>Movies</li></a>
                <a href="#"><li>Titles</li></a>
                <a href="#"><li>My List</li></a>
                <a href="#"><li>TV Shows</li></a>
            </nav>
        </div>
    )
}

}
export default Header;