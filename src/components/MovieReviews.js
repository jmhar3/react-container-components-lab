// Code MovieReviews Here
import React from 'react';

const MovieReviews = (array) => {
    return(
        <div className="review-list">
            {array.forEach(element => {
                return(<div className="review">{element}</div>)
            })}
        </div>
    )
}

export default MovieReviews