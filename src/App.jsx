import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Vupdate from './components/Vupdate'
import VaddData from './components/VaddData'
import Vote from './components/Vote'
import Home from './components/Home'
import Candidate from './components/Candidate'
import CaddData from './components/CaddData'
import Cupdate from './components/Cupdate'
import Report from './components/Report'
import Login from './components/Login'
import Register from './components/Register'
import Main from './components/Main'
import Voting from './components/Voting'



const App = () => {
  return (
    <>
        <BrowserRouter>
<Routes>
<Route path= "/" element={ <Main />} />
<Route path= "/Home" element={ <Home />} />
<Route path= "/Register" element={ <Register />} />
<Route path= "/Login" element={ <Login />} />
<Route path= "/Report" element={ <Report />} />
<Route path= "/Voting" element={ <Voting />} />

<Route path= "/Vote" element={ <Vote />} />
<Route path= "/VaddData" element={ <VaddData />} />
    <Route path= "/Vupdate/:id" element={ <Vupdate />} />

    <Route path= "/Candidate" element={ <Candidate />} />
<Route path= "/CaddData" element={ <CaddData />} />
    <Route path= "/Cupdate/:id" element={ <Cupdate />} />

    
</Routes>
    </BrowserRouter>
    </>
  )
}

export default App