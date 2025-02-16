
import '../styles/ShowRequest.css'
import samsungcompany from '../../assets/reviewer/samsungcompany.png'
import { useState } from 'react'
import ShowRequestDetails from './ShowRequestDetails';
import AcceptRequest from './AcceptRequest';
import RefuseRequest from './RefuseRequest';


const ShowRequest: React.FC = () => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [accept, setAccept] = useState<boolean>(false);
  const [refuse, setRefuse] = useState<boolean>(false);

    return (
    <>
      
      {/* <ShowRequestDetails/> */}
      <div dir="rtl" className="w-full ">
      {/* card-content */}
      <div className='card-content px-5 py-8 mt-16 mr-8 rounded-md w-5/6'>
        
        {/* content-section */}
        <div className=' flex mb-8 max-sm:mb-48  max-md:mb-16 max-lg:mb-12 '>
        {/* image */}
        <div className='ml-8 w-1/6'>
          <img src={samsungcompany} className='rounded-sm h-full '/>
        </div>
        {/*== image ==*/}
         
        {/* definition-section */}
        <div className='definition-section w-5/6'>
            <h5 className='mb-2'>شركة الاحمدية</h5>
          <p className='text-wrap'>اهلاً بك نحن شركة الاحمدية للعقارات يمكنك الأطلاع علي ملف السيرة الذاتية الخاص بنا .
              نري ان هذا العقار  يقع في مكان جيد ولكن عدد الغرف قليل بالنسبة للمساحه ، سنترك لك عرضنا.
            </p>
        </div>
         {/*== definition-section ==*/}
        </div>
        {/*== content-section ==*/}

        
        {/* Buttons Section */}
        <div className='flex  button-section gap-x-6'>
              <button
                onClick={()=>setAccept(true)}
                className='accept-request-btn rounded-md cursor-pointer '
              >
                قبول
              </button>

              <button
                onClick={()=>setRefuse(true)}
                className='refuse-request-btn rounded-md cursor-pointer'
              >
                رفض
              </button>

          <button
             onClick={()=>setShowDetails(true)}   
             
                className='watch-details-btn rounded-md cursor-pointer '
              >
                مشاهده التفاصيل
              </button>
        </div>
         {/*== Buttons Section ==*/}

      </div>
      {/*== card-content ==*/}
      
           {/*عرض ال showRequsetDetails over the show request  */}
          {showDetails && <ShowRequestDetails onClose={() => setShowDetails(false)} />}
          
          {/* show AcceptRequest over the showRequest */}
          {accept && <AcceptRequest onClose={() => setAccept(false)} />}
          
          {/* show RefuseRequest over the showRequest */}
          {refuse && <RefuseRequest onClose={()=>setRefuse(false)}/> }

        </div>
        
        
       
    </>
    
    
  )

}


export default ShowRequest



