/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import desktopLap from '../../assets/images/illustration-laptop-desktop.svg'
import mobileLap from '../../assets/images/illustration-laptop-mobile.svg'


class Laptop extends React.Component {
  render() {
    return (
      <div>
        <div className='w-full flex flex-row max-lg:flex-col'>
          {/* content img */}
          <picture>
            <source media="(min-width: 600px)" srcSet={desktopLap} />
            <img src={mobileLap} alt='editor' />
          </picture>
          {/* discription */}
          <div className='w-2/3 max-lg:w-full pr-40 pl-14 max-lg:pr-14 py-14'>
            <h3 className='jkd-content-title'>
              Free, open, simple
            </h3>
            <p className='jkd-content-paragraph'>
              Blogr is a free and open source application backed by a large community of helpful developers. It supports 
              features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
              and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
            </p>
            <h3 className='jkd-content-title'>
              Powerful tooling
            </h3>
            <p className='jkd-content-paragraph'>
              Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
              capable of producing even the most complicated sites.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default Laptop