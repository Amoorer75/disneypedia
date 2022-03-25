import {useState,useEffect} from 'react';

export default function ShortFilms (props) {
    const [shortFilm,setShortFilm] = useState([])

    // console.log(props.tvshows)

    
    useEffect(() => {
        if (props.shortFilms.length != 0 ){
            console.log(props.shortFilms)  
           return setShortFilm(props.shortFilms)
        }else {
            return setShortFilm(['None'])
        }

    },[])
       
        
        //this function is returning a result as long as our sflims does't have
    //none in it
    const sFilms = (show) => {

        if ( show != 'None'){

            return(
                <div>   

                <li>  {show} </li>
                
                </div>
            )     
    }
} 

//this function is returning a result as long as our sfilms does't have
//none in it
const Catagory = (title) => {

    if ( title != 'None'){

        return(
            <div>
            
            <h4>Short Films:</h4>

            </div>
        )
        
}
} 
    return(
        <div>
            <ul>
                {Catagory(shortFilm)}
                {sFilms(shortFilm)}
            </ul>

        </div>

    )
}