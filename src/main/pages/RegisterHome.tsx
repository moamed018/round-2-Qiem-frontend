import RegisterPage from "./RegisterPage";
import ClientsImage from "../../assets/auth/register_clints.png";
import CompanyImage from "../../assets/auth/register_company.png";
import ReviewerImage from "../../assets/auth/register_reviewer.png";
import RegisterCategory from "../Ui/RegisterCategory";

export default function RegisterHome() {
    return (
        <RegisterPage title="قم بإختيار حالة حسابك !">
            <div className="w-8/10">
                <RegisterCategory
                    to="clients/"
                    text="عميل"
                    image={ClientsImage}
                />
                <RegisterCategory
                    to="company/"
                    text="شركة التقييم"
                    image={CompanyImage}
                />
                <RegisterCategory
                    to="reviewer/"
                    text="معاين"
                    image={ReviewerImage}
                />
            </div>
        </RegisterPage>
    );
}
