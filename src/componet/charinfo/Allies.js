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
       
        
        const friend = allies.map((ally) =>{
            return(
              <li>  {ally} </li>
            )
        })
  

    

    return(
        <div>
            <ul>
                <h4>Allies:</h4>{friend}
            </ul>

        </div>

    )
}