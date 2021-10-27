import React from 'react'
import MyCarousel from '../../components/MyCarousel'
import BlogSection from '../../components/BlogSection'

function Home(props) {
  // const { auth } = props
  return (
    <>
      <MyCarousel />
      {/* <h2>{auth ? '會員已登入' : '未登入'}</h2> */}
      <BlogSection />
    </>
  )
}

export default Home
