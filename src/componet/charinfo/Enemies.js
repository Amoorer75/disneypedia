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
       
        
        const enemie = enemies.map((enemie) =>{
            return(
              <li>  {enemie} </li>
            )
        })
  

    

    return(
        <div>
            <ul>
                <h4>Enemies:</h4>{enemie}
            </ul>

        </div>

    )
}