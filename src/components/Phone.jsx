import React from 'react'
import Rasm from '../../public/assets/Rasm.jpg'

const Phone = () => {
  return (
    <div className='flex  text-center justify-center gap-[10%]'>
      <div>
        <h3>FOR BUSINSESSES OF ALL SOZES</h3>
        <h1 className='font-bold text-5xl '>Ordering <br /> and payment  made easy </h1>
        <p className='mt-[2%]'>Give the ultimate flexiblity , and keep them <br /> coming back for more using storekit's intuitive er and <br />pay experience</p>
      </div>
      <div>
        <img className=' h-50' src={Rasm} alt="axsxsadasds" />
      </div>
    </div>
  )
}

export default Phone