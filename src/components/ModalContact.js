import {Modal, Button} from 'react-bootstrap'


function ModalContact ({show, handleClose, title, body}) {

    return (
        <>
        <>
     <Modal 
          show={show} 
          onHide={handleClose}
          animation={false}>
       <Modal.Header 
       closeButton 
       className="background-black">  
         <Modal.Title className="text-white textfont1">{title}</Modal.Title>
       </Modal.Header>
       <Modal.Body className="background-black text-white textfont1">{body}</Modal.Body>
       <Modal.Footer className="background-black">
         <Button className="btn btn-primary bg-dark mt-2 text-white p-2 rounded textfont1 border-success" onClick={handleClose}>
           Close
         </Button>
       </Modal.Footer>
     </Modal>
   </>
   </>
    )
}

export default ModalContact