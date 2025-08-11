import { useState } from "react";
export default function LikeButton() {
  let [isLiked, setIsLikes] = useState(false);
  let toggleLike = () => {
    setIsLikes(!isLiked);
  };
  return (
    <div>
      <p onClick={toggleLike}>
        {isLiked ? (
          <i class="fa-solid fa-heart"></i>
        ) : (
          <i class="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}
