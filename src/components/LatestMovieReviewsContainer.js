import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '8G30Q1m8vUbUt3GqV4Vp0bUbdWGguDFT';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        fetch(URL)
            .then(res => res.json)
            .then(reviews => this.setState({reviews: reviews.results}))
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <h3>Latest Reviews</h3>
                <MovieReviews reviews={this.state.review}/>
            </div>
        )
    }
}