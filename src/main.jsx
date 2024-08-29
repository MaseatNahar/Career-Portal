import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Blogs from './Components/Blogs/Blogs.jsx'
import Home from './Components/Home/Home.jsx'
import Jobdetails from './Components/Jobdetails/Jobdetails.jsx'
import Jobs from './Components/Jobs/Jobs.jsx'
import Main from './Components/Layout/Main.jsx'
import Statistics from './Components/Statistics/Statistics.jsx'
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element : <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('data.json')
      },
      {
        path: 'Statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'Jobs',
        element:<Jobs></Jobs>
      },
      {
        path: 'Blogs',
        element:<Blogs></Blogs>
      },
      {
        path: 'jobdetails',
        element:<Jobdetails></Jobdetails>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>
)
