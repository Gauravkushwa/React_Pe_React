import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Products from './components/Products'
import About from './components/About'
import Navbar from './components/Navbar'
import Layout from './components/Layout'
import Contact from './components/Contact'
import ProductDetails from './components/ProductDetails'
function App() {

  const router = createBrowserRouter([
    {
      path : '/',
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: '/products',
          element: <Products />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        },{
          path: '/products/:id',
          element: <ProductDetails />
        }
      ]
    }
  ])

  return (
    <>
    <RouterProvider router={router}>
    {/* <Navbar /> */}
    <Layout />
    </RouterProvider>
    </>
  )
}

export default App
