import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home/Home'
import Login from './Page/Login/Login'
import Sing from './Page/sing/sing'
function App() {


  return (
    <>
       <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/sing'} element={<Sing/>}/>
       </Routes>
    </>
  )
}

export default App
