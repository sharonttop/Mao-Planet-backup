import React from 'react'
import AdoptCard1 from '../images/AdoptCard1_300x300.jpg'
import '../Styles/AdoptListCard.scss'

function ListCard() {
  return (
    <>
      <div class="list col-12 col-sm-12 col-md-6 col-lg-4">
        <div class="card ">
          <div class="card-context">
            <div class="avatar">
              <img src={AdoptCard1} alt="" />
            </div>
            <div class="">
              <p id="card-title">小呆</p>
              <p id="card-text">
                小呆是隻2歲左右的公貓，看起來呆呆的他，但實際上是很聰明、愛玩而且貪吃的貓咪喔！
              </p>
            </div>
          </div>
          <div class="button" type="submit">
            <div>
              <button id="card-btn">了解更多</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListCard
