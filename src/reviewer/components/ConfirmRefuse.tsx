import securityIcon from '../../assets/reviewer/securityicon.png'
import '../styles/style.css'

// interface ConfirmAcceptProps{
//     onClose:()=>void
// }
const ConfirmRefuse: React.FC  =() => {
    return (
        <>
            <div className='overlay' >
                <div className='position-element w-2/6 h-fit rounded-lg bg-white text-center p-8' >
                <div className='w-2/6 bg-color rounded-full p-8 m-auto'>
                    <img src={securityIcon} className='w-full'/>
                </div>
                <p className='main-font text-[22px] font-bold mt-4 mb-4'>   تمت عملية الرفض بنجاح </p>
            </div>
            </div>
            
        </>
   ) 
}

export default ConfirmRefuse


