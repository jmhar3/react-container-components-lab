// Code MovieReviews Here
import React from 'react';

const Review = (link, headline, author, summary) => {
    return (
        <div className="review">
            <header>
                <a href={link.url}>{headline}</a>
                <h4>{author}</h4>
            </header>
            <p>{summary}</p>
        </div>
    )
}

const MovieReviews = ({reviews}) => {
    return (
        <div className="review-list">
            {reviews.map(Review)
            }
        </div>
    )
}

MovieReviews.defaultProps = {
    reviews: []
};

export default MovieReviews