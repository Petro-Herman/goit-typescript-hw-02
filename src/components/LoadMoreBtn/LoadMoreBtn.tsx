import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  moreImages: () => void;
}

export default function LoadMoreBtn({ moreImages }: LoadMoreBtnProps) {
  return (
    <button type="button" onClick={moreImages} className={css.button}>
      Load more
    </button>
  );
}
