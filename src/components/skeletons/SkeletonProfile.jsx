/* eslint-disable react/prop-types */
import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";

const SkeletonProfile = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-profile">
        <div>
          <SkeletonElement type="avatar" />
        </div>
        <div>
          <SkeletonElement type="text" />
          <SkeletonElement type="title" />
        </div>
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonProfile;
