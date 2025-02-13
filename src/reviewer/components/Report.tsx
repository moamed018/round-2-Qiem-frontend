import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ButtonCard from "../../company/components/ButtonCard";

const today = new Date().toISOString().split("T")[0];

const validationSchema = Yup.object({
    propertyCode: Yup.number().required("كود العقار مطلوب"),
    evaluationDate: Yup.date().min(today, "لا يمكن اختيار تاريخ قبل اليوم").required("تاريخ التقييم مطلوب"),
    propertyDescription: Yup.string().required("الوصف العام مطلوب"),
    locationDescription: Yup.string().required("وصف الموقع مطلوب"),
    deedNumber: Yup.number().required("رقم الصك مطلوب"),
    deedDate: Yup.date().required("تاريخ الصك مطلوب"),
    propertyType: Yup.string().required("نوع العقار مطلوب"),
    infrastructure: Yup.string().required("يجب تحديد البنية التحتية"),
    services: Yup.array().min(1, "يجب اختيار خدمة واحدة على الأقل"),
    propertyAge: Yup.string().required("عمر العقار مطلوب"),
    usability: Yup.string().required("يجب اختيار الجاهزية"),
    number: Yup.number().required("الرقم مطلوب"),
    pieceNumber: Yup.number().required("رقم القطعة مطلوب"),
    source: Yup.string().required("المصدر مطلوب"),
    registryType: Yup.string().required("نوع التسجيل مطلوب"),
    distance: Yup.string().required("المسافة مطلوبة"),
    boundaries: Yup.object().shape({
        north: Yup.number().min(0, "يجب أن يكون رقمًا موجبًا").required("مطلوب"),
        northLength: Yup.number().min(0, "يجب أن يكون رقمًا موجبًا").required("مطلوب"),
        south: Yup.number().min(0, "يجب أن يكون رقمًا موجبًا").required("مطلوب"),
        southLength: Yup.number().min(0, "يجب أن يكون رقمًا موجبًا").required("مطلوب"),
        east: Yup.number().min(0, "يجب أن يكون رقمًا موجبًا").required("مطلوب"),
        eastLength: Yup.number().min(0, "يجب أن يكون رقمًا موجبًا").required("مطلوب"),
        west: Yup.number().min(0, "يجب أن يكون رقمًا موجبًا").required("مطلوب"),
        westLength: Yup.number().min(0, "يجب أن يكون رقمًا موجبًا").required("مطلوب"),
    }),
    withinScope: Yup.string().required("ضمن النطاق مطلوب"),
    elevation: Yup.string().required("الارتفاع مطلوب"),
    buildingCondition: Yup.string().required("حالة المبنى مطلوبة"),
    finishingDescription: Yup.string().required("وصف التشطيب مطلوب"),
    floorsCount: Yup.string().required("عدد الطوابق مطلوب"),
    landEvaluation: Yup.number().required("تقييم الأرض مطلوب"),
    buildingEvaluation: Yup.number().required("تقييم المبنى مطلوب"),
    totalPropertyCost: Yup.string().required("إجمالي تكلفة العقار مطلوب"),
    marketValue: Yup.string().required("القيمة السوقية مطلوبة"),
    propertyComparisons: Yup.string().required("مقارنات العقار مطلوبة"),
    conflictDisclosure: Yup.string().required("الإفصاح عن النزاعات مطلوب"),
    measurement: Yup.string().required("القياس مطلوب"),
    inspection: Yup.string().required("الفحص مطلوب"),
    generalNotes: Yup.string().required("الملاحظات العامة مطلوبة"),
    propertyImages: Yup.mixed().required("يجب رفع صورة"),
});

