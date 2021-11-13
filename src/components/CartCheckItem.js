import React, { useState, useEffect } from 'react'
import CloseButton from 'react-bootstrap/CloseButton'
import { useStateValue } from '../StateProvider'
import { BiX } from 'react-icons/bi'

function CartCheckItem({ id, details, image, title, price, quantity }) {
  const [cart, setCart] = useState({})
  const [{ basket }, dispatch] = useStateValue()

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
    })
  }
  return (
    <>
      <ul className="list-unstyled d-flex">
        <li className="media col-md-12 mt-1">
          <img
            src={image}
            class="mr-3"
            alt="..."
            width="120px"
            height="120px"
          />
          <div className="media-body mt-2">
            <h6 className="mt-0 mb-1 text-left">{title}</h6>
            <div className="text-left">{details}</div>
          </div>
        </li>
        <td className="col-md-5 text-center">每月毛孩日</td>
        <td className="col-md-2 text-center">{price}</td>
        <td className="col-md-3 text-center">{quantity}</td>
        <td className="col-md-2 text-center">{price * quantity }</td>
        <div class="col-xs-12 col-sm-1 text-center item-action">
          <BiX onClick={removeFromBasket} className="LuDelBtn" />
        </div>
      </ul>
    </>
  )
}

export default CartCheckItem
