// import css from "./ImageModal.module.css";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function ImageModal({ onImgClick, onModalClose, image }) {
  return (
    <Modal isOpen={onImgClick} onModalClose={onModalClose} style={customStyles}>
      <img src={image} />
    </Modal>
  );
}
