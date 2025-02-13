import React from "react";
import { useParams } from "react-router-dom";
import ReviewerProfile from "../components/reviewerProfile";
const ProfilePage: React.FC = () => {
  
const {id} = useParams();
   
  const userData =[
    {
    id: 1, 
    name: " أحمد محمد", 
    additionalInfo: "رسام مصمم في الهندسة المعمارية , يقيم في الرياض , بيانات اخري.",
    type: "drawer" ,
    profileImage: "/src/assets/avatar.png",
    inspectionFee: "10000000",
    experienceYears: "5",
    expertiseField: "Civil Engineering",
    workRegions: ["سير", "الرياض", "جازان"],
    description: "تفاصيل الملف الشخصي هنا..."
  },
  {
  id: 2,
  name: "محمد علي", 
  additionalInfo: "رسام مصمم في الهندسة المعمارية , يقيم في الرياض , بيانات اخري.رسام محترف جدا محترف اوي محترف باحتراف", 
  type: "drawer",
  profileImage: "/src/assets/avatar.png",
    inspectionFee: "10000000",
    experienceYears: "5",
    expertiseField: "Civil Engineering",
    workRegions: ["سير", "الرياض", "جازان"],
    description: "تفاصيل الملف الشخصي هنا..."},
    { id: 3,
      name: "هشام سعد",
      additionalInfo: "مهندس مدني محترف بخبرة كبير في مجال الإنشاءات",
      type: "reviewer",
      profileImage: "/src/assets/avatar.png",
      inspectionFee: "10000000",
      experienceYears: "5",
      expertiseField: "Civil Engineering",
      workRegions: ["سير", "الرياض", "جازان"],
      description: "تفاصيل الملف الشخصي هنا..."
    },

    { id: 4,
      name: "محمد علي",
      additionalInfo: "رسام مصمم في الهندسة المعمارية , يقيم في الرياض , بيانات اخري.رسام محترف جدا محترف اوي محترف باحتراف", 
      type: "reviewer",
      profileImage: "/src/assets/avatar.png",
      inspectionFee: "10000000",
      experienceYears: "5",
      expertiseField: "Civil Engineering",
      workRegions: ["سير", "الرياض", "جازان"],
      description: "تفاصيل الملف الشخصي هنا..."
  }
]
  const profile = userData.find((personCard) => personCard.id === Number(id));
  if (!profile) {
  return <div className="m-auto ">profile not found</div>;
 }
  return (
    <div className="max-w-lg mx-auto my-8 bg-white shadow-[0px_10px_20px_rgba(0,0,0,0.4)] rounded-md">
      <ReviewerProfile
        name={profile.name}
        profileImage={profile.profileImage}
        inspectionFee={profile.inspectionFee}
        experienceYears={profile.experienceYears}
        expertiseField={profile.expertiseField}
        workRegions={profile.workRegions}
        description={profile.description}
        type={profile.type}
      />
    </div>
  );
};

export default ProfilePage;
