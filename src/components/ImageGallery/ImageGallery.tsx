import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface Photo {
  id: string;
  urls: { small: string };
  description: string;
}

interface ImageGalleryProps {
  photos: Photo[];
  modalId: (id: string) => void;
}

export default function ImageGallery({ photos, modalId }: ImageGalleryProps) {
  return (
    <ul className={css.list}>
      {photos.map((value) => (
        <li key={value.id} className={css.cart}>
          <ImageCard value={value} modalId={modalId} />
        </li>
      ))}
    </ul>
  );
}
