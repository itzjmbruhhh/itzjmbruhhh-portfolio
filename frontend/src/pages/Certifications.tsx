import React from 'react'
import python from '../assets/images/ITS_Python.png'
import ic3 from '../assets/images/IC3_Level1.png'
import fcc from '../assets/images/fcc.png'

function Certifications() {
  return (
    <div data-aos="fade-up" data-aos-duration="600">
      <div className="flex flex-col xl:flex-row justify-center xl:px-25 gap-12">

        {/* Single Card Start */}
        <div className="box-shadow-resume mx-10 md:mx-40 xl:mx-auto">
          <div className='flex justify-center border-b border-(--color-tertiary) py-5 mb-2 md:py-6 xl:py-6 xl:mb-4 md:mb-4 xl:mx-8'>
            <img src={python} alt="certification" className="w-[150px] md:w-[250px] xl:w-[250px]"/>
          </div>
          <h1 className='text-xl xl:pb-4'>IT Specialist: Python</h1>
        </div>
        {/* Single Card End */}

        {/* Single Card Start */}
        <div className="box-shadow-resume mx-10 md:mx-40 xl:mx-auto">
          <div className='flex justify-center border-b border-(--color-tertiary) py-5 mb-2 md:py-6 xl:py-6 xl:mb-4 md:mb-4 xl:mx-8'>
            <img src={ic3} alt="certification" className="w-[150px] md:w-[250px] xl:w-[250px]"/>
          </div>
          <h1 className='text-xl xl:pb-4'>IC3 Digital Literacy</h1>
        </div>
        {/* Single Card End */}

        {/* Single Card Start */}
        <div className="box-shadow-resume mx-10 md:mx-40 xl:mx-auto">
          <div className='flex justify-center border-b border-(--color-tertiary) py-5 mb-2 md:py-6 xl:py-6 xl:mb-4 md:mb-4 xl:mx-8'>
            <img src={fcc} alt="certification" className="w-[150px] md:w-[250px] xl:w-[250px] rounded-full"/>
          </div>
          <h1 className='text-xl xl:pb-4'>FreeCodeCamp - ML Python</h1>
        </div>
        {/* Single Card End */}


      </div>
    </div>
  )
}

export default Certifications