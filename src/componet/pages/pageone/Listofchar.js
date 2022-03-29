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
             
        },[pageNum])
        

        
     function handleNext () {

        setPageNum(prevCount=> prevCount + 1)
       

     }
     function handlePrev () {

         if(pageNum !== 1){

            return (
                <button className='name noseselect prev' onClick={() => setPageNum(prevCount=> prevCount - 1)}>Next</button>
            )
         }
         
     }


    return(
        <div className='char-main-view'>
            <div className='grid-center-title'>
            {handlePrev()}
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