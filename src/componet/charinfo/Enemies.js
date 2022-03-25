import {useState,useEffect} from 'react';

export default function Enemies (props) {
    const [enemies ,setEnemies ] = useState([])

    // console.log(props.tvshows)

    
    useEffect(() => {
        if (props.enemies.length != 0 ){
            console.log(props.enemies)  
           return setEnemies(props.enemies)
        }else {
            return setEnemies(['None'])
        }

    },[])
       
        
    const Evils = (evil) => {

        if ( evil != 'None'){

            return(
                <div>   

                <li>  {enemies} </li>
                
                </div>
            )     
    }
} 
  
        const Catagory = (title) => {

            if ( title != 'None'){
        
                return(
                    <div>
                    
                    <h4>Enemies:</h4>
        
                    </div>
                )
                
        }
        } 
    

    return(
        <div>
            <ul>
            {Catagory(enemies)}
            {Evils(enemies)}
            </ul>

        </div>

    )
}