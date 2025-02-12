import React from "react";

interface User {
  id: number;
  name: string;
  avatar: string;
}

interface Review {
  id: number;
  content: string;
  user: User;
}

interface ReviewCardProps {
  review: Review;
}

const Comment: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="flex break-words w-fit items-start p-4 bg-[#d1e8e24d] rounded-lg mb-3">
    {/* <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg mb-3"> */}
      {/* <img src={review.user.avatar} alt={review.user.name} className="w-10 h-10 rounded-full" /> */}
      <div>
        {/* <h4 className="font-semibold">{review.user.name}</h4> */}
        <p className="text-gray-700">{review.content}</p>
      </div>
    </div>
  );
};

export default Comment;
