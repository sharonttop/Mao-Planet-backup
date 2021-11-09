import React, { Component } from 'react'
import ReactSlick from 'react-slick'
import MemberNewArrival from '../../images/Member/MemberNewArrival.png'
import MemberNeedHome from '../../images/Member/MemberNeedHome.png'
import MemberYouShouldKnow from '../../images/Member/MemberYouShouldKnow.png'

export default class MultipleItems extends Component {
  render() {
    const settings = {
      // dots: true,
      // infinite: true,
      // speed: 500,
      // slidesToShow: 3,
      // slidesToScroll: 3,
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: 'linear',
    }
    return (
      <div className="memberCardCarouselWarp">
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
@media (max-width: 768px) {
  .memberCardCarousel>img{
    width: 90%;
    }
   .memberCardCarouselWarp{
    width: 220%;
     margin-top: 70px;
    margin-left: 60px;
   }
 }

.slick-next:before, .slick-prev:before {
    color: #000;
}
`
