
import PaidProjectsItems from "../reviewer/components/PaidProjectsItems";
function PaidProjects() {

  interface BuildingInfo{
    buildingImage:string,
    buildingTitle: string,
    buildingPrice: string,
    buildingDescription:string,
  }

  const buildingsAvailable: (BuildingInfo)[] = [
    {
      buildingImage: "/src/assets/reviewer/building1.png",
      buildingTitle: "عقار في شارع السند ، حي النرجس ، الرياض ، منطقة الرياض",
      buildingPrice: "85,000 ريال سعودي",
      buildingDescription:
        "تكون من صالة ومجلس وثلاث غرف نوم ومطبخ و ثلاث دورات مياه وتراس و مطل على الشارع  بمساحة 138م..........."
    },
     {
      buildingImage: "/src/assets/reviewer/building2.png",
      buildingTitle: "عقار في شارع السند ، حي النرجس ، الرياض ، منطقة الرياض",
      buildingPrice: "85,000 ريال سعودي",
      buildingDescription:
        "تكون من صالة ومجلس وثلاث غرف نوم ومطبخ و ثلاث دورات مياه وتراس و مطل على الشارع  بمساحة 138م..........."
    },
      {
      buildingImage: "/src/assets/reviewer/building3.png",
      buildingTitle: "عقار في شارع السند ، حي النرجس ، الرياض ، منطقة الرياض",
      buildingPrice: "85,000 ريال سعودي",
      buildingDescription:
        "تكون من صالة ومجلس وثلاث غرف نوم ومطبخ و ثلاث دورات مياه وتراس و مطل على الشارع  بمساحة 138م..........."
    },
       {
      buildingImage: "/src/assets/reviewer/building4.png",
      buildingTitle: "عقار في شارع السند ، حي النرجس ، الرياض ، منطقة الرياض",
      buildingPrice: "85,000 ريال سعودي",
      buildingDescription:
        "تكون من صالة ومجلس وثلاث غرف نوم ومطبخ و ثلاث دورات مياه وتراس و مطل على الشارع  بمساحة 138م..........."
    },
        {
      buildingImage: "/src/assets/reviewer/building5.png",
      buildingTitle: "عقار في شارع السند ، حي النرجس ، الرياض ، منطقة الرياض",
      buildingPrice: "85,000 ريال سعودي",
      buildingDescription:
        "تكون من صالة ومجلس وثلاث غرف نوم ومطبخ و ثلاث دورات مياه وتراس و مطل على الشارع  بمساحة 138م..........."
    },
         {
      buildingImage: "/src/assets/reviewer/building6.png",
      buildingTitle: "عقار في شارع السند ، حي النرجس ، الرياض ، منطقة الرياض",
      buildingPrice: "85,000 ريال سعودي",
      buildingDescription:
        "تكون من صالة ومجلس وثلاث غرف نوم ومطبخ و ثلاث دورات مياه وتراس و مطل على الشارع  بمساحة 138م..........."
    },
         
  ];

  return (
    <div
      className="w-full grid grid-row grid-cols-3 gap-x-8 gap-y-18 mt-18 mr-8 ml-8 mb-18 pr-2 pl-2 max-sm:grid-cols-1 max-sm:gap-y-8 max-md:grid-cols-2 max-md:gap-y-10 max-lg:grid-cols-2 max-lg:gap-y-14"
    >
      {buildingsAvailable.map((build, index) => (
        <PaidProjectsItems
            key={index}
            buildingImage={build.buildingImage}
            buildingTitle={build.buildingTitle}
            buildingPrice={build.buildingPrice}
            buildingDescription={build.buildingDescription}
          />
      )  
      )} 
    </div>
  )
}

export default PaidProjects
