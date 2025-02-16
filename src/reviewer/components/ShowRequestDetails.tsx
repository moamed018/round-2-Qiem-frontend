// import { useState } from 'react'
import '../styles/ShowRequestDetails.css'
import '../styles/style.css'



interface RequestDetailsprops{
    onClose:()=>void
}

const ShowRequestDetails: React.FC<RequestDetailsprops> = ({ onClose }) => {
    
    return (
        
                <>
                    {/* requestDetailscontainer */}
          <div className='requestDetailscontainer' >
              
              {/* overlay */}
              <div className='overlay' onClick={onClose}> 
                  
                   
                  {/* requested-details-content */}
                    <div
                        className='requested-details-content mt-10 w-2/6 text-center bg-white rounded-md max-sm:w-4/6 max-md:w-3/6 max-lg:3/6'
                        // to prevent onClose to run when click the content
                        onClick={(e) => e.stopPropagation()}
                    >
                      
                  {/* building-image */}
                  <div className=' p-2  '>
                      <img src='/src/assets/reviewer/building1.png' className='building-image'/>
                  </div>
                  {/* building-image */}

                  {/* building-details */}
                  <div className='building-details main-font text-right p-4'>
                      
                          {/* builing-desc */}
                          <div className='mb-4'>
                              <p className='builing-desc common-style main-font font-bold text-wrap'>
                          عقار يتكون من صالة ومجلس وثلاث غرف نوم ومطبخ
وثلاث دورات مياه وتراس  مطل على الشارع  بمساحة 138م.
                      </p>
                      <p className='builing-more-desc common-style main-font font-medium text-wrap'>
                          تفاصيل إضافية هتتكتب هنا.
                      </p>
                          </div>
                          {/*== builing-desc ==*/}

                          <div className='mb-2'>
                              <span className='header main-font main-color font-bold'>النوع</span>
                              <p className='header main-font font-medium'> عقار سكني</p>
                              
                          </div>

                         
                          <div  className='mb-2'>
                              <span className='header main-font main-color font-bold'>المساحة</span>
                              <p className='header main-font font-medium'>  150</p>
                          </div>
                          
                          
                          <div  className='mb-2'>
                              <span className='header main-font main-color font-bold'>المدينة</span>
                              <p className='header main-font font-medium'>  الرياض</p>
                          </div>
                          
                          <div  className='mb-2'>
                              <span className='header main-font main-color font-bold'>المنطقة</span>
                              <p className='header main-font font-medium'>  حي النرجس</p>
                          </div>
                          
                          <div  className='mb-2'>
                              <span className='header main-font main-color font-bold'>شركة التقييم</span>
                              <p className='header main-font font-medium'>  شركة الاحمدية</p>
                          </div>
                          
                          <div  className='mb-2'>
                              <span className='header main-font main-color font-bold'>البريد الالكتروني</span>
                              <p className='header main-font font-medium text-wrap'>  alahmedy55@yahoo.com</p>
                          </div>
                          
                          <div  className='mb-2'>
                              <span className='header main-font main-color font-bold'>تكلفة التقييم</span>
                              <p className='header main-font font-medium'>  12,000ريال سعودي</p>
                          </div>      
                  </div>
                      {/*== building-details ==*/}
                      

                    {/* Buttons Section */}
                    <div className='flex  button-section  justify-around mb-8 mt-2'>
                            <button
                                className='accept-request-btn rounded-md cursor-pointer w-2/5 '
                            >
                                قبول
                            </button>

                            <button
                                className='refuse-request-btn rounded-md cursor-pointer w-2/5'
                            >
                                رفض
                            </button>

                    </div>
                    {/*== Buttons Section ==*/}
         
                  
                  
              </div>
              {/*== requested-details-content ==*/}
                  
              </div>
              {/*== overlay ==*/}


              
              
          </div>
            {/*== requestDetailscontainer ==*/}     
      </>
  )
    
}



export default ShowRequestDetails
