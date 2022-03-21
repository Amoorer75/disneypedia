import { useEffect, useState } from "react";
import { Constants } from '../services/Constants'
import Getchar from './Getchar'
import Selectedchar from "./Selectedchar";



export default function Listofchar(){
    //make a state to hold the results from the api call
    const [disneyChars, setDisneyChars] = useState([])
    

    const fetchData = async () => {
        try {
         const response = await Constants();
         setDisneyChars(response.data);;
        
        
        } catch (error) {
            console.log(error);
          }
        }

        useEffect(() => {
            fetchData()
        },[])
        console.log(disneyChars)


    return(
        <div className='char-main-view'>
            <div className='grid-center-title'>
            <h2 className='title-col-span-2'>List Of Disney Characters</h2>
            </div>
         
            <div className='listandselected'>

            <Selectedchar chars={disneyChars}/>
            <Getchar char={disneyChars}/>
            
            
            
            </div>
        </div>
    )
}