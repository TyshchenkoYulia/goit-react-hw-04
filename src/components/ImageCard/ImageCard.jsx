import css from "./ImageCard.module.css";

export default function ImageCard({
  alt_description,
  urls: small,
  likes,
  views,
  downloads,
}) {
  return (
    <div className={css.container}>
      <div className={css.imgWrapper}>
        <img className={css.img} src={small} alt={alt_description} size="50" />
      </div>
      <div className={css.textWrapper}>
        <ul className={css.list}>
          <li className={css.item}>
            Likes<p className={css.text}>{likes}</p>
          </li>
          <li className={css.item}>
            Views<p className={css.text}>{views}</p>
          </li>
          <li className={css.item}>
            Downloads<p className={css.text}>{downloads}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
