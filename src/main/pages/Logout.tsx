import { useState } from "react";
import Button from "../Ui/Button";
import Modal from "../../shared/Modal";
import { FaUserAlt } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
export default function Logout() {
    const [openModal, setOpenModal] = useState<boolean>(false);
    return (
        <>
            <button
                onClick={() => setOpenModal(true)}
                className="text-lg flex font-bold gap-3 cursor-pointer hover:text-[#c29062]"
            >
                <RxExit className="sidebar-icon" />
                تسجيل الخروج
            </button>

            <Modal
                isOpen={openModal === true}
                Icon={FaUserAlt}
                onClose={() => {
                    console.log("closed modal");
                    setOpenModal(false);
                }}
                title="عود قريباً"
                description="هل انت متأكد من تسجيل الخروج ؟"
                type="confirmation"
                actions={
                    <>
                        <Button
                            onClick={() => {
                                setOpenModal(false);
                                console.log("تم الخروج");
                            }}
                            className="px-12 rounded-md text-xl font-bold"
                        >
                            تأكيد
                        </Button>
                        <Button
                            onClick={() => {
                                console.log("closed modal");
                                setOpenModal(false);
                            }}
                            className="px-12 rounded-md text-xl font-bold"
                        >
                            إلغاء
                        </Button>
                    </>
                }
            />
        </>
    );
}
