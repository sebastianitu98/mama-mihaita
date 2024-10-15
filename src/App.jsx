import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' >
        <Route index element={<Home />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )

}

export default App
