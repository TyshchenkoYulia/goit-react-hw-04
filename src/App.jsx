import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { useState } from "react";
// import { fetchImages } from "./image-api";

export default function App() {
  const [imgs, setImgs] = useState([]);
  const handleSubmit = () => {};

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {imgs.length > 0 && <ImageGallery items={imgs} />}
    </div>
  );
}
