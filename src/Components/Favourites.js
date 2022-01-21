import React, { Component } from 'react';
import { movies } from './getMovies'

export default class Favourites extends Component {
    constructor() {
        super();
        this.state = {
            geners: [],
            currentGenre: 'All Genres',
            favourite: []
        }
    }
    render() {
        const genreids = {
            28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History',
            27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-Fi', 10770: 'TV', 53: 'Thriller', 10752: 'War', 37: 'Western'
        };
        let movie = movies.results
        let tempArr = []
        tempArr.unshift("All Genres")
        movie.forEach((currentMovie) => {
            if (!tempArr.includes(genreids[currentMovie.genre_ids[0]])) {
                tempArr.push(genreids[currentMovie.genre_ids[0]])
            }
        })
        return (
            <div>
                <div className='row'>
                    <div className='col-2'>
                        <ul className="list-group">
                            {
                                tempArr.map((genre) => (
                                    this.state.currentGenre === genre ?
                                        <li className="list-group-item" style={{ background: '#3f51b5', color: 'white', fontWeight: 'bold' }}>{genre}</li> :
                                        <li className="list-group-item" style={{ background: 'white', color: '#3f51b5' }}>{genre}</li>

                                ))
                            }
                        </ul>
                    </div>
                    <div className='col-10'>
                        <div className='row'>
                            <div className='col-6'>
                                <input type="text" className="form-control" placeholder='Search' />
                            </div>
                            <div className='col-6'>
                                <input type="number" className="form-control" placeholder='Row Count' />
                            </div>
                        </div>
                        <div className='row'>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Title</th>
                                        <th scope="col">Genre</th>
                                        <th scope="col">Popularity</th>
                                        <th scope="col">Rating</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        movie.map((movieObj) => (
                                            <tr>
                                                <th style={{ 'textAlign': 'left' }}>         <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} style={{ height: "5vh", width: "5vw", marginRight: "5px" }} />
                                                    {movieObj.original_title}</th>
                                                <th scope="col">{genreids[movieObj.genre_ids[0]]}</th>
                                                <th scope="col">{movieObj.popularity}</th>
                                                <th scope="col">{movieObj.vote_count}</th>
                                                <th scope="col"><button type="button" className="btn btn-danger">Delete</button></th>
                                            </tr>
                                        ))
                                    }



                                </tbody>
                            </table>
                        </div>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}
