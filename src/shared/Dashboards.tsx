import LinkButton from "../main/Ui/LinkButton";

export default function Dashboards() {
    return (
        <div className="p-4 flex flex-col max-w-100 m-auto  gap-4 items-stretch justify-center h-screen">
            <LinkButton className="w-full text-center text-2xl" to="/client/">
                Client
            </LinkButton>
            <LinkButton className="w-full text-center text-2xl" to="/company/">
                Company
            </LinkButton>
            <LinkButton className="w-full text-center text-2xl" to="/reviewer/">
                Reviewer
            </LinkButton>
        </div>
    );
}
