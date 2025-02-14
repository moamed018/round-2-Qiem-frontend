import data from "../data.ts";
import { useEffect, useState } from "react";

export default function ProjectDetails({
    id,
    showGallery = true,
}: {
    id: string;
    showGallery?: boolean;
}) {
    const [property, setProperty] = useState<{
        title: string;
        id: number;
        image: string;
        gallery: string[];
        price: string;
        priceType: string;
        description: {
            short: string;
            long: string;
            properties: string[];
        };
        info: {
            type: string;
            space: string;
            city: string;
            region: string;
        };
    }>();

    useEffect(() => {
        const foundProperty = data.find((e) => `${e.id}` === id);
        if (foundProperty) {
            setProperty({
                ...foundProperty,
                gallery: foundProperty.gallery || [],
            });
        }
    }, [id]);

    return (
        <div>
            <h2 className="text-xl font-bold px-2 mb-4">{property?.title}</h2>
            <div
                className={`grid ${
                    property?.gallery &&
                    property.gallery.length > 0 &&
                    showGallery
                        ? "sm:grid-cols-8 grid-cols-6 "
                        : "grid-cols-4 max-h-150"
                } grid-rows-2 gap-3 rounded-lg overflow-hidden mb-14`}
            >
                <div
                    className={`md:col-span-4 col-span-full row-span-full overflow-hidden`}
                >
                    <img
                        className="w-full h-full object-cover transition-all duration-300 hover:scale-110 opacity-90 hover:opacity-100"
                        src={property?.image} alt="gallery"
                    />
                </div>
                {showGallery &&
                    property?.gallery.map((e, i) => (
                        <div
                            key={i}
                            className="sm:col-span-2 col-span-3 row-span-1 overflow-hidden"
                        >
                            <img
                                className="w-full h-full object-cover transition-all duration-300 hover:scale-110 scale-105 opacity-90 hover:opacity-100"
                                src={e} alt="gallery"
                            />
                        </div>
                    ))}
            </div>
            <h3 className="sm:px-20 px-4 sm:text-4xl text-2xl font-bold text-[#C29062] mb-8">
                {property?.price} {property?.priceType}
            </h3>
            <p className="px-2 mb-8">{property?.description.short}</p>
            <p className="px-2 mb-8">{property?.description.long}</p>
            <span>المميزات:</span>
            <ul className="mb-8">
                {property?.description.properties.map((e, i) => (
                    <li key={i}>- {e}</li>
                ))}
            </ul>
            <div className="ms-6 mb-24">
                <div className="mb-3">
                    <p className="text-[#C29062] font-bold">النوع</p>
                    <p>{property?.info.type}</p>
                </div>
                <div className="mb-3">
                    <p className="text-[#C29062] font-bold">المساحة</p>
                    <p>{property?.info.space}</p>
                </div>
                <div className="mb-3">
                    <p className="text-[#C29062] font-bold">المدينة</p>
                    <p>{property?.info.city}</p>
                </div>
                <div className="mb-3">
                    <p className="text-[#C29062] font-bold">المنطقة</p>
                    <p>{property?.info.region}</p>
                </div>
            </div>
        </div>
    );
}
