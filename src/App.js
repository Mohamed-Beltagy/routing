import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Layout from './Components/Layout/Layout';
import Portfolio from './Components/Portfolio/Portfolio';
import Start from './Components/Start/Start';
import { createBrowserRouter, RouterProvider } from "react-router-dom"


const router = createBrowserRouter([
  {path:"",element:<Layout/>,children:[
    {index:true,element:<Start/>},
    { path:"about", element: <About /> },
    { path: "Portfolio", element: <Portfolio /> },
    { path: "Contact", element: <Contact /> }
  ]}
  
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
