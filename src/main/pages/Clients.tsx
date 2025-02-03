import RegisterPage from "./RegisterPage";
import ClientsImage from "../../assets/auth/register_clints.png";
import CompanyImage from "../../assets/auth/register_company.png";
import RegisterCategory from "../Ui/RegisterCategory";

export default function Clients() {
    return (
        <RegisterPage title="قم بإختيار حالة حسابك !">
            <div className="w-8/10">
                <RegisterCategory
                    to="client/"
                    text="فرد"
                    image={ClientsImage}
                />
                <RegisterCategory
                    to="company/"
                    text="شركة"
                    image={CompanyImage}
                />
            </div>
        </RegisterPage>
    );
}
