import css from "./ImageModal.module.css";
import Modal from "react-modal";
import { FcLike } from "react-icons/fc";
import { GrInstagram } from "react-icons/gr";
import { FaUserAlt } from "react-icons/fa";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

export default function ImageModal({
  imgModal,
  onModalClose,
  image,
  item: { alt_description, likes, user: name },
}) {
  return (
    <div>
      <Modal
        isOpen={imgModal}
        onRequestClose={onModalClose}
        style={customStyles}
      >
        <img className={css.img} src={image} alt={alt_description} />
        <div className={css.textWrapper}>
          <GrInstagram
            className={css.inst}
            size="50"
            color="rgb(133, 12, 97)"
          />
          <ul className={css.list}>
            <li className={css.item}>
              <FaUserAlt color="rgb(51, 49, 49)" size="12" />
              <p className={css.text}>{name}</p>
            </li>
            <li className={css.item}>
              <FcLike size="12" />
              <p className={css.text}>{likes}</p>
            </li>
          </ul>
        </div>
      </Modal>
    </div>
  );
}
