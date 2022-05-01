import {useState,useEffect} from 'react';

export default function Tvshows (props) {
    const [tvShow,setTvShow] = useState([])

    // console.log(props.tvshows)

    
    useEffect(() => {
        if (props.tvshows.length != 0 ){
            console.log(props.tvshows)  
           return setTvShow(props.tvshows)
        }else {
            return setTvShow(['None'])
        }

    },[])
       
        
        //this function is returning a result as long as our vidGame does't have
    //none in it
    const tShow = (show) => {

        if ( show !='None'){

            return(
                <div>   

                <li>  {show} </li>
                
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
            
            <h4>Tv Shows:</h4>

            </div>
        )
        
}
} 
    return(
        <div>
            <ul>
                {Catagory(tvShow)}
                {tShow(tvShow)}
            </ul>

        </div>

    )
}