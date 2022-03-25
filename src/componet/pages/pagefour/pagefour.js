import { useEffect, useState, } from "react";
import {useNavigate} from 'react-router-dom'
import { Mainpage } from '../../../services/Constants'
import Getcharfour from './Getcharfour'
import Selectedcharfour from "./Selectedcharfour";



export default function Pagefour (){
    //make a state to hold the results from the api call
    const [disneyChars, setDisneyChars] = useState([])
    // const [pageNum,setPageNum] = useState(1)
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
            
            fetchData(4)
            
        },[])
        
        //add 1 to pageNum
        // function handleNext (e){
        //    setHoldNum(e) 
        //    console.log(holdNum)
        // }
        


    return(
        <div className='char-main-view'>
            <div className='grid-center-title'>
            <button className='name noseselect prev' onClick={() => navigate(`/page3`)}>Back</button>
            <h2 className='title-col-span-2'>4</h2>
            
            </div>
         
            <div className='listandselected'>
                
               
            <Selectedcharfour chars={disneyChars}/>
            <Getcharfour char={disneyChars}/>
            {/* <Pagetwo /> */}
            
            
            
            </div>
        </div>
    )
}