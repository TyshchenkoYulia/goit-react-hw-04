import css from "./ImageCard.module.css";

export default function ImageCard({ alt_description, urls: { small } }) {
  return (
    <div className={css.container}>
      <img src={small} alt={alt_description} />
    </div>
  );
}
