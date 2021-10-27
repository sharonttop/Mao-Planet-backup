import React from 'react'
import sliderBar from '../images/sliderBar_800x80.svg'
import '../Styles/SliderBar.scss'

function SliderBar(props) {
  return (
    <>
      <div>
        <img
          className="sliderBarCSS d-block container-fluid"
          src={sliderBar}
          alt=" "
        />
      </div>
    </>
  )
}

export default SliderBar
