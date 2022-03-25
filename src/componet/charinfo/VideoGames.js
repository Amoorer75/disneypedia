import {useState,useEffect} from 'react';

export default function VideoGames (props) {
    const [vidGame,setVidGame] = useState([])

    //  console.log(props.tvshows)

    
    useEffect(() => {
        //checking for any thing in the array 
        //if the array has content push it to vidGame
        //if not make vidGame = None
        if (props.videoGames.length != 0 ){
            console.log(props.videoGames)  
           return setVidGame(props.videoGames)
        }else {
            return setVidGame(['None'])
        }

    },[])
       
    //this function is returning a result as long as our vidGame does't have
    //none in it
    const games = (game) => {

        if ( game != 'None'){

            return(
                <div>   

                <li>  {game} </li>
                
                </div>
            )     
    }
} 

//this function is returning a result as long as our vidGame does't have
//none in it
const Catagory = (title) => {

    if ( title != 'None'){

        return(
            <div>
            
            <h4>Video Games:</h4>

            </div>
        )
        
}
} 
    return(
        <div>
            
            <ul>
                {Catagory(vidGame)}
                {games(vidGame)}
            </ul>

        </div>

    )
    }