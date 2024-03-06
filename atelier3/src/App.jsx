import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Events from './components/Events'
import { Route, Routes } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import EventDetail from './components/EventDetail'
import AddEvent from './components/AddEvent'
//const Events = React.lazy(()=> import("./components/Events"))
//const EventDetail = React.lazy(()=> import("./components/EventDetail"))
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Suspense fallback={<p>loading...</p>}>
    <NavigationBar/>
    <Routes>

   <Route path="/events">
    <Route  index element ={<Events/>}/>
<Route path="Add" element={<AddEvent/>}/>
<Route path="details/:id" element = {<EventDetail/>}/>
   </Route>
  {/* <Route path='details/:nom' element={<EventDetail/>}/>*/}
   <Route path="*" element= {<> <p> Not Found</p></>}/>
   
      
   
      </Routes>
      </Suspense>
    </>
  )
}

export default App
