import React, { Component } from 'react'
import ReactSlick from 'react-slick'
import MemberNewArrival from '../../images/Member/MemberNewArrival.png'
import MemberNeedHome from '../../images/Member/MemberNeedHome.png'
import MemberYouShouldKnow from '../../images/Member/MemberYouShouldKnow.png'

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    }
    return (
      <div className="memberCardCarouselWarp">
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        <style>{cssstyle}</style>
        <ReactSlick {...settings}>
          <div className="memberCardCarousel">
            <img src={MemberNewArrival} alt="" />
          </div>
          <div className="memberCardCarousel">
            <img src={MemberNeedHome} alt="" />
          </div>
          <div className="memberCardCarousel">
            <img src={MemberYouShouldKnow} alt="" />
          </div>
          <div className="memberCardCarousel">
            <img src={MemberNewArrival} alt="" />
          </div>
          <div className="memberCardCarousel">
            <img src={MemberNeedHome} alt="" />
          </div>
          <div className="memberCardCarousel">
            <img src={MemberYouShouldKnow} alt="" />
          </div>
        </ReactSlick>
      </div>
    )
  }
}

const cssstyle = `
.memberCardCarouselWarp{
    margin: 65px;
    width: 80%;
}
.memberCardCarousel>img{
    width: 85%;
}
.slick-next:before, .slick-prev:before {
    color: #000;
}
`
