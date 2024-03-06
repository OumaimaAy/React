import Event from "./Event"
import { Row } from "react-bootstrap"

import { useState, useEffect } from "react"
import Alert from 'react-bootstrap/Alert';
import { getallEvents } from "../services/api";

export default function Events() {
  const [showAlert, setshowAlert] = useState(false) 
  const [showWelcome, setshowWelcome] = useState(false)
  const [listEvent, setlistEvent] = useState([]); // Initialize as an empty array for mapping

  const modifAlert = () => {
    setshowAlert(true);
    setTimeout(() => setshowAlert(false), 1000)
  }

  useEffect(() => {
    setshowWelcome(true),
    setTimeout(() => setshowWelcome(false), 3000)
    
    return () => {
      console.log("Welcome unmounting")
    }
  }, [])

  useEffect(() => {
    const fetchlist = async () => {
       const events = await getallEvents();
       setlistEvent(events.data);
    }
    fetchlist();
  }, [])

  return (
    <>
      <Row>
        {
          showWelcome && <Alert variant="success">
            Welcome to our events
          </Alert>
        }
        {listEvent?.map((element, index) => {
          return <Event key={index} e={element} functionalert={modifAlert} /* deleteevent={deleteEvents} */ />
        })}
        {
          showAlert && <Alert variant="success">
            You have booked an event
          </Alert>
        }
      </Row>
    </>
  );
}
