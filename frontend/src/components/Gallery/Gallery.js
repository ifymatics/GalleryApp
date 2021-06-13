import { useEffect, useState } from "react";
import api from "./axios/api";
import classes from "./Gallery.module.css";
import Image from "./Image/Image";

const Gallery = () => {
  const onClickHandler = (id) => {};
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchGallery = async () => {
      try {
        const gallery = await api.get("/gallery");
        setLoading(false);
        setData(gallery.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchGallery();
  }, []);

  return (
    <div className={classes.gallery}>
      {data.length > 0 &&
        !loading &&
        data.map((tumbnail, index) => (
          <Image tumbnail={tumbnail} key={index} />
        ))}
      {loading && <h1>{"...loading"}</h1>}
    </div>
  );
};

export default Gallery;
