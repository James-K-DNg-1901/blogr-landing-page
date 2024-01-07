import React from 'react'
import logo from '../../assets/images/logo.svg'
import desktopIntro from '../../assets/images/bg-pattern-intro-desktop.svg'
import mobileIntro from '../../assets/images/bg-pattern-intro-mobile.svg'
import whiteArrow from '../../assets/images/icon-arrow-light.svg'
import redArrow from '../../assets/images/icon-arrow-dark.svg'
import menuIcon from '../../assets/images/icon-hamburger.svg'

class Header extends React.Component {

  clickHandle3 = () => {
    document.getElementById('connect').classList.toggle('hidden')
  }
  clickHandle2 = () => {
    document.getElementById('company').classList.toggle('hidden')
  }
  clickHandle1 = () => {
    document.getElementById('product').classList.toggle('hidden')
  }
  menuHandle = () => {
    document.getElementById('menu').classList.toggle('max-md:-right-74')
    document.getElementById('menu').classList.toggle('max-md:right-8')
  }

  render() {
    return (
      <header>
        <div className='jkd-nav-style translate-y'>
          <picture>
            <source media="(min-width: 600px)" srcSet={desktopIntro} />
            <img className='jkd-logo translate-y' src={mobileIntro} alt="bg-img" />
          </picture>
          <div className='jkd-nav-elements translate-x'>
            <img src={logo} alt="logo" />
            {/* nav menu */}
            <div id='menu' className='jkd-main-elements translate-x'>
              <div className='w-full flex gap-7 max-md:gap-4 max-md:flex-col'>
                {/* product */}
                <div className='jkd-menu-item'>
                  <div onClick={() => this.clickHandle1()} className='jkd-item-style'>
                    Product<span><picture><source media="(min-width: 780px)" srcSet={whiteArrow} /><img className='w-3 h-2' src={redArrow} alt="arrow" /></picture></span>
                  </div>
                  {/* small menu */}
                  <div id='product' className='jkd-small-menu  hidden'>
                    <a className='jkd-small-menu-item' href="#">Overview</a>
                    <a className='jkd-small-menu-item' href="#">Pricing</a>
                    <a className='jkd-small-menu-item' href="#">Marketplace</a>
                    <a className='jkd-small-menu-item' href="#">Features</a>
                    <a className='jkd-small-menu-item' href="#">Integrations</a>
                  </div>
                </div>
                {/* company */}
                <div className='jkd-menu-item'>
                  <div onClick={() => this.clickHandle2()} className='jkd-item-style'>
                    Company<span><picture><source media="(min-width: 780px)" srcSet={whiteArrow} /><img className='w-3 h-2' src={redArrow} alt="arrow" /></picture></span>
                  </div>
                  {/* small menu */}
                  <div id='company' className='jkd-small-menu  hidden'>
                    <a className='jkd-small-menu-item' href="#">About</a>
                    <a className='jkd-small-menu-item' href="#">Team</a>
                    <a className='jkd-small-menu-item' href="#">Blog</a>
                    <a className='jkd-small-menu-item' href="#">Careers</a>
                  </div>
                </div>
                {/* connect */}
                <div className='jkd-menu-item'>
                  <div onClick={() => this.clickHandle3()} className='jkd-item-style'>
                    Connect<span><picture><source media="(min-width: 780px)" srcSet={whiteArrow} /><img className='w-3 h-2' src={redArrow} alt="arrow" /></picture></span>
                  </div>
                  {/* small menu */}
                  <div id='connect' className='jkd-small-menu  hidden'>
                    <a className='jkd-small-menu-item' href="#">Contact</a>
                    <a className='jkd-small-menu-item' href="#">Newsletter</a>
                    <a className='jkd-small-menu-item' href="#">LinkedIn</a>
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-7 max-md:gap-4 max-md:flex-col'>
                <div className='jkd-login duration-250'>login</div>
                <div className='jkd-signup w-36 h-13 duration-250'>sign up</div>
              </div>
            </div>
            {/* menu icon */}
            <img onClick={() => this.menuHandle()} className='h-5 hover:h-7 transition-all duration-250 md:hidden cursor-pointer' src={menuIcon} alt="menu" />
          </div>
          <div className='absolute text-center bottom-36 right-96 max-xl:right-60 max-lg:right-40 max-md:right-10 max-sm:bottom-20 max-sm:right-2 z-20 translate-x transition-all duration-200 '>
            <h1 className='text-white text-5xl max-md:text-4xl font-overpass font-bold tracking-wide mb-4'>A modern publishing platform</h1>
            <p className='text-white font-overpass tracking-wide mb-12'>Grow your audience and build your online brand</p>
            <div className='flex justify-center gap-4'>
              <div className='bg-white px-4 py-3 text-very_light_red font-bold rounded-full cursor-pointer hover:bg-light_red hover:text-white transition-all duration-250 ease-in-out'>Start for Free</div>
              <div className='font-bold text-white px-6 py-2 border-2 border-white rounded-full cursor-pointer hover:bg-white hover:text-light_red transition-all duration-250 ease-in-out'>Learn More</div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
