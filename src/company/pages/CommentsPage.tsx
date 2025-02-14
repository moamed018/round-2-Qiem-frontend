import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Reviews from "../components/Comments";
const CommentsPage: React.FC = () => {
    const { id } = useParams();

    const [idNumber, setIdNumber] = useState<string>("");

    useEffect(() => {
        setIdNumber(id + "");
    }, [id]);

    return (
        <div className="py-10 lg:px-6 px-4">
            <h2 className="text-2xl font-semibold mb-4">التعليقات على المشروع</h2>
            <Reviews projectId={idNumber} />
        </div>
    );
};

export default CommentsPage;
