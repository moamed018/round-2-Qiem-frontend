import { useFormik } from "formik";
import * as Yup from "yup";
import "../style/createProperty.css";

interface FormValues {
  propertyAddress: string;
  propertyType: string;
  propertyArea: string;
  city: string;
  region: string;
  details: string;
}

const FormComponent: React.FC = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      propertyAddress: "",
      propertyType: "",
      propertyArea: "",
      city: "",
      region: "",
      details: "",
    },
    validationSchema: Yup.object({
      propertyAddress: Yup.string()
        .min(3, "Too short!")
        .required("Property Address is required"),
      propertyType: Yup.string().required("Property Type is required"),
      propertyArea: Yup.string().required("Property Area is required"),
      city: Yup.string().required("City is required"),
      region: Yup.string().required("Region is required"),
      details: Yup.string()
        .min(10, "Details must be at least 10 characters")
        .required("Details are required"),
    }),
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white ">
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {/* Property Address */}
        <div className="form-input">
          <label className="block text-gray-700 pb-2">عنوان العقار</label>
          <input
            title="property-address"
            type="text"
            name="propertyAddress"
            className="w-full p-2  border-2 border-gray-400 rounded-md focus:outline-none "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.propertyAddress}
          />
          {formik.touched.propertyAddress && formik.errors.propertyAddress && (
            <p className="text-red-500 text-sm">
              {formik.errors.propertyAddress}
            </p>
          )}
        </div>

        {/* Property Type */}
        <div className="form-input">
          <label className="block text-gray-700 pb-2">نوع العقار</label>
          <select
            title="propertyType"
            name="propertyType"
            className="w-full p-2  border-2 border-gray-400 rounded-md focus:outline-none "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.propertyType}
          >
            <option value="">Select Property Type</option>
            <option value="شقة">شقة</option>
            <option value="عقار مبني">عقار مبني</option>
            <option value="فيلا">فيلا</option>
            <option value="بيت">بيت</option>
            <option value="محل">محل</option>
            <option value="مكتب">مكتب</option>
            <option value="منزل">منزل</option>
            <option value="شاليه">شاليه</option>
            <option value="شبكة">شبكة</option>
            <option value="مذاكرة">مذاكرة</option>
          </select>
          {formik.touched.propertyType && formik.errors.propertyType && (
            <p className="text-red-500 text-sm">{formik.errors.propertyType}</p>
          )}
        </div>

        {/* Property Area */}
        <div className="form-input">
          <label className="block text-gray-700 pb-2">مساحة العقار</label>
          <input
            title="propertyArea"
            type="text"
            name="propertyArea"
            className="w-full p-2  border-2 border-gray-400 rounded-md "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.propertyArea}
          />
          {formik.touched.propertyArea && formik.errors.propertyArea && (
            <p className="text-red-500 text-sm">{formik.errors.propertyArea}</p>
          )}
        </div>

        {/* City */}
        <div className="form-input">
          <label className="block text-gray-700 pb-2">أختر المدينة</label>
          <select
            title="proprty-city"
            name="city"
            className="w-full p-2  border-2 border-gray-400 rounded-md "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
          >
            <option value="">Select City</option>
            <option value="الرياض">الرياض</option>
            <option value="جدة">جدة</option>
            <option value="مكة المكرمة">مكة المكرمة</option>
            <option value="المدينة المنورة">المدينة المنورة</option>
            <option value="الدمام">الدمام</option>
            <option value="الخبر">الخبر</option>
            <option value="الطائف">الطائف</option>
            <option value="القصيم">القصيم</option>
            <option value="أبها">أبها</option>
            <option value="تبوك">تبوك</option>
            <option value="خميس مشيط">خميس مشيط</option>
            <option value="حائل">حائل</option>
            <option value="جدة">جدة</option>
            <option value="نجران">نجران</option>
          </select>
          {formik.touched.city && formik.errors.city && (
            <p className="text-red-500 text-sm">{formik.errors.city}</p>
          )}
        </div>

        {/* Region */}
        <div className="form-input">
          <label className="block text-gray-700 pb-2">أختر المنطقة</label>
          <select
            title="property-region"
            name="region"
            className="w-full p-2  border-2 border-gray-400 rounded-md "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.region}
          >
            <option value="">Select Region</option>
            <option value="البحيرة">البحيرة</option>
            <option value="القبة">القبة</option>
            <option value="القويعية">القويعية</option>
            <option value="المنيعة">المنيعة</option>
            <option value="المنيرية">المنيرية</option>
            <option value="المنيرية الشمالية">المنيرية الشمالية</option>
            <option value="المنيرية الجنوبية">المنيرية الجنوبية</option>
          </select>
          {formik.touched.region && formik.errors.region && (
            <p className="text-red-500 text-sm">{formik.errors.region}</p>
          )}
        </div>

        {/* Details */}
        <div className="form-input">
          <label className="block text-gray-700 pb-2">Details</label>
          <textarea
            title="property description"
            name="details"
            rows={4}
            className="w-full p-2  border-2 border-gray-400 rounded-md "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.details}
          />
          {formik.touched.details && formik.errors.details && (
            <p className="text-red-500 text-sm">{formik.errors.details}</p>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full " id="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
