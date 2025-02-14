import React, { useState } from "react";
import { IoNotificationsSharp } from "react-icons/io5";

const notifications = [
    {
        id: 1,
        title: "تخفيضات لفترة محدودة",
        description: "طلب التعيين. مبنى سكني مكون من ثلاث طوابق",
        image: "/src/assets/samsungcompany.jpeg",
    },
    {
        id: 2,
        title: "سعداء بشراكتنا",
        description: "طلب التعيين. مبنى سكني مكون من ثلاث طوابق",
        image: "/src/assets/samsungcompany.jpeg",
    },
    {
        id: 3,
        title: "طلب تعيين معين",
        description: "طلب التعيين. مبنى سكني مكون من ثلاث طوابق",
        image: "/src/assets/samsungcompany.jpeg",
    },
    {
        id: 4,
        title: "تم ارسال تقرير التقييم",
        description: "طلب التعيين. مبنى سكني مكون من ثلاث طوابق",
        image: "/src/assets/samsungcompany.jpeg",
    },
    {
        id: 5,
        title: "تم سداد رسوم المعاين",
        description: "طلب التعيين. مبنى سكني مكون من ثلاث طوابق",
        image: "/src/assets/samsungcompany.jpeg",
    },
];

const NotificationDropdown: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            {/* Notification Icon */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2 "
            >
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {notifications.length}
                </span>
                <IoNotificationsSharp className=" notifications-icon" />
            </button>

            {/* Dropdown Panel */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg overflow-hidden z-50">
                    <ul className="divide-y divide-gray-200">
                        {notifications.map((notification) => (
                            <li
                                key={notification.id}
                                className="flex items-center p-3 hover:bg-gray-100 transition"
                            >
                                <img
                                    src={notification.image}
                                    alt="Notification"
                                    className="w-12 h-12 rounded-md object-cover"
                                />
                                <div className="ml-3">
                                    <p className="text-sm font-semibold">
                                        {notification.title}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {notification.description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default NotificationDropdown;
