import React from 'react';
import PropTypes from 'prop-types';

TitleElemet.propTypes ={
    title:PropTypes.string
}
TitleElemet.defaultProps ={
    title:'No nafe of film'
}

function TitleElemet(props) {
    return (
       
        <h1>{props.title}</h1>
        
    );
}

export default TitleElemet;