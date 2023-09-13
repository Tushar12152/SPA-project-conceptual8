import { useEffect, useState } from "react";
import Cart from "../cart/cart";
import './home.css'
import Card from "../Card/Card";

const Home = () => {
const [allActors,SetAllActors]=useState([])
const [cards,setCards]=useState([])

useEffect(()=>{
     const loadData=async()=>{
        const res=await fetch('/public/data.json')
        const data=await res.json();
        SetAllActors(data)
     }
     loadData()
},[])
// console.log(allActors)

const handdleSelect=(name)=>{
    // console.log(name)
    setCards([...cards,name])

}

    return (
        <div className="  py-52 bg-cover  ">
              <div className="flex  gap-2 justify-between w-[90%] mx-auto ">
              <div className=" w-4/6 grid gap-6 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
                      
                      {
                        allActors.map(actor=><Cart key={actor.id}
                             actor={actor}
                             handdleSelect={handdleSelect}
                        
                        ></Cart>)
                      }
              </div>
              <div className="border-2  border-white w-2/6 ">
                  <h1 className="text-center mt-4 text-white text-xl  ">press Select button to shoe Name  in this box</h1>
                     {/* <Card  card={cards}></Card> */}
                     {
                        cards.map((card,idx)=><Card key={idx} card={card}></Card>)
                     }
              </div>
              </div>
        </div>
    );
};

export default Home;