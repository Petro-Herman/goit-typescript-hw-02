import css from "./ImageCard.module.css";

interface ImageCardProps {
  value: {
    id: string;
    urls: { small: string };
    description: string;
  };
  modalId: (id: string) => void;
}

export default function ImageCard({ value, modalId }: ImageCardProps) {
  return (
    <img
      id={value.id}
      src={value.urls.small}
      alt={value.description}
      className={css.img}
      onClick={() => modalId(value.id)}
    />
  );
}
