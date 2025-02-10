import HomeCard from "./HomeCard";
import { HomeCardsDetails } from "../data";

const HomeCards: React.FC = () => {
  return (
    <section className="flex flex-wrap gap-10 justify-center">
      {HomeCardsDetails.map((card) => (
        <HomeCard
          key={card.id}
          cityName={card.cityName}
          propertyAddress={card.propertyAddress}
          propertyDescription={card.propertyDescription}
        />
      ))}
    </section>
  );
};

export default HomeCards;
