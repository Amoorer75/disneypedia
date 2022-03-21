import { Routes, Route } from "react-router-dom"
import Listofchar from './componet/Listofchar'
import Selectedchar from './componet/Selectedchar'
import NotFound from './componet/Notfound'
import HomePage from "./componet/Homepage"

function Container(){


    return(

        <div>
            <Routes>
                <Route path={'/'} element={<HomePage />} />
                <Route path={'character'}  element={<Listofchar />}>
                <Route path={':item_id'} element={<Selectedchar/>} /></Route>
                <Route path={'*'} element={ <NotFound />} />
            </Routes>

        </div>

    )
}

export default Container

{/* <Route path='search' element={<SearchResults /> } > 
<Route path=':image_id' element={<PopUpTester /> } /> </Route> */}