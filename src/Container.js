import { Routes, Route } from "react-router-dom"
import Listofchar from './componet/pages/pageone/Listofchar'
import Selectedchar from './componet/pages/pageone/Selectedchar'
import Selectedchartwo from './componet/pages/pagetwo/Selectedchartwo'
import Selectedcharthree from './componet/pages/pagethree/Selectedcharthree'
import Selectedcharfour from './componet/pages/pagefour/Selectedcharfour'
import NotFound from './componet/Notfound'
import HomePage from "./componet/Homepage"
import Pagetwo from "./componet/pages/pagetwo/Pagetwo"
import Pagethree from "./componet/pages/pagethree/Pagethree"
import Pagefour from "./componet/pages/pagefour/pagefour"
import Moviepage from "./componet/Moviepage"


function Container(){


    return(

        <div>
            <Routes>
                <Route path={'/'} element={<HomePage />} />
                <Route path={'character'}  element={<Listofchar />}>
                <Route path={':item_id'} element={<Selectedchar/>} />
               
                </Route>

                <Route path={'page2'} element={<Pagetwo />}>
                <Route path={':item_id'} element={<Selectedchartwo />} />
               
                </Route>

                <Route path={'page3'} element={<Pagethree />}>
                <Route path={':item_id'} element={<Selectedcharthree />} />
               
                </Route>

                <Route path={'page4'} element={<Pagefour />}>
                <Route path={':item_id'} element={<Selectedcharfour />} />
               
                </Route>

                <Route path={'movies'} element={<Moviepage /> } />
                
                <Route path={'*'} element={ <NotFound />} />
            </Routes>

        </div>

    )
}

export default Container

