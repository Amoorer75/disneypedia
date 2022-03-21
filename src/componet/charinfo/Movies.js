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
       
        
        const film = movies.map((movie ) =>{
            return(
              <li>  {movie} </li>
            )
        })
  

    

    return(
        <div>
            <ul>
                <h4>Films:</h4>{film}
            </ul>

        </div>

    )
}