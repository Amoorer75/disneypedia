import { useState, useEffect } from 'react'


export default function Moviepage(props) {

//make a state to hold the results from the api call
const [disneyChars, setDisneyChars] = useState([])
// const [pageNum,setPageNum] = useState(1)



const fetchData = async () => {
    try {
     const response = await props.url;
    //  setDisneyChars(response.data);
    console.log(response)
    
    
    } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
        
        fetchData()
        
    },[])

return(
    <div>
        
    
    </div>
)
}