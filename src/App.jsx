import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import HomeLayout from './layout/HomeLayout'
import Projects from './pages/Projects'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/works',
        element: <Projects />,
      },
    ],
  },
])

function App() {
  return (
    <div className='bg-gray-50 dark:bg-gray-900'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
