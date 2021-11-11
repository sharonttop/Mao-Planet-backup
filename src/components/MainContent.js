import React from 'react'

function MainContent(props) {
  return (
    <>
      <main role="main" className="flex-shrink-0">
        <div className="container" style={{marginTop:'82px'}}>{props.children}</div>
      </main>
    </>
  )
}

export default MainContent

// import React from 'react'

// function MainContent(props) {
//   return (
//     <>
//       <main role="main" className="flex-shrink-0">
//         <div className="container">{props.children}</div>
//       </main>
//     </>
//   )
// }

// export default MainContent
