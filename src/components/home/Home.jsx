import { useEffect, useState } from "react";
import Cart from "../cart/cart";
import './home.css'
import Card from "../Card/Card";

const Home = () => {
const [allActors,SetAllActors]=useState([])
const [cards,setCards]=useState([])
const [count,setCount]=useState(0)
const [remaining,setRemaining]=useState(0)

useEffect(()=>{
     const loadData=async()=>{
        const res=await fetch('/public/data.json')
        const data=await res.json();
        SetAllActors(data)
     }
     loadData()
},[])
// console.log(allActors)

const handdleSelect=(card)=>{
    // console.log(name)
const isExist=cards.find(item=>item.id===card.id)
// console.log(isExist)
// isExist?alert('Already booked'):setCards([...cards,card])
let count=card.salary
if(isExist){
   return alert('Already booked')
}
else{
    cards.forEach(item=>{
        count=count+item.salary
        
    })
    
    
     
    setCards([...cards,card])
}


const remaining=20000-count;
remaining<0? alert('Your Balance is Short'):setRemaining(remaining)


  if(count<20000){
    setCount(count)
  }
  else{
    return
  } 

}
console.log(remaining)

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
                    <div className="flex">
                    <h1 className= "bg-violet-600 text-white mt-1 p-2 mb-8 rounded-lg text-center  mx-auto ">Total Hired: {cards.length}</h1>
                     <h1  className= "bg-violet-600 text-white mt-1 p-2 mb-8 rounded-lg text-center  mx-auto ">Total cost:{count} $</h1>
                    </div>

                    <div className="flex">
                    <h1 className= "bg-blue-950 text-white mt-1 p-2 mb-8 rounded-lg text-center  mx-auto ">Budget:20,000 $</h1>
                     <h1  className= "bg-blue-950 text-white mt-1 p-2 mb-8 rounded-lg text-center  mx-auto ">Current Balance:{remaining} $</h1>
                    </div>
                     {
                        cards.map((card,idx)=><Card key={idx} card={card}></Card>)
                     }

              </div>
              </div>
        </div>
    );
};

export default Home;