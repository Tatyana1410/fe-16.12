import React, {useState} from 'react';
import Films from './Films';
import TitleElemet from './TitleElemet';
import Buttons from './Buttons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';


const TextContent = () => {
    
    let stars = [true, true, true, false, false];
    let [rating, setRating] = useState(stars);

    function changeRating(index){
        let newRating = rating.map((element, i) => i <= index);
        setRating(newRating);
    }

   
    return (
        <>
            <div className="text-content">
                <h4>
                    <Films></Films>
                </h4>
                    <TitleElemet title = 'Stranger Things'></TitleElemet>
                <h2>2019 DIRECTOR: 
                    <span className="color">Shawn Levy  </span>     seasons: 
                    <span className="color">3 (5 Episodes)</span>
                </h2>
                <p className="text-file"> 
                'In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.'
                </p>
                
                <p className="size-star">

                {rating.map((value, index) => (
                    value ? <FontAwesomeIcon key={index} icon={faStar} style={{color:'yellow'}} onClick={() => changeRating(index)} />
                          : <FontAwesomeIcon key={index} icon={faStar}  onClick={() => changeRating(index)} />
                          ))}
                </p>
                <Buttons></Buttons>
            
            </div>
            
        </>
    );
};

export default TextContent;