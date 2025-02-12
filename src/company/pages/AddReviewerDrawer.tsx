
import React, { useState } from "react";
import DropDown from "../components/DropDown";
import PersonCard from "../components/PersonCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Report from "../../reviewer/components/Report"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../shared/Modal";
import { FaCheck } from "react-icons/fa"; 
import { Link } from "react-router-dom";
interface Option {
  id: number;
  name: string;
  additionalInfo: string;
  type: string;
}

const AddReviewerDrawer: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const drawerOptions = [
    { id: 1, name: " أحمد محمد", 
      additionalInfo: "رسام مصمم في الهندسة المعمارية , يقيم في الرياض , بيانات اخري.",
      type: "drawer" ,
      },

    { id: 2, name: "محمد علي", 
      additionalInfo: "رسام مصمم في الهندسة المعمارية , يقيم في الرياض , بيانات اخري.رسام محترف جدا محترف اوي محترف باحتراف", 
      type: "drawer",
      }
  ];

  const reviewerOptions = [
    { id: 3,
      name: "هشام سعد",
      additionalInfo: "مهندس مدني محترف بخبرة كبير في مجال الإنشاءات",
      type: "reviewer" },
    { id: 4,
      name: "محمد علي",
      additionalInfo: "رسام مصمم في الهندسة المعمارية , يقيم في الرياض , بيانات اخري.رسام محترف جدا محترف اوي محترف باحتراف", 
      type: "drawer" }
  ];
  
  const handleDelete = (id: number) => {
    setSelectedOptions(selectedOptions.filter((item) => item.id !== id));

    setModalMessage("تم حذف المستخدم ");
    setIsModalOpen(true);
  };

  const handleEdit = (id: number) => {
    console.log(`Editing item with ID: ${id}`);
  };

  const handleSend = (id: number) => {
    console.log(`Sending data for item with ID: ${id}`);
  };

  const handleSelect = (selectedItem: Option) => {
    if (!selectedOptions.some((item) => item.id === selectedItem.id)) {
      setSelectedOptions([...selectedOptions, selectedItem]);
    }
  };

  return (
    
    <div>
      <div className=" flex justify-center mt-[50px] mb-5">
        <div className="w-12 h-12 rounded-full bg-[#C29062] flex justify-center items-center p-8">
      <FontAwesomeIcon icon={faUserCircle} size="2x" className="text-white" />
    </div>
      </div>
      <DropDown options={drawerOptions} label="أضف رسام" onSelect={handleSelect} selectedOptions={selectedOptions} />
      <DropDown options={reviewerOptions} label="أضف مدقق" onSelect={handleSelect} selectedOptions={selectedOptions} />

      <div className="m-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {selectedOptions.map((selected) => (
          <Link to={`/company/profile/${selected.id}`} key={selected.id}>
          <PersonCard
              key={selected.id}
              id={selected.id}
              name={selected.name}
              additionalInfo={selected.additionalInfo}
              type={selected.type}
              onEdit={() => handleEdit(selected.id)}
              onDelete={() => handleDelete(selected.id)}
              onSend={() => handleSend(selected.id)}           />
          </Link>
        ))}
      </div>
      {/* Modal for delete confirmation */}
      <Modal
        isOpen={isModalOpen}
        Icon={FaCheck}
        onClose={() => setIsModalOpen(false)}
        title=""
        description={modalMessage}
        type="info"
        
      />
      <Report mode="drawer"/>
    </div>

  );
};

export default AddReviewerDrawer;
