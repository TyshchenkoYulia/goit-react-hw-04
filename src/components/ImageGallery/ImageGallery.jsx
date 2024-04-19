import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ items }) {
  return (
    <div>
      <ul className={css.list}>
        {items.map((item) => (
          <li key={item.id}>
            <ImageCard />
          </li>
        ))}
      </ul>
    </div>
  );
}
