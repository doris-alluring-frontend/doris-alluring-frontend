import "./conditional.css"
import { FaPen } from "react-icons/fa";
const MyAccount =()=>{
    return(
        <div className="container account-info">
        <div className="head">
            <div><h4 className="pt-2 d-none d-lg-block">Account Information</h4></div>
            <div className="px-3 d-none d-lg-block"><FaPen/></div>
        </div><hr className="d-none d-lg-block"/>
            <div className="text-border p-2">
                
                <div className="user-info"> 
                <h6 className="p-2 mb-3">ACCOUNT DETAILS</h6><hr/>
                <p className="p-2 label"><span className="label">Name: </span>Ebele Doris</p>
                <p className="p-2"><span className="label">Email: </span>user@gmail.com</p>
                </div>
                <div className="contact-address">
                <h6 className="p-2 mb-3 ">ADDRESS DETAILS</h6><hr/>
                <p className="p-2"><span className="label">Phone number: </span>+234675432190</p>
                <p className="p-2"><span className="label">Address: </span>no 15 ogidi road,Anambra State</p>
                </div>
               
            </div>

            <div className="px-3 d-lg-none pen-border mt-3 mx-2"><FaPen className="text-white"/></div>
        </div>
    )
}
export default MyAccount;