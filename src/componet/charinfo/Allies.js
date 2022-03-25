import {useState,useEffect} from 'react';

export default function Allies (props) {
    const [allies,setAllies] = useState([])

    // console.log(props.tvshows)

    
    useEffect(() => {
        if (props.allies.length != 0 ){
            console.log(props.allies)  
           return setAllies(props.allies)
        }else {
            return setAllies(['None'])
        }

    },[])
       
        
    const Friends = ( pal ) => {

        if ( pal  != 'None'){

            return(
                <div>   

                <li>  {allies} </li>
                
                </div>
            )     
    }
} 
  
        const Catagory = (game) => {

            if ( game != 'None'){
        
                return(
                    <div>
                    
                    <h4>Allies:</h4>
        
                    </div>
                )
                
        }
        } 
    

    return(
        <div>
            <ul>
               {Catagory(allies)}
               {Friends(allies)}
            </ul>

        </div>

    )
}