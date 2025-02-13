import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import { IoSend } from "react-icons/io5";
import { allReviews } from "../data";

interface User {
  id: number;
  name: string;
  avatar: string;
}

export interface Review {
  id: number;
  content: string;
  user: User;
  projectId: string;
}

interface ReviewsProps {
  projectId: string;
}

const Reviews: React.FC<ReviewsProps> = ({ projectId }) => {
  // Static review data
  

  const [reviews, setReviews] = useState<Review[]>([]); 
  const [newComment, setNewComment] = useState<string>("");
  const [visibleReviewsCount, setVisibleReviewsCount] = useState<number>(3);

  useEffect(() => {
    const filteredReviews = allReviews.filter(
      (review) => review.projectId === projectId
    );
    setReviews(filteredReviews);
  }, [projectId]); 

  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    const newReview: Review = {
      id: reviews.length + 1,
      content: newComment,
      user: {
        id: 999,
        name: "نجلاء سعد",
        avatar: "/src/assets/avatar.png",
      },
      projectId: projectId,
    };

    setReviews((prevReviews) => [...prevReviews, newReview]);
    setNewComment("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddComment();
    }
  };

  // Load more comments
  const loadMoreComments = () => {
    setVisibleReviewsCount(visibleReviewsCount + 3);
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-4">التعليقات ({reviews.length})</h3>

      {/* Display comments */}
      {reviews.length > 0 ? (
        reviews.slice(0, visibleReviewsCount).map((review) => (
          <Comment key={review.id} review={review} />
        ))
      ) : (
        <p>لا توجد تعليقات بعد.</p> // If no comments, display this message
      )}

      {/* Load more button */}
      {visibleReviewsCount < reviews.length && (
        <div className="text-center mt-4">
          <button
            className="bg-[#C29062] text-white px-4 py-2 rounded-md"
            onClick={loadMoreComments}
          >
            تحميل المزيد
          </button>
        </div>
      )}

      {/* Add new comment */}
      <div className="flex items-center justify-center bg-[#d1e8e24d] p-6 fixed bottom-0 left-0 right-[263px] ">
        <div>
          <button
            aria-label="add comment"
            className="text-white bg-[#C29062] hover:text-white rounded-full p-2 me-2 text-center"
            onClick={handleAddComment}
          >
            <IoSend size={20} />
          </button>
        </div>
        <input
          type="text"
          className="w-full px-3 py-2 focus:outline-none rounded-md bg-white"
          placeholder="أضف تعليقك هنا..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default Reviews;
