import React from 'react';
import PropTypes from 'prop-types';

const MovieDetailsRating = props => {

    const getRatingVal = (rating) => {
        switch(rating.Source){
            case 'Internet Movie Database':
                return Number(rating.Value.split('/')[0]);
            case 'Rotten Tomatoes':
                return Number(rating.Value.replace('%', '')) / 10.0;
            case 'Metacritic':
                return Number(rating.Value.split('/')[0]) / 10.0;
            default:
                return 0.0;
        }
    }

    const getRatingClass = (rating) => {
        let val = getRatingVal(rating);

        if(val <= 2.0){
            return 'red-text text-darken-2';
        } else if (val > 2.0 && val <= 4.0){
            return 'amber-text text-darken-3';
        } else if (val > 4.0 && val <= 6.0){
            return 'yellow-text text-accent-3';
        } else if (val > 6.0 && val <= 8.0){
            return 'cyan-text text-darken-2';
        } else if (val > 8.0) {
            return 'green-text green-accent-4';
        }
    }

    return (
        props.ratings.length ? (
            props.ratings.map((rating, index) => 
                <div key={`rating-${index}`}>
                    <span className="grey-text text-darken-3 s16">
                        {rating.Source}:  
                    </span>
                    <span className={`${getRatingClass(rating)} rating s20 f600`}>
                        {rating.Value} 
                    </span>
                </div>
            )
        ) : (
            <div>
                <span className="grey-text text-darken-3 s16">
                    Nenhuma avaliação encontrada.
                </span>
            </div>
        )
    )
}

MovieDetailsRating.propTypes = {
    ratings : PropTypes.array.isRequired
}

export default MovieDetailsRating;