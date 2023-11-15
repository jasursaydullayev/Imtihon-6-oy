import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import { useGlobalContext } from "./hooks/useGlobalContext"

// Pages
import Home from "./pages/Home"
import Movie from './pages/Movie'
function App() {
  const data = useGlobalContext()
  console.log(data);
const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/movie/:imdbID",
        element: <Movie />
      },
    ]
  }
])



return <RouterProvider router={routes}/>
}

export default App