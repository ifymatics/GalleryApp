import { useHistory } from "react-router";

import classes from "./Image.module.css";
const Image = ({ tumbnail, onClickHandler }) => {
  const history = useHistory();
  if (!tumbnail) return null;
  return (
    <div
      className={classes.pics}
      onClick={() => history.push(`gallery/${tumbnail.id}`)}
    >
      <img
        src={`${tumbnail.uri}_2.jpg`}
        alt="tumbnail"
        className={classes["image-width"]}
      />
    </div>
  );
};

export default Image;
