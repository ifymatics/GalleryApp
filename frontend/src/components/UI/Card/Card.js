import classes from "./Card.module.css";

const Card = ({ children, className, pics }) => {
  return <div className={`${classes.card} ${className}`}>{children}</div>;
};

export default Card;
