import {Modal, Button} from 'react-bootstrap'


function ModalContact (props) {

    return (
        <>
        <>
     <Modal show={props.show} 
     onHide={props.handleClose}
     animation={false}>
       <Modal.Header 
       closeButton 
       
       className="background-black">  
         <Modal.Title className="text-white textfont1">Message sent</Modal.Title>
       </Modal.Header>
       <Modal.Body className="background-black text-white textfont1">Thank you for your message, you'll be contacted soon</Modal.Body>
       <Modal.Footer className="background-black">
         <Button className="btn btn-primary bg-dark mt-2 text-white p-2 rounded textfont1 border-success" onClick={props.handleClose}>
           Close
         </Button>
       </Modal.Footer>
     </Modal>
   </>
   </>
    )
}

export default ModalContact