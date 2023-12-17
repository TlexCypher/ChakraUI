import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import Create from './pages/Create'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path={'create'} element={<Create />} />
        <Route path={'profile'} element={<Profile />} />
      </Route>
    </Routes>
  )
}

export default App
