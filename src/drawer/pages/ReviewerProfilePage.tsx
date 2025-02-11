import React from "react";
// import { useParams } from "react-router-dom";
import DrawerProfile from "../Components/reviewerProfile";

const ProfilePage: React.FC = () => {
  
// const {id} = useParams();
  const userData = {
    id:1,
    name: "أحمد محمد",
    profileImage: "/src/assets/avatar.png",
    inspectionFee: "10000000",
    experienceYears: "5",
    expertiseField: "Civil Engineering",
    workRegions: ["عسير", "الرياض", "جازان"],
    description: "ملتزم بالعمل والوقت ...",
    type: "reviewer"
  };

  return (
    <div className="max-w-lg mx-auto my-8 bg-white shadow-[0px_10px_20px_rgba(0,0,0,0.4)] rounded-md">
      <DrawerProfile
        name={userData.name}
        profileImage={userData.profileImage}
        inspectionFee={userData.inspectionFee}
        experienceYears={userData.experienceYears}
        expertiseField={userData.expertiseField}
        workRegions={userData.workRegions}
        description={userData.description}
        type={userData.type}
      />
    </div>
  );
};

export default ProfilePage;
