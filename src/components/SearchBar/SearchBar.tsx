import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (text: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const res = event.currentTarget.elements.text as HTMLInputElement;
    // if (res.value.trim() === "") {
    //   toast("Enter the correct value!");
    //   return;
    // }
    const inputElement = event.currentTarget.elements.namedItem(
      "text"
    ) as HTMLInputElement;
    if (inputElement && inputElement.value.trim() === "") {
      toast("Enter the correct value!");
      return;
    }

    onSubmit(inputElement.value);
    inputElement.value = "";
  };

  return (
    <header>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search images and photos"
          className={css.input}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </header>
  );
}
