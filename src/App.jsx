import './App.css'
// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
// import Navbar from './Components/Navbar/Navbar'
import { useState } from 'react'

function App() {
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path='/' >
  //       <Route index element={<Home />} />
  //       <Route path='contact' element={<Contact />} />
  //     </Route>
  //   )
  // )

  const [page, setPage] = useState('home')

  const setHomePage = () => setPage('home')
  const setContactPage = () => setPage('contact')


  return (
    <>
      {/* <Navbar setPage={setPage} /> */}

      <nav className='navigation flex justify-around mx-auto my-2 px-2 my-0 items-center text-black'>
        {/* <a href="/">ACASĂ</a>
            <a href="contact">CONTACT</a> */}
        <button onClick={setHomePage} className='navBarButton'>ACASĂ</button>
        <button onClick={setContactPage} className='navBarButton'>CONTACT</button>
      </nav>

      {page && page === 'home' && <Home />}
      {page && page === 'contact' && <Contact />}
    </>
    // <RouterProvider router={router} />
  )

}

export default App
