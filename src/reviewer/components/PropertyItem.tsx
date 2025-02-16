import '../styles/style.css'
import '../styles/PropertyItem.css'
import chatIcon from '../../assets/reviewer/chatIcon.png'
import messageIcon from '../../assets/reviewer/mesageIcon.png'
import whatsupIcon from '../../assets/reviewer/whatsupIcon.png'
import telephoneIcon from '../../assets/reviewer/telephoneIcon.png'
import { Navigate, useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'


interface BuildingInfo{
    buildingImage: string,
    buildName:string,
    buildingTitle: string,
    companyName: string,
}

const PropertyItem: React.FC<BuildingInfo> = ({ 
    buildingImage,
    buildName,
    buildingTitle,
     companyName
    
}) => {
    const navigate = useNavigate();
    const navigate2 = useNavigate();
    // const { contactId } = useParams();
    
        return (
        <>
            {/* container-items */} 
            <div dir="" className="container-property-items w-full rounded-sm  ">
                {/* image-content */}

                <div className='p-1  w-full h-56'>
                    <img src={buildingImage} className='w-full h-full'/>

<!--                 <div className='p-1 relative w-full h-56'>
                    <img src={buildingImage} className='w-full h-full' alt={buildingTitle}/>
                    <p className='paid w-20 p-2 text-center rounded-full absolute top-4 left-4 '>مدفوع</p>

                </div> -->
                {/*== image ==*/}

                    {/* content-report */}
                    <div className='flex pt-1'>
                        {/* building-info */}
                        <div className='p-2 w-4/6'>
                            <p className='main-font font-bold text-[13px]'>{buildName }</p>
                            <p className="building-title main-font font-[400] text-[13px] ">{buildingTitle}</p>
                            <p className=''>
                                <span className='main-font font-bold text-[10px]'>اسم الشركة:</span> <span className='main-font main-color font-bold text-[12px]'>{companyName}</span>
                            </p>
                    </div>
                    {/*== building-info ==*/}
                    
                    {/* applay report button */}
                        <div className='w-2/6 '>
                            <button
                                onClick={()=>navigate2("/reviewer/report-reviewer")}
                                className='applayreport-btn main-font font-medium text-[10px] text-white p-2 rounded-md cursor-pointer'>
                                تقديم تقرير المعاينة
                            </button>
                    </div>
                    {/* applay report button */}
                    </div>
                    {/* content-report */}

                    <span className='main-font font-medium text-[15px] p-2'>بيانات الاتصال </span>

                    {/* contactIcon-section */}
                    <div className=''>
                        <ul className='grid grid-rows grid-cols-4 w-full gap-4 p-4 '>
                            <li className='contact-icon  rounded-lg p-2'>
                               <button className='cursor-pointer' onClick={()=>navigate("/reviewer/add-comment")}><img src={chatIcon}/></button>
                            </li>
                            <li className='contact-icon  rounded-lg p-2'>
                                <button className='cursor-pointer'><img src={messageIcon} /></button>
                            </li>
                            <li className='contact-icon  rounded-lg p-2'>
                                <button className='cursor-pointer'><img src={whatsupIcon} /></button>
                            </li>
                            <li className='contact-icon  rounded-lg p-2'>
                                <button className='cursor-pointer'><img src={telephoneIcon} /></button>
                            </li>
                        </ul>
                    </div>
                    {/*== contactIcon-section ==*/}

                    {/* show-details button */}
                        <div className='w-full p-4'>
                            <button className='applayreport-btn main-font font-medium text-[14px] text-white p-3 rounded-md w-full cursor-pointer '>  مشاهدة التفاصيل </button>
                    </div>
                    {/* show-details button */}
                    



            </div>
            {/*== container-items ==*/}
        
      </>
     
  )
}

export default PropertyItem
