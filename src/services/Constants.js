import axios from 'axios'


export async function Constants(){
    const Result = await axios.get(`https://api.disneyapi.dev/characters?page=148`)
  
    .then(({ data }) => {
        return data;
      });
      return Result;
    
}
export async function HomeCardOne(num){
    const Result = await axios.get(`https://api.disneyapi.dev/characters/${num}`)
  
    .then(({ data }) => {
        return data;
      });
      return Result;
    
}
export async function HomeCardtwo(num){
    const Result = await axios.get(`https://api.disneyapi.dev/characters/${num}`)
  
    .then(({ data }) => {
        return data;
      });
      return Result;
    
}
export async function HomeCardthree(num){
    const Result = await axios.get(`https://api.disneyapi.dev/characters/${num}`)
  
    .then(({ data }) => {
        return data;
      });
      return Result;
    
}