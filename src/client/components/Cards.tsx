import React from "react";
import Card from "./Card";

const cardDetails = [
  {
    companyName: "شركة الاحمدية",
    homePrice: "85,000 ريال سعودي",
    homeDescription1: "عقار في شارع السند، حي النرجس، الرياض، منطقة الرياض",
    homeDescription2:
      "تتكون من صالة ومجلس وثلاث غرف نوم ومطبخ وثلاث دورات مياه وتراس مطل على الشارع بمساحة 138م...",
  },
  {
    companyName: "مؤسسة الزهراء",
    homePrice: "120,000 ريال سعودي",
    homeDescription1: "فيلا سكنية في حي الورود، جدة",
    homeDescription2:
      "تضم مجلسًا واسعًا، مطبخًا مفتوحًا، وأربع غرف نوم، مع حديقة خلفية...",
  },

  {
    companyName: "مجموعة البستان",
    homePrice: "105,000 ريال سعودي",
    homeDescription1: "بيت مستقل في حي الروضة، المدينة المنورة",
    homeDescription2: "يتكون من دورين، مجلس كبير، مطبخ مجهز، وحديقة خلفية...",
  },
  {
    companyName: "شركة الصفا العقارية",
    homePrice: "98,000 ريال سعودي",
    homeDescription1: "فيلا راقية في حي الملقا، الرياض",
    homeDescription2: "4 غرف نوم، صالتين، مطبخ عصري، وغرفة خادمة...",
  },
  {
    companyName: "مؤسسة النخيل",
    homePrice: "90,000 ريال سعودي",
    homeDescription1: "شقة جديدة في حي السليمانية، جدة",
    homeDescription2: "موقع ممتاز، 3 غرف نوم، 2 حمام، ومطبخ مفتوح...",
  },
  {
    companyName: "شركة المروج",
    homePrice: "115,000 ريال سعودي",
    homeDescription1: "فيلا فاخرة بحي النزهة، مكة المكرمة",
    homeDescription2: "تضم مسبحًا داخليًا، صالة رياضية، وحديقة واسعة...",
  },
  {
    companyName: "مؤسسة السحاب",
    homePrice: "75,000 ريال سعودي",
    homeDescription1: "شقة سكنية في حي الخليج، الرياض",
    homeDescription2: "تشمل غرفتين نوم، صالة، مطبخ، وبلكونة مطلة على الشارع...",
  },
  {
    companyName: "شركة الوديان",
    homePrice: "130,000 ريال سعودي",
    homeDescription1: "فيلا راقية في حي الربيع، جدة",
    homeDescription2:
      "تشمل خمس غرف نوم، صالتين، مسبح، وكراج يتسع لثلاث سيارات...",
  },
  {
    companyName: "مجموعة النور",
    homePrice: "100,000 ريال سعودي",
    homeDescription1: "بيت مستقل في حي الأندلس، الدمام",
    homeDescription2: "مساحة كبيرة، ثلاث غرف نوم، حديقة داخلية، وتصميم حديث...",
  },
];

function Cards() {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-5">
      {cardDetails.map((card, index) => (
        <Card
          key={index}
          companyName={card.companyName}
          homePrice={card.homePrice}
          homeDescription1={card.homeDescription1}
          homeDescription2={card.homeDescription2}
        />
      ))}
    </div>
  );
}

export default Cards;
