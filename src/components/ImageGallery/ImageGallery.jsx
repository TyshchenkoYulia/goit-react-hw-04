// import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={}>
          <ImageCard />
        </li>
      ))}
    </ul>
  );
}
