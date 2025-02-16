import '../styles/style.css'
import '../styles/ReportReviewer.css'
import RadioButton from '../components/RadioButton'
import {  useState } from 'react'
import CheckBox from '../components/CheckBox'
import { MdCloudUpload } from "react-icons/md";


const ReportReviewer: React.FC = () => {
    const [selectedInfrastructure, setSelectedInfrastructure] = useState<string>("option1");
    // const [isCheckedServices, setIsCheckedServices] = useState<boolean>(false);
    const [isSelectServices, setIsSelectedServices] = useState<string[]>([]);
    const [selectedReadyToUse,setSelectedReadyToUse] =useState<string>("ready");


    // handleCheckboxChangeServices
    const handleCheckboxChangeServices = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    setIsSelectedServices((prevSelectedValues) => {
      if (checked) {
        return [...prevSelectedValues, value]; // إضافة القيمة إذا تم تحديدها
      } else {
        return prevSelectedValues.filter((item) => item !== value); // إزالة القيمة إذا تم إلغاء تحديدها
      }
    });
        console.log(isSelectServices)
  };
   

      return (
      <>
          {/* container */}
          <div className="w-full">
              
              {/* report-content */}
              <div className=" report-content w-4/6 main-shadow rounded-lg m-16 p-22">
                  
                  {/* input-content */}
                  <div className='mb-6'>                      
                      <p className='main-font font-medium text-[22px] '>كود العقار</p>
                      <input type='text' className='w-5/6 p-2  rounded-md'/>               
                  </div>
                  {/*== input-content ==*/}

                  {/* input-content */}
                  <div className='mb-6'>               
                      <p className='main-font font-medium text-[22px] '> تاريخ التقييم</p>
                      <input type='text' className='w-5/6 p-2  rounded-md'/>    
                  </div>
                  {/*== input-content ==*/}

                  {/* input-content */}
                  <div className='mb-6'>
                      <p className='main-font font-medium text-[22px] '> وصف عام للعقار</p>
                      <input type='text' className='w-5/6 p-2  rounded-md'/>
                  </div>
                  {/*== input-content ==*/}

                  {/* input-content */}
                  <div className='mb-6'>
                      <p className='main-font font-medium text-[22px] '> وصف موقع العقار</p>
                      <input type='text' className='w-5/6 p-2  rounded-md'/>
                  </div>
                  {/*== input-content ==*/}

                  {/* input-content */}
                  <div className='mb-6'>
                      <p className='main-font font-medium text-[22px] '>   رقم الصك</p>
                      <input type='text' className='w-5/6 p-2  rounded-md'/> 
                  </div>
                  {/*== input-content ==*/}

                  {/* input-content */}
                  <div className='mb-6'>
                      <p className='main-font font-medium text-[22px] '> تاريخة</p>
                      <input type='text' className='w-5/6 p-2  rounded-md'/> 
                  </div>
                  {/*== input-content ==*/}

                  {/* input-content */}
                  <div className='mb-6'>
                      <p className='main-font font-medium text-[22px] '> نوع العقار</p>
                      <input type='text' className='w-5/6 p-2  rounded-md'/>
                  </div>
                  {/*== input-content ==*/}

                  {/* input-content */}
                  <div className='mb-6'>
                          <p className='main-font font-medium text-[22px] '>  البنية التحتية </p>
                          {/* radio-style */}
                      <div className='flex flex-row gap-8 mb-4'>
                        
                                  <RadioButton
                                      id='option1'
                                      name='Infrastructure'
                                      value='option1'
                                      checked={selectedInfrastructure==="option1"}
                                      label='نعم'
                                      onChange={(e)=>setSelectedInfrastructure(e.target.value)}

                                  />   
                                                  
                              <RadioButton
                                      id='option2'
                                      name='Infrastructure'
                                      value='option2'
                                      checked={selectedInfrastructure==="option2"}
                                      label='لا'
                                      onChange={(e)=>setSelectedInfrastructure(e.target.value)}

                                  /> 
                       
                          </div>
                           {/*== radio-style ==*/}
                      
                  </div>
                      {/*== input-content ==*/}
                      

                        {/* input-content */}
                  <div className='mb-6'>
                          <p className='main-font font-medium text-[22px] '>   الخدمات </p>
                          {/* checkbox-style */}
                      <div className='flex flex-row gap-8 mb-4'>
                              <CheckBox
                                  id='checkbox-option1'
                                  name='checkbox-option1'
                                  value='checkedbox-option1'
                                  checked={isSelectServices.includes("option1")}
                                  onChange={handleCheckboxChangeServices}
                                  label='مياة'
                              />
                              <CheckBox
                                  id='checkbox-option2'
                                  name='checkbox-option2'
                                  value='checkedbox-option2'
                                  checked={isSelectServices.includes("option2")}
                                 onChange={handleCheckboxChangeServices}
                                  label='هاتف '
                              />
                              <CheckBox
                                  id='checkbox-option3'
                                  name='checkbox-option3'
                                  value='checkedbox-option3'
                                  checked={isSelectServices.includes("option3")}
                                 onChange={handleCheckboxChangeServices}
                                  label='كهرباء'
                              />
                              <CheckBox
                                  id='checkbox-option4'
                                  name='checkbox-option4'
                                  value='checkedbox-option4'                               
                                  checked={isSelectServices.includes("option4")}
                                 onChange={handleCheckboxChangeServices}
                                  label='صرف'
                              />
                          
                          </div>
                          {/*== checkbox-style ==*/}
                      
                  </div>
                      {/*== input-content ==*/}
                      
                      {/* input-content */}
                  <div className='mb-6'>               
                      <p className='main-font font-medium text-[22px] '>  عمر العقار</p>
                      <input type='text' className='w-5/6 p-2  rounded-md'/>    
                  </div>
                      {/*== input-content ==*/}
                      
                      {/* input-content */}
                  <div className='mb-6'>
                          <p className='main-font font-medium text-[22px] '>   جاهز للأستخدام </p>
                          {/* radio-style */}
                      <div className='flex flex-row gap-8 mb-4'>
                        
                                  <RadioButton
                                      id='ready'
                                      name='isReadytoUse'
                                      value='ready'
                                      checked={selectedReadyToUse==="ready"}
                                      label='جاهز '
                                      onChange={(e)=>setSelectedReadyToUse(e.target.value)}

                                  />   
                                                  
                              <RadioButton
                                      id='underconstruction'
                                      name='isReadytoUse'
                                      value='underconstruction'
                                      checked={selectedReadyToUse==="underconstruction"}
                                      label='تحت الأنشاء '
                                      onChange={(e)=>setSelectedReadyToUse(e.target.value)}

                              />

                               <RadioButton
                                      id='notReady'
                                      name='isReadytoUse'
                                      value='notReady'
                                      checked={selectedReadyToUse==="notReady"}
                                      label='تحت الأنشاء '
                                      onChange={(e)=>setSelectedReadyToUse(e.target.value)}

                              />
                              
                       
                          </div>
                           {/*== radio-style ==*/}
                      
                  </div>
                      {/*== input-content ==*/}

                {/* input-content */}
                  <div className='mb-6'>               
                      <p className='main-font font-medium text-[22px] '>  رقم</p>
                      <input type='text' className='w-5/6 p-2  rounded-md'/>    
                  </div>
                      {/*== input-content ==*/} 

                   {/* input-content */}
                  <div className='mb-6'>               
                      <p className='main-font font-medium text-[22px] '>  رقم القطعة</p>
                      <input type='text' className='w-5/6 p-2  rounded-md'/>    
                  </div>
                      {/*== input-content ==*/} 

                   {/* input-content */}
                  <div className='mb-6'>               
                      <p className='main-font font-medium text-[22px] '>   المصدر</p>
                      <input type='text' className='w-5/6 p-2  rounded-md'/>    
                  </div>
                      {/*== input-content ==*/} 

                   {/* input-content */}
                  <div className='mb-6'>               
                      <p className='main-font font-medium text-[22px] '>   نوع القيد</p>
                      <input type='text' className='w-5/6 p-2  rounded-md'/>    
                  </div>
                      {/*== input-content ==*/}    

                  {/* input-content */}
                  <div className='mb-6'>               
                      <p className='main-font font-medium text-[22px] '>    المسافة</p>
                      <input type='text' className='w-5/6 p-2  rounded-md'/>    
                  </div>
                      {/*== input-content ==*/} 

                  {/* input-content */}
                  <div className='mb-6'>               
                      <p className='main-font font-medium text-[22px] '>    حدود العقار</p>
                          <div className='grid grid-cols-2 gap-10'>
                              <div>
                                <p className='main-color main-font font-medium text-[22px] '>    شمال</p>
                                <input type='text' className='  p-2  rounded-md' />
                              </div>

                              <div>
                                <p className='main-color main-font font-medium text-[22px] '>    بطول</p>
                                <input type='text' className='  p-2  rounded-md' />
                              </div>

                              <div>
                                <p className='main-color main-font font-medium text-[22px] '>    جنوب</p>
                                <input type='text' className='  p-2  rounded-md' />
                              </div>

                              <div>
                                <p className='main-color main-font font-medium text-[22px] '>    بطول</p>
                                <input type='text' className='  p-2  rounded-md' />
                              </div>

                              <div>
                                <p className='main-color main-font font-medium text-[22px] '>    شرق</p>
                                <input type='text' className=' p-2  rounded-md' />
                              </div>

                              <div>
                                <p className='main-color main-font font-medium text-[22px] '>    بطول</p>
                                <input type='text' className='  p-2  rounded-md' />
                              </div>

                              <div>
                                <p className='main-color main-font font-medium text-[22px] '>    غرب</p>
                                <input type='text' className='  p-2  rounded-md' />
                              </div>

                              <div>
                                <p className='main-color main-font font-medium text-[22px] '>    بطول</p>
                                <input type='text' className='  p-2  rounded-md' />
                              </div>

                              
                          </div>    
                  </div>
                      {/*== input-content ==*/}

                  {/* input-content */}
                  <div className='mb-6'>               
                      <p className='main-font font-medium text-[22px] '>   داخل النطاق</p>
                      <input type='text' className='w-5/6 p-2  rounded-md'/>    
                  </div>
                      {/*== input-content ==*/}
                      
                       {/* input-content */}
                  <div className='mb-6'>               
                      <p className='main-font font-medium text-[22px] '>    المنسوب</p>
                      <input type='text' className='w-5/6 p-2  rounded-md'/>    
                  </div>
                      {/*== input-content ==*/}

                        {/* input-content */}
                  <div className='mb-6'>               
                      <p className='main-font font-medium text-[22px] '>    حالة المبني</p>
                      <input type='text' className='w-5/6 p-2  rounded-md'/>    
                  </div>
                      {/*== input-content ==*/}

                       {/* input-content */}
                  <div className='mb-6'>               
                      <p className='main-font font-medium text-[22px] '>     وصف عام التشطيب</p>
                      <input type='text' className='w-5/6 p-2  rounded-md'/>    
                  </div>
                      {/*== input-content ==*/}

                        {/* input-content */}
                  <div className='mb-6'>               
                      <p className='main-font font-medium text-[22px] '>     عدد الأدوار</p>
                      <input type='text' className='w-5/6 p-2  rounded-md'/>    
                  </div>
                      {/*== input-content ==*/}

                       {/* input-content */}
                  <div className='mb-6'>               
                      <p className='main-font font-medium text-[22px] '> تقييم الارض</p>
                      <input type='text' className='w-5/6 p-2  rounded-md'/>    
                  </div>
                      {/*== input-content ==*/}

                        {/* input-content */}
                  <div className='mb-6'>               
                      <p className='main-font font-medium text-[22px] '>  تقييم المباني</p>
                      <input type='text' className='w-5/6 p-2  rounded-md'/>    
                  </div>
                      {/*== input-content ==*/}

                      {/* input-content */}
                  <div className='mb-6'>               
                          <div className='grid grid-rows-1 grid-cols-2 justify-between'>
                              <div>
                                <p className='main-font font-medium text-[22px] '>   اجمالي تكاليف العقار</p>
                               <input type='text' className=' p-2  rounded-md'/>  
                              </div>

                              <div>
                                <p className='main-font font-medium text-[22px] '>   القيمة التسويقية</p>
                               <input type='text' className=' p-2  rounded-md'/>  
                              </div>
                      </div>
                  </div>
                      {/*== input-content ==*/}

                       {/* input-content */}
                  <div className='mb-6'>               
                      <p className='main-font font-medium text-[22px] '>   مقارانات العقار</p>
                      <input type='text' className='w-5/6 p-2  rounded-md'/>    
                  </div>
                      {/*== input-content ==*/}

                       {/* input-content */}
                  <div className='mb-6'>               
                      <p className='main-font font-medium text-[22px] '>  الافصاح في حالة تعارض المصالح </p>
                      <input type='text' className='w-5/6 p-2  rounded-md'/>    
                  </div>
                      {/*== input-content ==*/}

                      {/* input-content */}
                  <div className='mb-6'>               
                      <p className='main-font font-medium text-[22px] '> القياس</p>
                      <input type='text' className='w-5/6 p-2  rounded-md'/>    
                  </div>
                      {/*== input-content ==*/}

                       {/* input-content */}
                  <div className='mb-6'>               
                      <p className='main-font font-medium text-[22px] '> المعاينة</p>
                      <input type='text' className='w-5/6 p-2  rounded-md'/>    
                  </div>
                      {/*== input-content ==*/}

                       {/* input-content */}
                  <div className='mb-6'>               
                      <p className='main-font font-medium text-[22px] '> ملاحظات المعاين العامة</p>
                      <input type='text' className='w-5/6 p-2  rounded-md'/>    
                  </div>
                      {/*== input-content ==*/}

                      {/* input-content */}
                  <div className='mb-6'>               
                      <input type='image' alt='إضافة صور العقار' className='w-5/6 p-2  rounded-md'/>    
                  </div>
                      {/*== input-content ==*/}

                       {/* input-content */}
                  <div className='mb-6'>               
                      <p className='main-font font-medium text-[22px] '> الملف التعريفي للشركة / ملحقات</p>
                          <div className='flex flex-row justify-between input-container w-5/6 p-2   rounded-md'>
                              
                              <div className=''>
                                  <p className='main-font main-color p-2 text-[12px] '> تحميل ملف</p>
                                 <MdCloudUpload className='main-color w-3/6 h-3/6'/> 
                              </div>
            
                              <div>
                              <p className='main-font p-2 text-[12px] text-black '> اختار ملف للتحميل من جهازك</p>
                              <input type='file' accept='pdf' className='text-black  w-3/6 rounded-lg'/>
                              </div>

                              </div>                 
                  </div>
                      {/*== input-content ==*/}

                       {/* input-content */}
                  <div className='mb-6'>               
                      <input type='button'  value={'ارسال عرض تقييم'}   className='main-font font-medium text-[22px] bg-color w-5/6 p-2  rounded-lg'/>    
                  </div>
                      {/*== input-content ==*/}






                     



                  


                  
              </div>
              {/*== report-content ==*/}
              
          </div>
           {/*== container ==*/}
      </>
  )
    
}



export default ReportReviewer

