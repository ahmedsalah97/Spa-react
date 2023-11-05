import logo from './logo.svg';
import './App.css';
import Layout from './Layout/layout';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contacts/Contact';
import Home from './Home/Home';
import Notfound from './Notfound/Notfound';


let routers = createBrowserRouter([
  {path:'/' , element : <Layout/> , children:[
    {path:"/" ,element:<Home/>},
    {path:"about",element:<About/>},
    {path:"portfolio",element:<Portfolio/>},
    {path:"contact",element:<Contact/>},
    {path:"*",element:<Notfound/>},
  ]}
])


export default function App() {
  return <RouterProvider router={routers}> </RouterProvider>
  

 
}
