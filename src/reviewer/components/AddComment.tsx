
import sendIcon from '../../assets/reviewer/sendIcon.png'
import '../styles/style.css'
import '../styles/AddComment.css'
import { useRef, useState } from "react"



function AddComment() {

    
    const [addComment, setAddComment] = useState<any[]>([]);
    
    const inputRef = useRef<HTMLInputElement>(null);

    const handelAddComment = () => {
        const textComment = inputRef.current?.value;
        if (textComment) {
            const newComment = { textComment };
            setAddComment([...addComment, newComment]);

            inputRef.current.value = "";  
        } else {
            alert("please add comment !!")
        }
        
    }
    return (
        <>
            {/* container */}
            <div className="w-full h-screen rounded-md main-shadow  m-10 max-sm:h-auto max-sm:relative">

                {/* comments-content */}
                <div className="h-5/6">
                    {addComment.length > 0 ?
                        addComment.map(({ textComment }, index) => {
                            return (
                                <div key={index} className="comment p-4 m-4"> { textComment}</div>
                        )})
                        :<div className="comment p-4 m-4">لايوجد اي تعليقات </div>}

                </div>
                {/*== comments-content ==*/}


                {/* add-comment */}
                <div className="w-full h-1/6 add-comment-container p-4 gap-4 flex flex-row-reverse max-sm:absolute max-sm:inset-x-0 max-sm:bottom-0  ">
                        <div className="w-15/16 rounded-md pl-4">
                            <input type="text" ref={inputRef} placeholder="كتابة تعليق ... " className="bg-white p-4 w-full rounded-md text-teal-700 " />
                        </div>
                        <button className="cursor-pointer w-1/16 max-sm:w-2/9" onClick={handelAddComment}> <img src={sendIcon} className="bg-color rounded-full  p-3 w-full "/> </button>
                </div>
                 {/* add-comment */}
                

            </div>
            {/*== container ==*/}
        </>
       
    
  )
}

export default AddComment
