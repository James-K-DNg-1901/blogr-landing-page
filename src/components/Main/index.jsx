/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Design from '../Design'
import Laptop from '../Laptop'
import Phone from '../Phone'


class Main extends React.Component {
  render() {
    return (
      <main>
        <Design />
        <Phone />
        <Laptop />
      </main>
    )
  }
}
export default Main
