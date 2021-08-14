import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '8G30Q1m8vUbUt3GqV4Vp0bUbdWGguDFT';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state={
            search: '',
            reviews: []
        }
    }

    searchInput = e => {
        this.setState({search: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();

        fetch(URL+this.state.search)
            .then(res => res.json())
            .then(filteredReviews => this.setState({reviews: filteredReviews.results}))
    }

    render() {
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label>Search Movie Reviews</label>
                    <input type="text" onChange={this.searchInput} />
                    <button type="submit">Submit</button>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}