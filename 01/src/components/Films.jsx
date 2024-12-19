import React from 'react';
import PropTypes from 'prop-types';

Films.propTypes = {
    item:PropTypes.string
};
Films.defaultProps = {
    item: 'No info'
}

function Films(props) {
    let genre = ['Drama', 'Thriller', 'Supernatural'];
    let genreEl = genre.map((item, index)=>{
        return <span key={index}> {item} </span>
    });
    return (
        <>
            {genreEl}
        </>
    );
}

export default Films;