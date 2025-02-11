import React from "react";

interface DrawerProfileProps {
  name: string;
  profileImage: string;
  inspectionFee: string;
  experienceYears: string;
  expertiseField: string;
  workRegions: string[];
  description: string;
  type: string;
}

const DrawerProfile: React.FC<DrawerProfileProps> = ({
  name,
  profileImage,
  inspectionFee,
  experienceYears,
  expertiseField,
  workRegions,
  description,
  type,
}) => {
  return (
    <>
    {type==="reviewer" && <div>
      {/* Profile Header */}
      <div className="flex items-center space-x-4 mb-4 bg-[#d1e8e24d] border-b border-[#d8dfeb] p-6 rounded-t-md">
        <img
          src={profileImage}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <h2 className="text-xl font-semibold">{name}</h2>
      </div>

      {/* Profile Details */}
      <div className="space-y-4 p-6">
        <div>
          <strong className="block">رسوم المعاينة</strong>
          <p className="border border-[#d8dfeb] p-2 rounded-md text-[#C29062]">{inspectionFee} ريال</p>
        </div>

        <div>
          <strong className="block">سنوات الخبرة</strong>
          <p className="border border-[#d8dfeb] p-2 rounded-md text-[#C29062]">{experienceYears}</p>
        </div>

        <div>
          <strong className="block">مجال الخبرة</strong>
          <p className="border border-[#d8dfeb] p-2 rounded-md text-[#C29062]">{expertiseField}</p>
        </div>

        <div>
          <strong className="block">مناطق العمل</strong>
          <div className="border border-[#d8dfeb] p-2 rounded-md">
            <div className="flex flex-wrap gap-2 mt-2" >
            {workRegions.map((region, index) => (
              
              
              <span
                key={index}
                className="bg-[#d1e8e24d] text-[#C29062] px-3 py-1 rounded-full text-sm w-1/4 text-center"
              >
                {region}
              </span>
              
              
            ))}
          </div>
          </div>
        </div>

        <div>
          <strong className="block">معلومات تعريفية</strong>
          <p className="border border-[#d8dfeb] p-2 rounded-md text-[#C29062]">{description}</p>
        </div>
      </div>
    </div>}
    </>
  );
};

export default DrawerProfile;
