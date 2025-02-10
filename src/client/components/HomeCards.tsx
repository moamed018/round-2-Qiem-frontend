import HomeCard from "./HomeCard";
import { HomeCardsDetails } from "../data";
import { useState } from "react";
import EditPropertyForm from "./EditPropertyForm";
import "../style/HomePage.css";

const HomeCards: React.FC = () => {
  const [homeCards, setHomeCards] = useState(HomeCardsDetails);
  const [editingCard, setEditingCard] = useState<any | null>(null);

  // Handle delete
  const handleDeleteHomeCard = (id: string) => {
    setHomeCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  // Handle form submit (edit)
  const handleEditSubmit = (updatedCard: any) => {
    console.log(updatedCard);
    setHomeCards((prevCards) =>
      prevCards.map((card) =>
        card.id === updatedCard.id ? { ...card, ...updatedCard } : card
      )
    );
    setEditingCard(null); // Close edit modal
  };

  return (
    <section className="flex flex-wrap gap-10 justify-center">
      {homeCards.map((card) => (
        <HomeCard
          key={card.id}
          cityName={card.cityName}
          propertyAddress={card.propertyAddress}
          propertyDescription={card.propertyDescription}
          onDelete={() => handleDeleteHomeCard(card.id)}
          onEdit={() => setEditingCard(card)}
        />
      ))}

      {editingCard && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={() => setEditingCard(null)} // Close modal when clicking outside
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <EditPropertyForm
              initialData={editingCard}
              onSubmit={handleEditSubmit}
              onCancel={() => setEditingCard(null)}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default HomeCards;
