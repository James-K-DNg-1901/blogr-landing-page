/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import desktopEditor from '../../assets/images/illustration-editor-desktop.svg'
import mobileEditor from '../../assets/images/illustration-editor-mobile.svg'


class Design extends React.Component {
  render() {
    return (
      <div>
        <h2 className='text-center text-very_dark_desaturated_blue text-4xl font-overpass font-bold tracking-wide my-24'>
          Design for the future
        </h2>
        <div className='w-full flex flex-row-reverse max-lg:flex-col'>
          {/* content img */}
          <picture>
            <source media="(min-width: 600px)" srcSet={desktopEditor} />
            <img src={mobileEditor} alt='editor' />
          </picture>
          {/* discription */}
          <div className='w-2/3 max-lg:w-full pl-40 pr-14 max-lg:pl-14 py-14'>
            <h3 className='jkd-content-title'>Introducing an extensible editor</h3>
            <p className='jkd-content-paragraph'>
              Introducing an extensible editor
              Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
              The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
              videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
              change the looks of a blog.
            </p>
            <h3 className='jkd-content-title'>Robust content management</h3>
            <p className='jkd-content-paragraph'>
              Flexible content management enables users to easily move through posts. Increase the usability of your blog 
              by adding customized categories, sections, format, or flow. With this functionality, you're in full control.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default Design