import React from 'react'
import circles from '../../assets/images/bg-pattern-circles.svg'
import phone from '../../assets/images/illustration-phones.svg'

class Phone extends React.Component {
  render() {
    return (
      <div className='w-full h-72 max-md:h-intro bg-gradient-to-br from-very_dark_gray_blue to-very_dark_desaturated_blue my-24 max-md:my-40 rounded-se-4xl rounded-bl-4xl relative z-0 transition-all duration-200'>
        <img className='w-72 max-md:w-96' src={circles} alt="circles" />
        <div className='w-full px-36 max-sm:px-5 absolute -bottom-20 max-md:bottom-12 max-sm:bottom-3 flex max-md:flex-col transition-all duration-200'>
          <img className='w-96' src={phone} alt="phone" />
          <div className='w-2/3 max-sm:w-full flex flex-col justify-center px-3 gap-4 max-sm:text-center transition-all duration-200'>
            <h3 className='text-white text-3xl font-overpass font-bold tracking-wide' >State of Art Infrastructure</h3>
            <p className='text-sm text-white leading-6 tracking-wide mb-12'>
              With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
              This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default Phone