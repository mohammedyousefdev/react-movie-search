import React from "react";

export default class Search extends React.Component {
    state = {
        search:"panda",
        type:'all'
    }
    searchHandle = (e) => {
        if(e.key === 'Enter'){
            this.props.searchMovie(this.state.search, this.state.type);
        }
    }

    typeHandle = (e) => {
        this.setState( ()=> ({type:e.target.dataset.type}), () => {
            this.props.searchMovie(this.state.search, this.state.type)
        })
    }
    render(){
        return(
            <>
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Type title of movie and press enter"
                    onChange={(e)=>{this.setState({search:e.target.value})}}
                    value={this.state.search}
                    onKeyDown={this.searchHandle}
                />
                <div className="mb-3">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="type" id="inlineRadio1"
                               data-type="all" onChange={this.typeHandle} checked={this.state.type === 'all'} />
                        <label className="form-check-label" htmlFor="inlineRadio1">All</label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="type" id="inlineRadio2"
                               data-type="movie" onChange={this.typeHandle} checked={this.state.type === 'movie'} />
                        <label className="form-check-label" htmlFor="inlineRadio2">Movies</label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="type" id="inlineRadio3"
                               data-type="series" onChange={this.typeHandle} checked={this.state.type === 'series'} />
                        <label className="form-check-label" htmlFor="inlineRadio3">Series</label>
                    </div>

                </div>
            </>
        )
    }
}