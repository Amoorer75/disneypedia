import { useParams } from "react-router-dom";
import Allies from "../../charinfo/Allies";
import Enemies from "../../charinfo/Enemies";
import Movies from "../../charinfo/Movies";
import Tvshows from "../../charinfo/Tvshows";
import VideoGames from "../../charinfo/VideoGames";
import ShortFilms from "../../charinfo/ShortFilms";
import ParkAttractions from "../../charinfo/ParkAttractions"

export default function Selectedchar (props) {

    const {item_id} = useParams();
    
    const charIdNumber = parseInt(item_id);
    console.log('image_id=',charIdNumber)

    const getImgUrl = props.chars.map((item) => {
        
        if (charIdNumber === item._id){
        
          return (
              <div className='selected-char'>
                <div className='char-name'>
                <h2>{item.name}</h2>
                </div>

            <img src={item.imageUrl} />

            <div className='char-info'>
                
            <Tvshows tvshows= {item.tvShows} />
            <ShortFilms shortFilms= {item.shortFilms} /> 
            <ParkAttractions parkAttractions={item.parkAttractions} />
            <Enemies enemies= {item.enemies} />
            <Allies allies= {item.allies} />
            <Movies movies= {item.films} />
            <VideoGames videoGames= {item.videoGames} />
            </div>
            </div>
            

            
          )
        }
      })

    return (
        <div >

        {getImgUrl}
        </div>
    )

}