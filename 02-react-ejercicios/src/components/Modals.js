import React from 'react'
import { useModal } from '../hooks/useModal'
import ContactForm from './ContactForm'
import Modal from './Modal'
import ModalPortal from './ModalPortal'

const Modals = () => {
    const [isOpenModal1,openModal1,closeModal1] = useModal(false)
    const [isOpenModal2,openModal2,closeModal2] = useModal(false)
    const [isOpenModal3,openModal3,closeModal3] = useModal(false)
    const [isOpenModalPortal,openModalPortal,closeModalPortal] = useModal(false)
  return (
    <div>
        <h2>Modales</h2>
        <button onClick={openModal1}>Modal 1</button>
        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
            <h3>Modal 1</h3>
            <p>Hola ese es el contenido del mi modal 1</p>
            <img src='https://placeimg.com/400/400/animals' alt="Animals"/>
        </Modal>
        <button onClick={openModal2}>Modal 2</button>
        <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
            <h3>Modal 2</h3>
            <p>Hola ese es el contenido del mi modal 2</p>
            <img src='https://placeimg.com/400/400/nature' alt="Nature"/>
        </Modal>
        <button onClick={openModal3}>Modal Contacto</button>
        <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
           <ContactForm/>
        </Modal>
        <button onClick={openModalPortal}>Modal Portal</button>
        <ModalPortal isOpen={isOpenModalPortal} closeModal={closeModalPortal}>
           <h3>Modal en portal</h3>
           <p>
               Este el contenido de un modal que carga en otro 
               nodo del DOM diferente a donde carga nuestra
               APP de react gracias a los portales
           </p>
           <img src='https://placeimg.com/400/400/tech' alt="Tech"/>
        </ModalPortal>
    </div>
  )
}

export default Modals