import Event from "./Event"
import {Row} from "react-bootstrap"
import listEvent from "../data/events.json"
import { useState } from "react"
import Alert from 'react-bootstrap/Alert';
import { useEffect } from "react";
export default function Events (){
  const [showAlert , setshowAlert] = useState(false) 
  const[ showWelcome , setshowWelcome] = useState(false)
  const modifAlert =()=>{
    setshowAlert(true);
    setTimeout(()=>setshowAlert(false),1000)
  }
  useEffect(()=>{
    setshowWelcome(true),
    setTimeout(()=>setshowWelcome(false),3000)
    
return ()=>{
    console.log("Welcome unmounting")

}
 }, [])
    return  <>
      {showWelcome &&  <Alert  variant="success">
          bienvenue
        </Alert> }
    <Row>
    {
        listEvent?.map((elemnt , inedx) => {
            return <Event  key={inedx} e={elemnt} fonctionAlert={modifAlert}/>
        })  
          }</Row>
          
          {showAlert &&  <Alert  variant="success">
          you have booked an event!
        </Alert>


          }
    </>
}