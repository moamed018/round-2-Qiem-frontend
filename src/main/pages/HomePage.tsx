import { useState } from "react";
import Header from "../../shared/Header";
import Sidebar from "../../shared/Sidebar";
import Button from "../Ui/Button";
import LinkButton from "../Ui/LinkButton";
import Modal from "../../shared/Modal";

import { FaUserAlt } from "react-icons/fa";

function HomePage() {
    const [openModal, setOpenModal] = useState<boolean>(false);

    return (
        <section className="text-6xl">
            <Header />
            <main className="flex ">
                <Sidebar />
                <div className="flex flex-col grow-2 items-center justify-center h-screen space-y-5">
                    <LinkButton to="/login" className="text-5xl" fullRounded>
                        Login
                    </LinkButton>
                    <LinkButton to="/register" className="text-5xl" fullRounded>
                        Register
                    </LinkButton>

                    <LinkButton to="/settings" className="text-5xl" fullRounded>
                        Settings Page for All
                    </LinkButton>

                    <Button
                        onClick={() => setOpenModal(true)}
                        className="text-5xl"
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
                </div>
            </main>
        </section>
    );
}

export default HomePage;
