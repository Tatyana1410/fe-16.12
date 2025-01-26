import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSlash} from '@fortawesome/free-solid-svg-icons';


Films.propTypes = {
    item:PropTypes.string
};
Films.defaultProps = {
    item: 'No info'
}

function Films(props) {
    let genre = ['Drama', 'Thriller', 'Supernatural'];
    let genreEl = genre.map((item, index)=>{
        return <span key={index}> {item} <FontAwesomeIcon icon={faSlash} className='slash' style={{rotate:'52deg'}}/></span>
         
    });
    return (
        <>
            {genreEl}
        </>
    );
}

export default Films;