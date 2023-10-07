import { Route, Routes } from 'react-router-dom'
import './index.css'
import { Home } from './views/Home'
import { Workspace } from './views/Workspace'

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={ <Home /> } />
        <Route
          path='/Workspace/:workspaceKey'
          element={ <Workspace /> } />
      </Routes>
    </>
  )
}

export default App
