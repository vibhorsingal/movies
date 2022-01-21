import React, { Component } from 'react'
import axios from 'axios';

export default class Movies extends Component {
    constructor() {
        super();
        this.state = {
            hover: '',
            page: [1],
            currentPage: 1,
            movies: [],
            favourites: []
        }
    }
    async componentDidMount() {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=0e9c0018f15145c42f0977307ac9f935&language=en-US&page=%24%7BPAGE_NO=${this.state.currentPage}`)
        const data = res.data
        this.setState({
            movies: [...data.results]
        })
    }
    changeMovies = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=0e9c0018f15145c42f0977307ac9f935&language=en-US&page=${this.state.currentPage}`)
        const data = res.data
        console.log("called")
        this.setState({
            movies: [...data.results]
        })
    }
    handleNext = () => {
        if (this.state.currentPage == this.state.page.length) {
            this.setState({
                page: [...this.state.page, this.state.page.length + 1],
                currentPage: this.state.currentPage + 1
            }, this.changeMovies)
        }
        else {
            this.setState({
                currentPage: this.state.currentPage + 1
            }, this.changeMovies)
        }
    }
    handlePrev = () => {
        if (this.state.currentPage != 1) {
            this.setState({
                currentPage: this.state.currentPage - 1
            }, this.changeMovies)
        }
    }
    handleClick = (value) => {
        if (value != this.state.currentPage) {
            this.setState({
                currentPage: value
            }, this.changeMovies)
        }
    }
    handleFavourite = () => {
        const oldData = JSON.parse(localStorage.getItem('movies') || '[]')

    }
    render() {
        return (
            <div>
                <h2>Trending</h2>
                <div>
                    {
                        this.state.movies.map((movieObj) => (
                            <div onMouseEnter={() => {
                                this.setState({ hover: movieObj.id })
                            }} key={movieObj.id}>
                                <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} className="card-img banner-img " alt="..." style={{ height: "40vh", width: "40vw" }} />
                                <div className="card-body">
                                    <h5 className="card-title banner-title">{movieObj.original_title}</h5>
                                    <p className="card-text">{movieObj.overview}</p>
                                    <div>
                                        {
                                            this.state.hover === movieObj.id &&
                                            <a type="button" className="btn btn-success" onClick={() => { this.handleFavourite(movieObj) }}>ADD TO FAVOURITE</a>
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" onClick={this.handlePrev}>Previous</a></li>
                        {
                            this.state.page.map((value) => (
                                <li className="page-item" key={value}><a className="page-link" onClick={() => { this.handleClick(value) }}>{value}</a></li>
                            ))
                        }
                        <li className="page-item"><a className="page-link" onClick={this.handleNext}>Next</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
