import React from 'react'
import { withRouter } from 'react-router-dom'

// // 頁面切換時要用捲軸讓頁面回到最上方
class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)

// import React, { useState } from 'react'
// import { FaArrowCircleUp } from 'react-icons/fa'
// import { Button } from './Styles'

// const ScrollButton = () => {
//   const [visible, setVisible] = useState(false)

//   const toggleVisible = () => {
//     const scrolled = document.documentElement.scrollTop
//     if (scrolled > 300) {
//       setVisible(true)
//     } else if (scrolled <= 300) {
//       setVisible(false)
//     }
//   }

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//       /* you can also use 'auto' behaviour
// 		in place of 'smooth' */
//     })
//   }

//   window.addEventListener('scroll', toggleVisible)

//   return (
//     <Button>
//       <FaArrowCircleUp
//         onClick={scrollToTop}
//         style={{ display: visible ? 'inline' : 'none' }}
//       />
//     </Button>
//   )
// }

// export default ScrollButton
