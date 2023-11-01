import { useState,useEffect } from "react";
import inboxImage from "../assets/images/edited-avatar.jpg";
import messenger from "../assets/images/messenger (1) 2.png";

const MyNotification =()=>{
    const [inboxMessages,setInboxMessages] = useState([]);

    const getMessages = () =>{
        setTimeout(()=>{
            const messages = [
                { id: 1, text: "Hello, how are you?" },
                { id: 2, text: "Meeting at 2PM,benny is a stupid boy,dont talk to him again,he can be sooo foolish,ifeellikeslappingyouhbjsahdhdasdsdgsagdcgascggascsasakjcsahchaskgcvgSQgcdasagdjcdjkcjkadjkcjdjkcvjdvdsjcvhjdahjcvhadhchadacdjcahhcLHdhsLDISACGDAICGDLGCDSGFDSHGVGHDSCHDGFDCDGGDSBK.VCBDSBVDSVDSVHCDHVCHDHEVWDHEVYRDUUDTYCD.YCDSCUDSYJSDRTVJDISIVCDSYUVYCVDATVCDUA.VAWIUYDTCDSKVDSIV.KDSTUKRTCDSTC.VSDRVKRVUDVYFDTRWYUIYUTYRCBHVGFD ifeellikeslappingyouhbjsahdhdasdsdgsagdcgascggascsasakjcsahchaskgcvgSQgcdasagdjcdjkcjkadjkcjdjkcvjdvdsjcvhjdahjcvhadhchadacdjcahhcLHdhsLDISACGDAICGDLGCDSGFDSHGVGHDSCHDGFDCDGGDSBK.VCBDSBVDSVDSVHCDHVCHDHEVWDHEVYRDUUDTYCD.YCDSCUDSYJSDRTVJDISIVCDSYUVYCVDATVCDUA.VAWIUYDTCDSKVDSIV.KDSTUKRTCDSTC.VSDRVKRVUDVYFDTRWYUIYUTYRCBHVGFD ifeellikeslappingyouhbjsahdhdasdsdgsagdcgascggascsasakjcsahchaskgcvgSQgcdasagdjcdjkcjkadjkcjdjkcvjdvdsjcvhjdahjcvhadhchadacdjcahhcLHdhsLDISACGDAICGDLGCDSGFDSHGVGHDSCHDGFDCDGGDSBK.VCBDSBVDSVDSVHCDHVCHDHEVWDHEVYRDUUDTYCD.YCDSCUDSYJSDRTVJDISIVCDSYUVYCVDATVCDUA.VAWIUYDTCDSKVDSIV.KDSTUKRTCDSTC.VSDRVKRVUDVYFDTRWYUIYUTYRCBHVGFD" },
                { id: 3, text: "your order is ready,we would like you to go to your pick up ..." }
                
            ];
              setInboxMessages(messages);
            }, 1000);
    }
    useEffect(() => {
        getMessages();
      }, []);
    return(
        <div className="">
            <div className="d-none d-lg-block"><h4 className="pt-2">Inbox Messages</h4></div><hr className="d-none d-lg-block"/>
            {
                inboxMessages.length === 0 ? (
                    <div className="empty-inbox-container">
                        <div className="avatar">
                            <img src={inboxImage} alt="Envelope" className="avatar-image"/>
                            <p className="pt-3 mx-3">Your message inbox is empty</p>
                        </div>
                    
                    </div>
                ):(
                    <div className="inbox">
                        
                          {inboxMessages.map((message) => (
                            <div className="message-div">
                                <div className="message-icon">
                                    <img src={messenger} alt="a messanger icon" className="icon"/>
                                </div>
                                <div key={message.id} className="message">
                                {message.text}
                                </div>
                            </div>
                           
                           ))}
                        
                    </div>
                )
            }

        </div>
    )
}
export default MyNotification;