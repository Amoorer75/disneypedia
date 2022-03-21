import { useEffect, useState } from "react";
import {HomeCardthree} from '../../services/Constants'


export default function Cardthree () {
    const[card,setCard] = useState([])


    const fetchData = async (num) => {
        try {
         const response = await HomeCardthree(num);
         setCard(response);;
         console.log(response)
        
        } catch (error) {
            console.log(error);
          }
        }

        useEffect(() =>[
            fetchData(charIdNum(7438))

        ],[])
        
        
        const charIdNum = (num) => {
        
            const newNum = Math.floor(Math.random() * num)

            return newNum
        }
        console.log(charIdNum(7438))
        //149 pages

        return (
            <div className="home flip-char-grid-col-3">
              <section className="flip-card">
                <div className="inner">
                  <div className="front">
                    <img
                      src={card.imageUrl}
                      alt="You got this"
                    />
                  </div>
                  <div className="back">
                      {/* <img src={RandomGif} /> */}
                      
                  </div>
                </div>
              </section>
            </div>
          );
        };