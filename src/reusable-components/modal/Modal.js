// const Modal = () => {
//     return(
//         <div className="modal">
//             <p>sorry your email is incorrect</p>
//         </div>
//     )
// }
// export default Modal;
import { forwardRef } from "react";
import "../../authentication/signup.css"
const Modal = forwardRef(({children,show,onClose},ref) =>{
  
    if(!show){
        return false;
    }
    return(
        <div className="modal-container" onClick={onClose} >
            <div className="modal-contentt" onClick={e => e.stopPropagation()}>
                <div className="modal-body">
                    {children}
                </div>
            </div>
            
        </div>
    );

})
export default Modal;