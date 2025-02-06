import FormComponent from "../components/CreatePropertyForm";
import "../style/createProperty.css";

function CreateProperty() {
  return (
    <div className="py-10 " id="create-property-container">
      <section className="flex gap-6">
        <img
          src="/src/assets/create-property.png"
          alt="create-property image"
          className="w-[250px] h-[215px]"
        />
        <div className="flex flex-col gap-4">
          <h2 className="" id="create-property-header">
            قم بإضافة عقارك الان .
          </h2>
          <h3 id="create-property-subheader">
            أدرج عقارك ب 3 خطوات سهلة وخلي الباقي علينا.
          </h3>
          <div className="flex gap-2">
            <img
              src="/src/assets/create-property-true.png"
              alt="approved"
              className="w-[32px] h-[32px]"
            />
            <p id="adv">طلبات جادة وحقيقية</p>
          </div>
          <div className="flex gap-2">
            <img
              src="/src/assets/create-property-true.png"
              alt="approved"
              className="w-[32px] h-[32px]"
            />
            <p id="adv">بدون رسوم</p>
          </div>
          <div className="flex gap-2">
            <img
              src="/src/assets/create-property-true.png"
              alt="approved"
              className="w-[32px] h-[32px]"
            />
            <p id="adv">تجربة مُستخدم سهلة وبسيطة</p>
          </div>
        </div>
      </section>
      {/* create property form */}
      <section id="create-property-form-container">
        <FormComponent />
      </section>
    </div>
  );
}

export default CreateProperty;
