import { useEffect, useState, } from "react";
import {useNavigate} from 'react-router-dom'
import { Mainpage } from '../../../services/Constants'
import Getchar from './Getchar'
import Pagetwo from "../pagetwo/Pagetwo";
import Selectedchar from "./Selectedchar";



export default function Listofchar(){
    //make a state to hold the results from the api call
    const [disneyChars, setDisneyChars] = useState([])
    const [pageNum,setPageNum] = useState(1)
    const navigate = useNavigate()
    

    const fetchData = async (page) => {
        try {
         const response = await Mainpage(page);
         setDisneyChars(response.data);
        
        
        } catch (error) {
            console.log(error);
          }
        }

        useEffect(() => {
            
            fetchData(pageNum)
            
        },[])
        
        //add 1 to pageNum
        // function handleNext (e){
        //    setHoldNum(e) 
        //    console.log(holdNum)
        // }
        
     function handleNext () {

        setPageNum(prevCount=> prevCount + 1)

     }


    return(
        <div className='char-main-view'>
            <div className='grid-center-title'>
            
            <h2 className='title-col-span-2'>{pageNum}</h2>
            {/* <button className='name noseselect next' onClick={() => navigate(`/page2`)}>Next</button> */}
            <button className='name noseselect next' onClick={(e) => handleNext(e)}>Next</button>
            </div>
         
            <div className='listandselected'>
                
               
            <Selectedchar chars={disneyChars}/>
            <Getchar char={disneyChars}/>
            {/* <Pagetwo /> */}
            
            
            
            </div>
        </div>
    )
}