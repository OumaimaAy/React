import Event from "./Event"
import {Row} from "react-bootstrap"
import listEvent from "../data/events.json"
import { useState } from "react"
import Alert from 'react-bootstrap/Alert';
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Events from "./Events";

export default function EventDetail (props){
 const {nom}=useParams();
const event =listEvent.find((e)=>{return e.name==nom})
console.log(event)

 
    return ( 
    <>
     {event? 
     <P>{event.name}</P> : <p> event not found </p>
    }
    </>
    )
}