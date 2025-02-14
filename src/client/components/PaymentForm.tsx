import { useFormik } from "formik";
import * as Yup from "yup";


interface CardPaymentFormProps {
  handleIsBtnClicked: () => void;
}

const CardPaymentForm: React.FC<CardPaymentFormProps> = ({ handleIsBtnClicked }) => { 
  const formik = useFormik({
    initialValues: {
      nameOnCard: "",
      cardNumber: "",
      expirationDate: "",
      cvc: "",
    },
    validationSchema: Yup.object({
      nameOnCard: Yup.string().required("Required"),
      cardNumber: Yup.string()
        .matches(/^\d{16}$/, "Card number must be 16 digits")
        .required("Required"),
      expirationDate: Yup.string()
        .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Format: MM/YY")
        .required("Required"),
      cvc: Yup.string()
        .matches(/^\d{3,4}$/, "CVC must be 3 or 4 digits")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Payment Info:", values);
      handleIsBtnClicked();
    },
  });

  return (
    <div className="w-[350px] mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Enter Payment Details</h2>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
        {/* Name on Card */}
        <div>
          <label className="block text-sm font-medium">Name on Card</label>
          <input
            type="text"
            title="nameOnCard"
            className="w-full p-2 border rounded-md"
            {...formik.getFieldProps("nameOnCard")}
          />
          {formik.touched.nameOnCard && formik.errors.nameOnCard && (
            <p className="text-red-500 text-sm">{formik.errors.nameOnCard}</p>
          )}
        </div>

        {/* Card Number */}
        <div>
          <label className="block text-sm font-medium">Card Number</label>
          <input
            type="text"
            title="cardNumber"
            className="w-full p-2 border rounded-md"
            {...formik.getFieldProps("cardNumber")}
          />
          {formik.touched.cardNumber && formik.errors.cardNumber && (
            <p className="text-red-500 text-sm">{formik.errors.cardNumber}</p>
          )}
        </div>

        {/* Expiration Date */}
        <div>
          <label className="block text-sm font-medium">
            Expiration Date (MM/YY)
          </label>
          <input
            type="text"
            title="expirationDate"
            className="w-full p-2 border rounded-md"
            {...formik.getFieldProps("expirationDate")}
          />
          {formik.touched.expirationDate && formik.errors.expirationDate && (
            <p className="text-red-500 text-sm">
              {formik.errors.expirationDate}
            </p>
          )}
        </div>

        {/* CVC */}
        <div>
          <label className="block text-sm font-medium">CVC</label>
          <input
            type="text"
            title="cvc"
            className="w-full p-2 border rounded-md"
            {...formik.getFieldProps("cvc")}
          />
          {formik.touched.cvc && formik.errors.cvc && (
            <p className="text-red-500 text-sm">{formik.errors.cvc}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          id="payment-form-btn"
          className=" text-white py-2 rounded-md transition"
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default CardPaymentForm;
