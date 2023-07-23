import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home'
import News from './pages/news/News'
import Discuss from './pages/discuss/Discuss'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/teach',
      element: <Home />
    },
    {
      path: '/news',
      element: <News />
    },
    {
      path: '/discuss',
      element: <Discuss />
    },
    {
      path:'*',
      element:<div>404</div>
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
