import '../reviewer/styles/ShowBalance.css'
function ShowBalance() {
  return (
      <>
          {/* container */}
          <div dir='rtl' className='w-full'>
              {/* content-section */}
              <div className='content-section m-10 w-4/5 rounded-md  grid grid-cols-1 pt-8 pb-10 justify-items-center'>
                  {/* image */}
                  <div className='w-1/5 h-1/5 mb-8 max-sm:w-2/5 max-sm:h-2/5'>
                      <img src='/src/assets/reviewer/assest7.png'/>
                  </div>
                  {/*== image ==*/}
                  
                  {/* show-my-balance */}
                  <div className='show-my-balance w-3/5 h-32 text-center  mb-8 max-sm:h-32 max-sm:w-4/5 '>
                      <h6>رصيد حسابي</h6>
                      <span>1,000 ريال</span>
                  </div>
                  {/*== show-my-balance ==*/}

                  {/* outstanding-balance */}
                  <div className='outstanding-balance w-3/5 h-32 text-center  mb-8 max-sm:h-32 max-sm:w-4/5'>
                      <h6> رصيد مستحق</h6>
                      <span> 500 ريال</span>
                  </div>
                  {/*== outstanding-balance ==*/}
                 
              </div>
              {/* content-section */}

          </div>
          {/*== container ==*/}
      </>
  )
}

export default ShowBalance
