import Cardone from "./cardpanels/Cardone";
import Cardthree from "./cardpanels/Cardthree";
import Cardtwo from "./cardpanels/Cardtwo";
import Searchinput from "./Searchinput";



export default function HomePage () {
    return (
        <div>
            <div>
           <Searchinput />
           </div>
            <div className='flip-char'>
                <Cardone />
                <Cardtwo />
                <Cardthree />
            </div>

        </div>
    )
}