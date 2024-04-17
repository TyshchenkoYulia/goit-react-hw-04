import css from "./SearchBar.module.css";
import { IoIosSearch } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSubmit }) {
  const onSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = form.elements.topic.value;
    if (data.trim() === "") {
      toast.error("Enter your value");
      return;
    }
    onSubmit(data.trim());
    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={onSearch}>
        <input
          className={css.input}
          type="text"
          name="name"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />

        <button className={css.btn} type="submit">
          <IoIosSearch className={css.icon} /> Search
        </button>
        <Toaster />
      </form>
    </header>
  );
}
