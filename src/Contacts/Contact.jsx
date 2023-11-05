






export default function Contact()
{
    return <>
        <div className="contact">
            <div className="container">
                <div className="content text-center p-3">
                    <h1 className="fw-bold textColor">CONATCT SECTION</h1>
                    <i className="fa-solid fa-star textColor mt-2 fs-3"></i>
                    <div className="inputs col-md-8 mx-auto mt-4">
                        <div className="my-4">
                            <input type="text" className="form-control" placeholder="userName" />
                        </div>
                        <div className="my-4">
                            <input type="numper" className="form-control" placeholder="userAge" />
                        </div>
                        <div className="my-4">
                            <input type="email" className="form-control" placeholder="userEmail" />
                        </div>
                        <div className="my-4">
                            <input type="password" className="form-control" placeholder="userPassword" />
                        </div>

                        <button className=" ms-auto colorBtn ">Send Message</button>

                    </div>
                </div>
            </div>
        </div>
    </>
}