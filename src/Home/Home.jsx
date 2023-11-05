import Logo from "../Assets/Images/avataaars (1).svg"




export default function Home()
{
    return <>
        <div className="home aboutStyle text-center ">
            <div className="container">
               <div className=" p-5" >
               <div className="content p-3 d-flex align-items-center justify-content-center">
               <img src={Logo} className="w-25" alt="" />
               </div>
               <h1 className="text-white fw-bold">START FRAMEWORK</h1>
               <p className="text-white fw-bolder">Graphic Artist - Web Designer - Illustrator</p>

               </div>
            </div>
        </div>
    </>
}