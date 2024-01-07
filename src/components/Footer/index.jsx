import React from 'react'
import logo from '../../assets/images/logo.svg'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className='w-full h-auto bg-very_dark_gray_blue flex justify-between items-start max-sm:flex-col max-sm:items-center max-sm:text-center max-sm:gap-9 px-40 max-md:px-20 py-24 max-sm:py-12 mt-24 max-sm:mt-0 rounded-se-4xl'>
          <img src={logo} alt='logo' />
          <div className='jkd-footer-box' >
            <div className='jdk-footer-items'>Product</div>
            <a className='jkd-small-menu-item' href="#">Overview</a>
            <a className='jkd-small-menu-item' href="#">Pricing</a>
            <a className='jkd-small-menu-item' href="#">Marketplace</a>
            <a className='jkd-small-menu-item' href="#">Features</a>
            <a className='jkd-small-menu-item' href="#">Integrations</a>
          </div>
          <div className='jkd-footer-box' >
            <div className='jdk-footer-items'>Company</div>
            <a className='jkd-small-menu-item' href="#">About</a>
            <a className='jkd-small-menu-item' href="#">Team</a>
            <a className='jkd-small-menu-item' href="#">Blog</a>
            <a className='jkd-small-menu-item' href="#">Careers</a>
          </div><div className='jkd-footer-box' >
            <div className='jdk-footer-items'>Connet</div>
            <a className='jkd-small-menu-item' href="#">Contact</a>
            <a className='jkd-small-menu-item' href="#">Newsletter</a>
            <a className='jkd-small-menu-item' href="#">linkedIn</a>
          </div>
        </div>
      </footer>
    )
  }
}
export default Footer