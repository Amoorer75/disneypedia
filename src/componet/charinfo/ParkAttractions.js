import {useState,useEffect} from 'react';

export default function ParkAttractions (props) {
    const [parkAttraction,setParkAttractions] = useState([])

    // console.log(props.tvshows)

    
    useEffect(() => {
        if (props.parkAttractions.length != 0 ){
            console.log(props.parkAttractions)  
           return setParkAttractions(props.parkAttractions)
        }else {
            return setParkAttractions(['None'])
        }

    },[])
       
        
        //this function is returning a result as long as our sflims does't have
    //none in it
    const pAttractions = (show) => {

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
            
            <h4>Park Attraction:</h4>

            </div>
        )
        
}
} 
    return(
        <div>
            <ul>
                {Catagory(parkAttraction)}
                {pAttractions(parkAttraction)}
            </ul>

        </div>

    )
}