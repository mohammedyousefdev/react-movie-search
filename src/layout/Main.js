import React from "react";
import Movies from "../components/Movies";
import Loader from "../components/Loader";
import Search from "../components/Search";

export default class Main extends React.Component {
    state = {
        movies:[],
        loading:true,
        search:""
    }

    componentDidMount() {
        fetch('https://www.omdbapi.com/?i=tt3896198&apikey=dab417ea&s=panda')
            .then(response => response.json())
            .then(data => this.setState({movies:data.Search, loading:false}))
    }

    searchMovie = (str, type = 'all') =>{
        this.setState({loading:true, search:str})
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=dab417ea&s=${str}${type !== 'all' ? `&type=${type}` : '' }`)
            .then(response => response.json())
            .then(data => this.setState({movies:data.Search, loading:false}))
    }



    render(){
        return (
            <div className="container main p-3">
                <Search searchMovie={this.searchMovie} />
                {!this.state.loading ? <Movies search={this.state.search} movies={this.state.movies} /> : <Loader />}
            </div>
        )
    }
}