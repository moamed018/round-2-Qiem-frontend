import React from 'react'
import '../styles/ShowRequest.css'

function ShowRequest() {
  return (
    <div dir="rtl" className=" card-container ">
      {/* card-content */}
      <div className='card-content px-5 py-8 mt-16 mr-8 rounded-sm '>
        <div className=' flex'>
        
        {/* image */}
        <div className='ml-6'>
          <img src='/src/assets/samsungcompany.jpeg' className='rounded-sm drop-shadow-lg'/>
        </div>
        {/*== image ==*/}
         
        {/* company */}
        <div className='c-company w-5/6 '>
            <h5 className='mb-2'>شركة الاحمدية</h5>
          <p className=''>اهلاً بك نحن شركة الاحمدية للعقارات يمكنك الأطلاع علي ملف السيرة الذاتية الخاص بنا .
              نري ان هذا العقار  يقع في مكان جيد ولكن عدد الغرف قليل بالنسبة للمساحه ، سنترك لك عرضنا.
            </p>
        </div>
         {/*== company ==*/}
        </div>

        
        {/* Buttons Section */}
        <div className='flex pt-6 button-section gap-x-6'>
          <button className='accept-request-btn rounded-md'>قبول</button>
          <button className='refuse-request-btn rounded-md'>رفض</button>
          <button className='watch-details-btn rounded-md '>مشاهده التفاصيل</button>

        </div>
        
         {/*== Buttons Section ==*/}

      </div>
      {/*== card-content ==*/}
    </div>
  )
}

export default ShowRequest



