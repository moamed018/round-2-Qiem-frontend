import { OfferDetails } from "../types/types";
import "../style/offerDetails.css";
import pdfLogo from '/src/assets/pdf-logo.jpg';

function OfferDetail({ companyName, homePrice }: OfferDetails) {
  return (
    <section dir="rtl" className="offer-detail-container max-w-[100%]">
      <h1 className="nav">عروض &gt; تفاصيل العرض</h1>
      <div className="details px-5 py-4 ">
        <h1 className="title">{companyName}</h1>
        <p className="description">
          اهلاً بك نحن شركة عقاركم للعقارات يمكنك الأطلاع علي ملف السيرة الذاتية
          الخاص بنا . نري ان هذا العقار يقع في مكان جيد ولكن عدد الغرف قليل
          بالنسبة للمساحه ، سنترك لك عرضنا.
        </p>
        <p className="price"> مبلغ التقييم : {homePrice} </p>
        <div className="file-download flex items-center px-4 gap-3">
          <p className="file-text">عرض الملف</p>
          <img
            src={pdfLogo}
            alt="PDF Logo"
            className="pdf-logo"
            width={30}
            height={30}
          />
        </div>
        {/* Accept & Reject Buttons */}
        <div className="flex gap-5">
          <button className="offer-accept-btn w-[150px]">قبول</button>
          <button className="offer-refuse-btn px-3 py-2 w-[150px] bg-red-500 text-white rounded-md">
            رفض
          </button>
        </div>
      </div>
    </section>
  );
}

export default OfferDetail;
