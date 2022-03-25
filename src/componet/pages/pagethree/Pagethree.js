import { Mainpage } from '../../../services/Constants'
import { useEffect, useState, } from "react";
import {useNavigate} from 'react-router-dom'
import Getcharthree from './Getcharthree'
import Selectedcharthree from "./Selectedcharthree";

export default function Pagetwo (){
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
            
            fetchData(3)
            
        },[])
        
        //add 1 to pageNum
        // function handleNext (e){
        //    setHoldNum(e) 
        //    console.log(holdNum)
        // }
         
        

    return(
        <div className='char-main-view'>
            <div className='grid-center-title'>
            <button className='name noseselect prev' onClick={() => navigate(`/page2`)}>Back</button>
            <h2 className='title-col-span-2'>3</h2>
            <button className='name noseselect next' onClick={() => navigate(`/page4`)}>Next</button>
            </div>
         
            <div className='listandselected'>
                
                
            <Selectedcharthree chars={disneyChars}/>
            <Getcharthree char={disneyChars}/>
            {/* <Pagetwo /> */}
            
            
            
            </div>
        </div>
    )
}