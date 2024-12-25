import React, {useState} from 'react';

function Searching(props) {
    const inlineStyle = {
        backgroundColor: `rgba(233, 228, 228, 0)`,
        border:'none',
    }

    const listFilm = [`new`,`old`,`mild`]
    const [filmList, setFilmList]=useState([]);
    

    let [showState, setShowState] = useState(false);
    function changeShowState(){
        setShowState(showState=>!showState);
    }

    let[value, setFilmName] = useState('')
    
    const filtered = filmList.filter(film=>{
        return film.name.toLowerCase().includes(value.toLowerCase());
    })
    const [isOpen, setIsOpen] = useState(true)

    const itemClick = (e)=>{
        setFilmName(e.target.textContent)
        setIsOpen(!isOpen)
    }
    const inputClick = ()=>{
        setIsOpen(true)
    }


    return (
        <>
        
                {showState?<div>
                <input 
                    value={value}
                    placeholder='Your film' 
                    type="text" 
                    onClick = {inputClick}
                    onChange={(e) => setFilmName(e.target.value)}/>
                <ul>
                   {
                   value && isOpen ? 
                   filtered.map((film, index)=>{
                        return (
                        <li key ={index}
                            onClick={itemClick}>
                            {film.name}
                            </li>
                            )
                     })
                    :null
                    }
                </ul>
                </div>:null}
            <h6>
                <button style={inlineStyle} onClick={changeShowState} className='searchBtn'>
                <svg fill="#ffffff" width="30px" height="30px" viewBox="0 -0.24 28.423 28.423" id="_02_-_Search_Button" data-name="02 - Search Button" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="Path_215" data-name="Path 215" d="M14.953,2.547A12.643,12.643,0,1,0,27.6,15.19,12.649,12.649,0,0,0,14.953,2.547Zm0,2A10.643,10.643,0,1,1,4.31,15.19,10.648,10.648,0,0,1,14.953,4.547Z" transform="translate(-2.31 -2.547)" fill-rule="evenodd"></path> <path id="Path_216" data-name="Path 216" d="M30.441,28.789l-6.276-6.276a1,1,0,1,0-1.414,1.414L29.027,30.2a1,1,0,1,0,1.414-1.414Z" transform="translate(-2.31 -2.547)" fill-rule="evenodd"></path> </g></svg>
                    {/* <i className="fa-solid fa-magnifying-glass fa-2xl"></i> */}
                    </button>
                    </h6>
        </>
    );
    
}
export default Searching;