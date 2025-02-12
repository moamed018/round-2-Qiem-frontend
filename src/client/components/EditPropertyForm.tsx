import { useFormik } from "formik";
import * as Yup from "yup";
import "../style/editProperty.css";

interface PropertyData {
  id?: string;
  propertyAddress?: string;
  propertyType?: string;
  propertyArea?: string;
  city?: string;
  region?: string;
  details?: string;
}

interface EditPropertyFormProps {
  initialData: PropertyData;
  onSubmit: (updatedCard: PropertyData) => void;
  onCancel: () => void;
}

const EditPropertyForm: React.FC<EditPropertyFormProps> = ({
  initialData,
  onSubmit,
  onCancel,
}) => {
  const formik = useFormik<PropertyData>({
    initialValues: {
      id: initialData?.id, // Make `id` optional
      propertyAddress: initialData?.propertyAddress || "",
      propertyType: initialData?.propertyType || "",
      propertyArea: initialData?.propertyArea || "",
      city: initialData?.city || "",
      region: initialData?.region || "",
      details: initialData?.details || "",
    },
    validationSchema: Yup.object({
      propertyAddress: Yup.string().min(3, "Too short!").optional(),
      propertyType: Yup.string().optional(),
      propertyArea: Yup.string().optional(),
      city: Yup.string().optional(),
      region: Yup.string().optional(),
      details: Yup.string()
        .min(10, "Details must be at least 10 characters")
        .optional(),
    }),
    onSubmit: (values) => {
      onSubmit({ ...values });
    },
  });

  return (
    <div className="w-full  mt-10 p-6 bg-white">
      <h2 className="" id="edit-property-header">
        Edit Property
      </h2>
      <form
        onSubmit={formik.handleSubmit}
        className="space-y-4"
        id="edit-property-container"
      >
        {[
          { name: "propertyAddress", label: "عنوان العقار", type: "text" },
          { name: "propertyArea", label: "مساحة العقار", type: "text" },
          { name: "city", label: "المدينة", type: "text" },
          { name: "region", label: "المنطقة", type: "text" },
        ].map(({ name, label, type }) => (
          <div key={name} className="form-input">
            <label className="block text-gray-700 pb-2">{label}</label>
            <input
              title="name"
              type={type}
              name={name}
              className="w-full p-2 border-2 border-gray-400 rounded-md"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values[name as keyof PropertyData]}
            />
            {formik.touched[name as keyof PropertyData] &&
              formik.errors[name as keyof PropertyData] && (
                <p className="text-red-500 text-sm">
                  {String(formik.errors[name as keyof PropertyData])}
                </p>
              )}
          </div>
        ))}

        {/* Property Type Dropdown */}
        <div className="form-input">
          <label className="block text-gray-700 pb-2">نوع العقار</label>
          <select
            title="property type"
            name="propertyType"
            className="w-full p-2 border-2 border-gray-400 rounded-md"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.propertyType}
          >
            <option value="">Select Property Type</option>
            <option value="شقة">شقة</option>
            <option value="فيلا">فيلا</option>
            <option value="مكتب">مكتب</option>
          </select>
          {formik.touched.propertyType && formik.errors.propertyType && (
            <p className="text-red-500 text-sm">
              {formik.errors.propertyType.toString()}
            </p>
          )}
        </div>

        {/* Details */}
        <div className="form-input">
          <label className="block text-gray-700 pb-2">التفاصيل</label>
          <textarea
            title="details"
            name="details"
            rows={4}
            className="w-full p-2 border-2 border-gray-400 rounded-md"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.details}
          />
          {formik.touched.details && formik.errors.details && (
            <p className="text-red-500 text-sm">
              {formik.errors.details.toString()}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPropertyForm;
