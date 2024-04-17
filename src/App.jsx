// import { useState } from 'react'
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
// import './App.css'

export default function App() {
  const handleSubmit = () => {};

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageGallery />
    </div>
  );
}
