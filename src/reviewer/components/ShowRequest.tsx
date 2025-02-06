import React from 'react'
import '../styles/ShowRequest.css'

function ShowRequest() {
  return (
    
    <div dir="rtl" className=" card-container">
      {/* card-content */}
      <div className='card-content px-5 py-8 mt-16 mr-8 rounded-md w-5/6'>
        
        {/* content-section */}
        <div className=' flex mb-2'>
        {/* image */}
        <div className='ml-8 w-1/5 '>
          <img src='/src/assets/samsungcompany.jpeg' className='rounded-sm drop-shadow-lg h-full'/>
        </div>
        {/*== image ==*/}
         
        {/* definition-section */}
        <div className='definition-section w-4/5'>
            <h5 className='mb-2'>شركة الاحمدية</h5>
          <p className='text-wrap'>اهلاً بك نحن شركة الاحمدية للعقارات يمكنك الأطلاع علي ملف السيرة الذاتية الخاص بنا .
              نري ان هذا العقار  يقع في مكان جيد ولكن عدد الغرف قليل بالنسبة للمساحه ، سنترك لك عرضنا.
            </p>
        </div>
         {/*== definition-section ==*/}
        </div>
        {/*== content-section ==*/}

        
        {/* Buttons Section */}
        <div className='flex pt-6 button-section gap-x-6'>
          <button className='accept-request-btn rounded-md cursor-pointer '>قبول</button>
          <button className='refuse-request-btn rounded-md cursor-pointer'>رفض</button>
          <button className='watch-details-btn rounded-md cursor-pointer '>مشاهده التفاصيل</button>

        </div>
         {/*== Buttons Section ==*/}

      </div>
      {/*== card-content ==*/}
    </div>
  )
}

export default ShowRequest



