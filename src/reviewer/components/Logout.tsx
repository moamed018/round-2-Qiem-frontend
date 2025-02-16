import { useState } from "react";
import Button from "./Button";
import Modal from "../../shared/Modal";
import { FaUserAlt } from "react-icons/fa";
export default function Logout() {
    const [openModal, setOpenModal] = useState<boolean>(false);
   
    return (
        <>
            <Button
                onClick={() => setOpenModal(true)}
                className="text-5xl w-fit h-fit m-8"
                fullRounded
            >
                Log Out
            </Button>

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
