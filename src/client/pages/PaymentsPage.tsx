import { Outlet } from "react-router";
import PaymentsCards from "../components/PaymentsCards";

const PaymentsPage = () => {
  return (
    <div>
      <PaymentsCards />
      <Outlet />
    </div>
  );
};

export default PaymentsPage;
