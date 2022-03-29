import { useState, useEffect } from 'react'
import { Mainpage } from '../services/Constants'


export default function Moviepage() {

//make a state to hold the results from the api call
const [disneyChars, setDisneyChars] = useState([])
// const [pageNum,setPageNum] = useState(1)
const [text,setText] = useState(' ')
const [suggestions,setSuggestions] = useState([])




    useEffect(() => {
        const fetchData = async () => {
            try {
             const response = await Mainpage();
             setDisneyChars(response.data);
            console.log(response.data)
            
            
            } catch (error) {
                console.log(error);
              }
            }
        
        fetchData()
        
    },[])
    const onChangeHandler = (text) => {
        let matches = []
        if (text.length > 0){
            matches = disneyChars.filter((name) => {
                // const regex = new RegExp[`${text}`, "gi"];
                return name.name.match(text)
            })
        }
        console.log(matches)
        setSuggestions(matches)
        setText(text)
    }

    const onsuggestion = (text) => {
        setText(text);
        setSuggestions([]);
    }
    

return(
    <div className=''>
         
         

            <div className='search'>
                

                <input type="text" className='search-input' style={{marginTop: 10 }}
                onChange={e => onChangeHandler(e.target.value)}
                value={text}
                 />
                 
              {suggestions && suggestions.map((suggestion,i) => 

                <div key={i} className='suggestion' onClick={() => onsuggestion(suggestion.name)  }>
                {suggestion.name}</div>

              )}
               
            </div>
            
        
          
    
    </div>
)
}