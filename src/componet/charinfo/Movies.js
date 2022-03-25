import {useState,useEffect} from 'react';

export default function Movies (props) {
    const [movies,setMovies] = useState([])

    // console.log(props.tvshows)

    
    useEffect(() => {
        if (props.movies.length != 0 ){
            console.log(props.movies)  
           return setMovies(props.movies)
        }else {
            return setMovies(['None'])
        }

    },[])
       
        
    const Movies = (film) => {

        if ( film != 'None'){

            return(
                <div>   

                <li>  {movies} </li>
                
                </div>
            )     
    }
} 
        const Catagory = (title) => {

            if ( title != 'None'){
        
                return(
                    <div>
                    
                    <h4>Movies:</h4>
        
                    </div>
                )
                
        }
        } 

    

    return(
        <div>
            <ul>
            {Catagory(movies)}
            {Movies(movies)}
            </ul>

        </div>

    )
}