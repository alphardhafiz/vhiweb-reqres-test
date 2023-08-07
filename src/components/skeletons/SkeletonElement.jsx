/* eslint-disable react/prop-types */
import "./Skeleton.scss";

const SkeletonElement = ({ type }) => {
  const classes = `skeleton ${type}`;

  return <div className={classes}></div>;
};

export default SkeletonElement;
