import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import Events from './components/Events'
import { Route, Routes } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
//import EventDetail from './components/EventDetail'
const Events = React.lazy(()=> import("./components/Events"))
const EventDetail = React.lazy(()=> import("./components/EventDetail"))
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Suspense fallback={<p>loading...</p>}>
    <NavigationBar/>
    <Routes>

   <Route path="/events">
    <Route  index element ={<Events/>}/>

   </Route>
   <Route path='details/:nom' element={<EventDetail/>}/>
   <Route path="*" element= {<> <p> Not Found</p></>}/>
   
      
   
      </Routes>
      </Suspense>
    </>
  )
}

export default App
