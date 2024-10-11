import { useEffect, useState } from "react";
import css from "./App.module.css";
import { fetchPhoto, PhotoResponse } from "../../httpkey/httpkey";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

export default function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [photos, setPhotos] = useState<PhotoResponse[]>([]);
  const [topic, setTopic] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(999);
  const [modal, setModal] = useState<string>("");

  useEffect(() => {
    if (topic === "") return;

    async function getPhoto() {
      try {
        setLoading(true);
        setError(false);
        const res = await fetchPhoto(topic, page);
        setPhotos((prevState) => [...prevState, ...res.photo]);
        setTotalPages(res.totalPages);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getPhoto();
  }, [page, topic]);

  function search(text: string) {
    setPhotos([]);
    setTopic(text);
    setPage(1);
  }

  function more() {
    setPage((prevPage) => prevPage + 1);
  }

  function modalOn(id: string) {
    setModal(id);
  }

  function modalOff() {
    setModal("");
  }

  return (
    <div className={css.container}>
      <SearchBar onSubmit={search} />
      <ImageGallery photos={photos} modalId={modalOn} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {totalPages > page && photos.length > 0 && !loading && (
        <LoadMoreBtn moreImages={more} />
      )}
      {modal && (
        <ImageModal
          isOpen={!!modal}
          value={photos.find((el) => el.id === modal)!}
          modalOff={modalOff}
        />
      )}
    </div>
  );
}
