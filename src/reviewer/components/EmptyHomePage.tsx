import '../styles/style.css'
import emptypage from '../../assets/reviewer/emptypage.png'

function EmptyHomePage() {
  return (
      <>
          {/* empty-page-container */}
          <div className="w-full h-auto p-4 relative">
              <p className='main-color p-4 main-font font-medium text-[25px] '>الرئيسية</p>
              <div className=' w-2/6  center-element mt-10'>
                  <img src={emptypage} className='w-full' />
                  <p className='main-color main-font text-[30px] font-[800] mt-4'>لايوجد اي بيانات لعرضها !</p>
              </div>
              
              
          </div>
          {/*== empty-page-container ==*/}
      </>
  )
}

export default EmptyHomePage
