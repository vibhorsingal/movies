import React, { Component } from 'react'
import { movies } from './getMovies'

export default class Banner extends Component {
    movie = movies.results[0];
    render() {
        return (
            <div>
                <div className="card" >
                    <img src={`https://image.tmdb.org/t/p/original${this.movie.backdrop_path}`} className="card-img-top banner-img" style={{ width: "100vw", height: "80vh" }} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title banner-title">{this.movie.original_title}</h5>
                        <p className="card-text">{this.movie.overview}</p>
                    </div>
                </div>
            </div>
        )
    }
}
