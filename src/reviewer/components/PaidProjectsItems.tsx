
import '../styles/PaidProjectsItems.css'

interface BuildingInfo{
    buildingImage:string,
    buildingTitle: string,
    buildingPrice: string,
    buildingDescription:string,
  }
const PaidProjectsItems: React.FC<BuildingInfo> = ({ 
    buildingImage,
    buildingTitle,
    buildingPrice,
    buildingDescription,
}) => {
        return (
        <>
            {/* container-items */}
            <div dir="" className="container-items w-full rounded-sm  ">
                {/* image-content */}
                <div className='p-1 relative w-full h-56'>
                    <img src={buildingImage} className='w-full h-full'/>
                    <p className='paid w-20 p-2 text-center rounded-full absolute top-4 left-4 '>مدفوع</p>
                </div>
                {/*== image ==*/}

                {/* building-info */}
                <div className='p-2 '>
                    <p className="building-title ">
                        {buildingTitle}
                    </p>
                    <p className='building-price'>
                        {buildingPrice} 
                    </p>
                    <p className='building-description pb-2'>
                        {buildingDescription}
                    </p>

                </div>
                {/*== building-info ==*/}

            </div>
            {/*== container-items ==*/}
        
      </>
     
  )
}

export default PaidProjectsItems
