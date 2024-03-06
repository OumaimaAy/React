import Event from "./Event"
import {Row} from "react-bootstrap"

import { useState } from "react"
import Alert from 'react-bootstrap/Alert';
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Events from "./Events";
import { getallEvents } from "../services/api";

export default function EventDetail (props){
    const [Event , setEvent ]=useState ({})
 const {nom}=useParams();
const event =listEvent.find((e)=>{return e.name==nom})
console.log(event)

useEffect(()=> {
    const fetchlistbyid=async()=>{
        const events=await getallEvents(id);
        setEvent(events.data)
    }
    fetchlistbyid();
},[])

 
    return ( 
    <>
     { 
     //event? 
     //<P>{event.name}</P> : <p> event not found </p>
     Event?<p>{Event.name}</p> :<p> event not found </p>
    }
    </>
    )
}