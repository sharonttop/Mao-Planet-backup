import { withRouter } from 'react-router-dom'

function HotelList(props) {
  console.log(props)

  const { auth } = props

  return (
    <>
      <h1>毛孩假期</h1>
    </>
  )
}

export default withRouter(HotelList)
