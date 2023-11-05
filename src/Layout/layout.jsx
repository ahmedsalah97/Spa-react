import { Outlet } from "react-router-dom";
import Footert from "../Navbar/Footer/Footer";
import { Navbar } from "../Navbar/Navbar";




export default function Layout()
{
    return <>
    <Navbar/>
   <Outlet></Outlet>
    <Footert/>
    </>

}