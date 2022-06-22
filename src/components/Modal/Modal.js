import React from "react";
import { 
    ModalContainer,
    Overlay,
    CloseButton,
    ModalContent,
    ImageModal,
    ContainerImage,
    ButtonDisabled
} from './ModalStyles';
import { CustomButton } from "../../globalStyles";

const Modal = ({open, onClose, e}) => {
    if(!open) return null
    return (
        <Overlay onClick={onClose}>
            <ModalContainer onClick={(e) => {e.stopPropagation()}}>
                <CloseButton onClick={onClose}>x</CloseButton>
                <ModalContent>
                    <ContainerImage>
                        <ImageModal src={e.image} />
                    </ContainerImage>
                    <h4>{e.name}</h4>
                    {e.url === undefined ? 
                        <ButtonDisabled>No disponible</ButtonDisabled> : <CustomButton href={e.url} target='_blank'>Ir al sitio</CustomButton>}
                    
                </ModalContent>        
            </ModalContainer>
        </Overlay>
    );
}

export default Modal;