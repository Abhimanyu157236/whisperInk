import React ,{useState, useEffect} from 'react';
import Home from './pages/Home';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './components/Navbar';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './components/Footer';

const App = () => {
  const [expandMenu, setExpandMenu] = useState(false);

  useEffect(() => {
    if (expandMenu) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden'; // Extra safety
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }

    // Cleanup jab Home unmount ho
    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, [expandMenu
    
  ]); 

   const router = createBrowserRouter([
    {
      path:"/",
      element: <div>
        <Navbar expandMenu={expandMenu} setExpandMenu={setExpandMenu}/>
        <Home expandMenu={expandMenu} setExpandMenu={setExpandMenu}/>
        <Footer/>
      </div>
    },
     {
      path:"/blogs",
      element: <div>
        <BlogDetails/>
      </div>
    },
     {
      path:"/contact",
      element: <div>
        <Navbar expandMenu={expandMenu} setExpandMenu={setExpandMenu}/>
        <Contact expandMenu={expandMenu} setExpandMenu={setExpandMenu}/>
        <Footer/>
      </div>
    },
     {
      path:"/about",
      element: <div>
        <Navbar expandMenu={expandMenu} setExpandMenu={setExpandMenu}/>
        <About expandMenu={expandMenu} setExpandMenu={setExpandMenu}/>
      </div>
    }
   ]) 
  return (
  <RouterProvider router={router}>

  </RouterProvider>
  );
}

export default App;
