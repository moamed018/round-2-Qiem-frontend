import { IoMdAlert } from "react-icons/io";

export default function ErrorAlert({ message = "خطا" }: { message?: string }) {
    return (
        <div className="bg-red-100 border border-red-500 rounded-md py-2 px-4 flex items-center gap-4 mx-4 mb-6">
            <IoMdAlert className="w-[50px] h-[50px] text-red-900" />
            <span className="text-red-800 text-xl font-bold">{message}</span>
        </div>
    );
}