const ReportForm: React.FC<{ mode: "reviewer" | "drawer" | "company" }> = ({ mode }) => {
    const [file, setFile] = useState<File | null>(null);
        
    const formik = useFormik({
        initialValues: {
            propertyCode: "",
            evaluationDate: "",
            propertyDescription: "",
            locationDescription: "",
            deedNumber: "",
            deedDate: "",
            propertyType: "",
            infrastructure: "",
            services: [],
            propertyAge: "",
            usability: "",
            number: "",
            pieceNumber: "",
            source: "",
            registryType: "",
            distance: "",
            boundaries: {
                north: 0,
                northLength: 0,
                south: 0,
                southLength: 0,
                east: 0,
                eastLength: 0,
                west: 0,
                westLength: 0,
            },
            withinScope: "",
            elevation: "",
            buildingCondition: "",
            finishingDescription: "",
            floorsCount: "",
            landEvaluation: "",
            buildingEvaluation: "",
            totalPropertyCost: "",
            marketValue: "",
            propertyComparisons: "",
            conflictDisclosure: "",
            measurement: "",
            inspection: "",
            generalNotes: "",
            propertyImages: null,
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(file);
            console.log("Submitted Data:", values);
        },
    });
    const handleAccept = () => {
        console.log("Accepted");
    };
    const handleDecline = () => {
        console.log("Decline");
    };
    return (
        <form onSubmit={formik.handleSubmit} className="max-w-2xl mx-auto bg-white p-6 shadow-lg rounded-lg space-y-4">
            <div>
                <label>كود العقار</label>
                <input
                    placeholder="كودالعقار"
                    type="number"
                    name="propertyCode"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.propertyCode}
                    className="w-full border border-[#D1E8E2] rounded p-2"
                />
            </div>

            <div>
                <label>تاريخ التقييم</label>
                <input
                    placeholder=" تاريخ التقييم"
                    type="date"
                    name="evaluationDate"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.evaluationDate}
                    className="w-full border border-[#D1E8E2] rounded p-2"
                />
            </div>

            <div>
                <label>الوصف العام</label>
                <textarea
                    placeholder="الوصف العام"
                    name="propertyDescription"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.propertyDescription}
                    className="w-full border border-[#D1E8E2] rounded p-2"
                />
            </div>

            <div>
                <label>وصف الموقع</label>
                <textarea
                    placeholder="وصف الموقع"
                    name="locationDescription"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.locationDescription}
                    className="w-full border border-[#D1E8E2] rounded p-2"
                />
            </div>

            <div>
                <label>رقم الصك</label>
                <input
                    placeholder="وصف الموقع"
                    type="number"
                    name="deedNumber"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.deedNumber}
                    className="w-full border border-[#D1E8E2] border-[#D1E8E2] rounded p-2"
                    disabled={mode !== "reviewer"}

                />
            </div>

            <div>
                <label>تاريخ الصك</label>
                <input
                    placeholder="تاريخ الصك"
                    type="date"
                    name="deedDate"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.deedDate}
                    className="w-full border border-[#D1E8E2] rounded p-2"
                    disabled={mode !== "reviewer"}
                />
            </div>

            <div>
                <label>نوع العقار</label>
                <input
                    placeholder="نوع العقار"
                    type="text"
                    name="propertyType"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.propertyType}
                    className="w-full border border-[#D1E8E2] rounded p-2"
                    disabled={mode !== "reviewer"}
                />
            </div>
            <div>
                <label className="block text-gray-700">البنية التحتية</label>
                <div className="space-x-4 flex align-center">
                    <div className="flex align-center">
                        <input
                            type="radio"
                            id="infrastructureYes"
                            name="infrastructure"
                            value="نعم"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.infrastructure === "نعم"}
                            className="mr-2 text-[#C29062] focus:ring-[#C29062]"
                        />
                        <label htmlFor="infrastructureYes" className="ms-2 text-[#C29062]">نعم</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="infrastructureNo"
                            name="infrastructure"
                            value="لا"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.infrastructure === "لا"}
                            className="mr-2"
                        />
                        <label htmlFor="infrastructureNo" className="ms-2 text-[#C29062]">لا</label>
                    </div>
                </div>
                {formik.touched.infrastructure && formik.errors.infrastructure && (
                    <p className="text-red-500 text-sm">{formik.errors.infrastructure}</p>
                )}
            </div>


            <div>
                <label className="block text-gray-700">الخدمات</label>
                <div className="space-y-2 flex gap-3">
                    <div>
                        <input
                            placeholder="الخدمات"
                            type="checkbox"
                            name="services"
                            value="service1"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.services.includes('service1')}
                            className="mr-2 bg-[#C29062] ronded-full"
                            disabled={mode !== "reviewer"}
                        />
                        <label className="ms-2">مياه </label>
                    </div>
                    <div>
                        <input
                            placeholder="مياه"
                            type="checkbox"
                            name="services"
                            value="service2"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.services.includes('service2')}
                            className="mr-2"
                            disabled={mode !== "reviewer"}
                        />
                        <label className="ms-2">هاتف </label>
                    </div>
                    <div>
                        <input
                            placeholder="هاتف"
                            type="checkbox"
                            name="services"
                            value="service3"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.services.includes('service3')}
                            className="mr-2"
                            disabled={mode !== "reviewer"}
                        />
                        <label className="ms-2">خدمة 3</label>
                    </div>
                    {/* يمكنك إضافة المزيد من الخدمات كما تحتاج */}
                </div>
                {formik.touched.services && formik.errors.services && (
                    <p className="text-red-500 text-sm">{formik.errors.services}</p>
                )}
            </div>


            <div>
                <label className="block text-gray-700">عمر العقار</label>
                <input
                    placeholder="عمر العقار"
                    type="text"
                    name="propertyAge"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.propertyAge}
                    className="w-full border border-[#D1E8E2] border border-[#D1E8E2]-[#D1E8E2] rounded p-2"
                    disabled={mode !== "reviewer"}
                />
                {formik.touched.propertyAge && formik.errors.propertyAge && (
                    <p className="text-red-500 text-sm">{formik.errors.propertyAge}</p>
                )}
            </div>

            <div>
                <label className="block text-gray-700">
                    جاهز للاستخدام
                </label>
                <div className="space-x-4 flex">
                    <div>
                        <input
                            type="radio"
                            id="usabilityReady"
                            name="usability"
                            value="جاهز للاستخدام"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.usability === "جاهز للاستخدام"}
                            className="mr-2"
                        />
                        <label htmlFor="usabilityReady" className="ms-2 text-[#C29062]">جاهز </label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="usabilityUnderConstruction"
                            name="usability"
                            value="تحت الإنشاء"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.usability === "تحت الإنشاء"}
                            className="mr-2"
                        />
                        <label htmlFor="usabilityUnderConstruction" className="ms-2 text-[#C29062]">تحت الإنشاء</label>
                    </div>
                </div>
                {formik.touched.usability && formik.errors.usability && (
                    <p className="text-red-500 text-sm">{formik.errors.usability}</p>
                )}
            </div>


            <div>
                <label className="block text-gray-700">الرقم</label>
                <input
                    placeholder="الرقم"
                    type="text"
                    name="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.number}
                    className="w-full border border-[#D1E8E2] rounded p-2"
                    disabled={mode !== "reviewer"}
                />
                {formik.touched.number && formik.errors.number && (
                    <p className="text-red-500 text-sm">{formik.errors.number}</p>
                )}
            </div>

            <div>
                <label className="block text-gray-700">رقم القطعة</label>
                <input
                    placeholder="رقم القطعة"
                    type="text"
                    name="pieceNumber"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.pieceNumber}
                    className="w-full border border-[#D1E8E2] rounded p-2"
                    disabled={mode !== "reviewer"}
                />
                {formik.touched.pieceNumber && formik.errors.pieceNumber && (
                    <p className="text-red-500 text-sm">{formik.errors.pieceNumber}</p>
                )}
            </div>

            <div>
                <label className="block text-gray-700">المصدر</label>
                <input
                    placeholder="المصدر"
                    type="text"
                    name="source"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.source}
                    className="w-full border border-[#D1E8E2] rounded p-2"
                    disabled={mode !== "reviewer"}
                />
                {formik.touched.source && formik.errors.source && (
                    <p className="text-red-500 text-sm">{formik.errors.source}</p>
                )}
            </div>

            <div>
                <label className="block text-gray-700">
                    نوع القيد

                </label>
                <input
                    placeholder="نوع القيد"
                    type="text"
                    name="registryType"
                    onChange={formik.handleChange} onBlur={formik.handleBlur}
                    value={formik.values.registryType}
                    className="w-full border border-[#D1E8E2] rounded p-2"
                    disabled={mode !== "reviewer"}
                />
                {formik.touched.registryType && formik.errors.registryType && (
                    <p className="text-red-500 text-sm">{formik.errors.registryType}</p>
                )}
            </div>

            <div>
                <label className="block text-gray-700">المسافة</label>
                <input
                    placeholder="المسافة"
                    type="text"
                    name="distance"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.distance}
                    className="w-full border border-[#D1E8E2] rounded p-2"
                    disabled={mode !== "reviewer"}
                />
                {formik.touched.distance && formik.errors.distance && (
                    <p className="text-red-500 text-sm">{formik.errors.distance}</p>
                )}
            </div>

            <div className="grid grid-cols-2 gap-4">
                {/* الحدود الشمالية */}
                <div>
                    <label className="block text-[#C29062]">شمال</label>
                    <input
                        placeholder="شمال"
                        type="number"
                        name="boundaries.north"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.boundaries.north}
                        className="border border-[#D1E8E2] border-[#D1E8E2] rounded p-2 w-full"
                    />
                    {formik.touched.boundaries?.north && formik.errors.boundaries?.north && (
                        <p className="text-red-500 text-sm">{formik.errors.boundaries.north}</p>
                    )}
                </div>
                <div>
                    <label className="block text-[#C29062]">بطول</label>
                    <input
                        placeholder="بطول"
                        type="number"
                        name="boundaries.northLength"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.boundaries.northLength}
                        className="border border-[#D1E8E2] border border-[#D1E8E2]-[#D1E8E2] rounded p-2 w-full"
                    />
                    {formik.touched.boundaries?.northLength && formik.errors.boundaries?.northLength && (
                        <p className="text-red-500 text-sm">{formik.errors.boundaries.northLength}</p>
                    )}
                </div>

                {/* الحدود الجنوبية */}
                <div>
                    <label className="block text-[#C29062]">جنوب</label>
                    <input
                        placeholder="جنوب"
                        type="number"
                        name="boundaries.south"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.boundaries.south}
                        className="border border-[#D1E8E2] rounded p-2 w-full"
                    />
                    {formik.touched.boundaries?.south && formik.errors.boundaries?.south && (
                        <p className="text-red-500 text-sm">{formik.errors.boundaries.south}</p>
                    )}
                </div>
                <div>
                    <label className="block text-[#C29062]">طول </label>
                    <input
                        placeholder="بطول"
                        type="number"
                        name="boundaries.southLength"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.boundaries.southLength}
                        className="border border-[#D1E8E2] rounded p-2 w-full"
                    />
                    {formik.touched.boundaries?.southLength && formik.errors.boundaries?.southLength && (
                        <p className="text-red-500 text-sm">{formik.errors.boundaries.southLength}</p>
                    )}
                </div>

                {/* الحدود الشرقية */}
                <div>
                    <label className="block text-[#C29062]">شرق</label>
                    <input
                        placeholder="شرق"
                        type="number"
                        name="boundaries.east"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.boundaries.east}
                        className="border border-[#D1E8E2] rounded p-2 w-full"
                    />
                    {formik.touched.boundaries?.east && formik.errors.boundaries?.east && (
                        <p className="text-red-500 text-sm">{formik.errors.boundaries.east}</p>
                    )}
                </div>
                <div>
                    <label className="block text-[#C29062]">طول </label>
                    <input
                        placeholder="بطول"
                        type="number"
                        name="boundaries.eastLength"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.boundaries.eastLength}
                        className="border border-[#D1E8E2] rounded p-2 w-full"
                    />
                    {formik.touched.boundaries?.eastLength && formik.errors.boundaries?.eastLength && (
                        <p className="text-red-500 text-sm">{formik.errors.boundaries.eastLength}</p>
                    )}
                </div>

                {/* الحدود الغربية */}
                <div>
                    <label className="block text-[#C29062]">غرب</label>
                    <input
                        placeholder="غرب"
                        type="number"
                        name="boundaries.west"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.boundaries.west}
                        className="border border-[#D1E8E2] rounded p-2 w-full"
                    />
                    {formik.touched.boundaries?.west && formik.errors.boundaries?.west && (
                        <p className="text-red-500 text-sm">{formik.errors.boundaries.west}</p>
                    )}
                </div>
                <div>
                    <label className="block text-[#C29062]">طول </label>
                    <input
                        placeholder="بطول"
                        type="number"
                        name="boundaries.westLength"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.boundaries.westLength}
                        className="border border-[#D1E8E2] border border-[#D1E8E2]-[#D1E8E2] rounded p-2 w-full"
                    />
                    {formik.touched.boundaries?.westLength && formik.errors.boundaries?.westLength && (
                        <p className="text-red-500 text-sm">{formik.errors.boundaries.westLength}</p>
                    )}
                </div>
            </div>


            <div>
                <label className="block text-gray-700">داخل النطاق

                </label>
                <input
                    placeholder="داخل النطاق"
                    type="text"
                    name="withinScope"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.withinScope}
                    className="w-full border border-[#D1E8E2] rounded p-2"
                    disabled={mode !== "reviewer"}
                />
                {formik.touched.withinScope && formik.errors.withinScope && (
                    <p className="text-red-500 text-sm">{formik.errors.withinScope}</p>
                )}
            </div>

            <div>
                <label className="block text-gray-700">
                    المنسوب
                </label>
                <input
                    placeholder="المنسوب"
                    type="text"
                    name="elevation"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.elevation}
                    className="w-full border border-[#D1E8E2] rounded p-2"
                    disabled={mode !== "reviewer"}
                />
                {formik.touched.elevation && formik.errors.elevation && (
                    <p className="text-red-500 text-sm">{formik.errors.elevation}</p>
                )}
            </div>

            <div>
                <label className="block text-gray-700">حالة المبنى</label>
                <input
                    placeholder="حالة المبنى"
                    type="text"
                    name="buildingCondition"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.buildingCondition}
                    className="w-full border border-[#D1E8E2] rounded p-2"
                    disabled={mode !== "reviewer"}
                />
                {formik.touched.buildingCondition && formik.errors.buildingCondition && (
                    <p className="text-red-500 text-sm">{formik.errors.buildingCondition}</p>
                )}
            </div>

            <div>
                <label className="block text-gray-700">وصف التشطيب</label>
                <input
                    placeholder="وصف التشطيب"
                    type="text"
                    name="finishingDescription"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.finishingDescription}
                    className="w-full border border-[#D1E8E2] rounded p-2"
                    disabled={mode !== "reviewer"}
                />
                {formik.touched.finishingDescription && formik.errors.finishingDescription && (
                    <p className="text-red-500 text-sm">{formik.errors.finishingDescription}</p>
                )}
            </div>

            <div>
                <label className="block text-gray-700">عدد الادوار</label>
                <input
                    placeholder="عدد الأدوار"
                    type="text"
                    name="floorsCount"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.floorsCount}
                    className="w-full border border-[#D1E8E2] rounded p-2"
                    disabled={mode !== "reviewer"}
                />
                {formik.touched.floorsCount && formik.errors.floorsCount && (
                    <p className="text-red-500 text-sm">{formik.errors.floorsCount}</p>
                )}
            </div>

            <div>
                <label className="block text-gray-700">تقييم الأرض</label>
                <input
                    placeholder="تقييم الأرض"
                    type="text"
                    name="landEvaluation"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.landEvaluation}
                    className="w-full border border-[#D1E8E2] rounded p-2"
                    disabled={mode !== "reviewer"}
                />
                {formik.touched.landEvaluation && formik.errors.landEvaluation && (
                    <p className="text-red-500 text-sm">{formik.errors.landEvaluation}</p>
                )}
            </div>
            <div>
                <label className="block text-gray-700">تقييم المبنى</label>
                <input
                    placeholder="تقييم المبنى"
                    type="text"
                    name="buildingEvaluation"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.buildingEvaluation}
                    className="w-full border border-[#D1E8E2] rounded p-2"
                    disabled={mode !== "reviewer"}
                />
                {formik.touched.buildingEvaluation && formik.errors.buildingEvaluation && (
                    <p className="text-red-500 text-sm">{formik.errors.buildingEvaluation}</p>
                )}
            </div>
            <div className="flex justify-between">
                <div className="w-full">
                    <label className="block text-gray-700">إجمالي تكلفة العقار</label>
                    <input
                        placeholder="إجمالي تكلفة العقار"
                        type="text"
                        name="totalPropertyCost"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.totalPropertyCost}
                        className="w-full border border-[#D1E8E2] rounded p-2"
                        disabled={mode !== "reviewer"}
                    />
                    {formik.touched.totalPropertyCost && formik.errors.totalPropertyCost && (
                        <p className="text-red-500 text-sm">{formik.errors.totalPropertyCost}</p>
                    )}
                </div>

                <div className="w-full ms-2">
                    <label className="block text-gray-700">القيمة السوقية</label>
                    <input
                        placeholder="القيمة السوقية"
                        type="text"
                        name="marketValue"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.marketValue}
                        className="w-full border border-[#D1E8E2] rounded p-2"
                        disabled={mode !== "reviewer"}
                    />
                    {formik.touched.marketValue && formik.errors.marketValue && (
                        <p className="text-red-500 text-sm">{formik.errors.marketValue}</p>
                    )}
                </div>
            </div>
            <div>
                <label className="block text-gray-700">مقارنات العقار</label>
                <input
                    placeholder="مقارانات العقار"
                    type="text"
                    name="propertyComparisons"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.propertyComparisons}
                    className="w-full border border-[#D1E8E2] rounded p-2"
                    disabled={mode !== "reviewer"}
                />
                {formik.touched.propertyComparisons && formik.errors.propertyComparisons && (
                    <p className="text-red-500 text-sm">{formik.errors.propertyComparisons}</p>
                )}
            </div>

            <div>
                <label className="block text-gray-700">الإفصاح عن النزاعات</label>
                <input
                    placeholder="الإفصاح عن النزاعات"
                    type="text"
                    name="conflictDisclosure"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.conflictDisclosure}
                    className="w-full border border-[#D1E8E2] rounded p-2"
                    disabled={mode !== "reviewer"}
                />
                {formik.touched.conflictDisclosure && formik.errors.conflictDisclosure && (
                    <p className="text-red-500 text-sm">{formik.errors.conflictDisclosure}</p>
                )}
            </div>

            <div>
                <label className="block text-gray-700">القياس</label>
                <input
                    placeholder="القياس"
                    type="text"
                    name="measurement"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.measurement}
                    className="w-full border border-[#D1E8E2] rounded p-2"
                    disabled={mode !== "reviewer"}
                />
                {formik.touched.measurement && formik.errors.measurement && (
                    <p className="text-red-500 text-sm">{formik.errors.measurement}</p>
                )}
            </div>

            <div className="grid grid-cols-1 gap-4">
                {/* الفحص */}
                <div>
                    <label className="block text-gray-700">المعاينة </label>
                    <input
                        placeholder="المعاينة"
                        type="text"
                        name="inspection"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.inspection}
                        className="border border-[#D1E8E2] rounded p-2 w-full"
                        disabled={mode !== "reviewer"}

                    />
                    {formik.touched.inspection && formik.errors.inspection && (
                        <p className="text-red-500 text-sm">{formik.errors.inspection}</p>
                    )}
                </div>

                {/* الملاحظات العامة */}
                <div>
                    <label className="block text-gray-700">ملاحظات المعاينة</label>
                    <textarea
                        placeholder="ملاحظات المعاينة "
                        name="generalNotes"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.generalNotes}
                        className="border border-[#D1E8E2] rounded p-2 w-full h-18"
                        disabled={mode !== "reviewer"}

                    />
                    {formik.touched.generalNotes && formik.errors.generalNotes && (
                        <p className="text-red-500 text-sm">{formik.errors.generalNotes}</p>
                    )}
                </div>
            </div>

            {mode === "reviewer" && (
                <div>
                    <label>رفع صور العقار</label>
                    <input
                        placeholder="رفع"
                        type="file"
                        name="propertyImages"
                        onChange={(event) => {
                            const file = event.target.files ? event.target.files[0] : null;
                            setFile(file);
                            formik.setFieldValue("propertyImages", file);
                        }}


                        onBlur={() => formik.setFieldTouched("propertyImages")}
                        className="w-full border border-[#D1E8E2] rounded p-2 bg-[#C29062]"
                    />
                </div>)}

            {mode === "drawer" && (
                <div className="flex justify-between">

                    <ButtonCard label="قبول" type="button" baseStyle="w-1/2 bg-[#396345] text-white py-2 rounded" onClick={handleAccept} />
                    <ButtonCard label="رفض" type="button" baseStyle="w-1/2 bg-[#ad5353] text-white py-2 rounded" onClick={handleDecline} />

                </div>
            )}

            {mode === "reviewer" && (<ButtonCard
            type="button"
            label="إرسال"
                onClick={() => formik.handleSubmit()} />)}
        </form>
    );
};

export default ReportForm;
