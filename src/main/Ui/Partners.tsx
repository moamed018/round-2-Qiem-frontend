import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, CSSProperties } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import ImageCompany from "../../assets/partners-logos/logo_3.png";

export default function Partners() {
    const [activeSlide, setActiveSlide] = useState(0);

    const settings = {
        className: "center flex px-4",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        beforeChange: (_: number, next: number) => {
            setActiveSlide(next);
        },
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="pb-30 px-10 bg-[#D1E8E24D]">
            <h2 className="text-center text-4xl font-bold mb-10">
                شركاؤنا بالنجاح
            </h2>
            <div className="slider-container">
                <Slider {...settings}>
                    {Array(6)
                        .fill(ImageCompany)
                        .map((logo, index) => (
                            <div
                                key={index}
                                className={`flex justify-center relative transition-all duration-500 ${
                                    index === activeSlide
                                        ? "scale-110 opacity-100 grayscale-0 "
                                        : "scale-90 opacity-50 grayscale"
                                }`}
                            >
                                <img src={logo} className="w-full" />
                                <span className="absolute bottom-0 left-0 text-sm text-[#C29062] ">
                                    {index + 1}
                                </span>
                            </div>
                        ))}
                </Slider>
            </div>
        </div>
    );
}

interface ArrowProps {
    className?: string;
    style?: CSSProperties;
    onClick?: () => void;
}

function NextArrow(props: ArrowProps) {
    const { className, style, onClick } = props;
    return (
        <button
            className={`${className} [&::before]:hidden [&::after]:hidden !w-fit !h-fit`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <IoIosArrowForward className="w-[40px] h-[40px] text-[#C29062]" />
        </button>
    );
}

function PrevArrow(props: ArrowProps) {
    const { className, style, onClick } = props;
    return (
        <button
            className={`${className} [&::before]:hidden [&::after]:hidden !w-fit !h-fit`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <IoIosArrowBack className="w-[40px] h-[40px] text-[#C29062]" />
        </button>
    );
}
