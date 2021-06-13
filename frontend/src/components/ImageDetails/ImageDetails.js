import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./ImageDetails.module.css";
import api from "../Gallery/axios/api";

const ImageDetails = () => {
  const { imageId } = useParams();

  const [imageDetail, setImageDetail] = useState({});
  useEffect(() => {
    const getById = async () => {
      try {
        const response = await api.get(`/gallery/${imageId}`);
        setImageDetail(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getById();
  }, [imageId]);

  return (
    <div className={classes.imageDetail}>
      <img
        src={`${imageDetail && imageDetail.uri}_27.jpg`}
        alt="tumbnail"
        className={classes["image-width"]}
      />
    </div>
  );
};

export default ImageDetails;
