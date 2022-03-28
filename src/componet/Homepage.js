import Cardone from "./cardpanels/Cardone";
import Cardthree from "./cardpanels/Cardthree";
import Cardtwo from "./cardpanels/Cardtwo";




export default function HomePage () {
    return (
        <div>
           
            <div className='flip-char'>
                <Cardone />
                <Cardtwo />
                <Cardthree />
            </div>

        </div>
    )
}