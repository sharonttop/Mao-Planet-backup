import React from 'react'

const Collapse1 = ({ collapsed, children }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed)

  return (
    <>
      <button
        className="MKcollapsible"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        付款方式
      </button>
      <div
        className={`collapse-content ${isCollapsed ? 'collapsed' : 'expanded'}`}
        aria-expanded={isCollapsed}
      >
        {children}
      </div>
    </>
  )
}
export default Collapse1
