import React from 'react'

const Collapse = ({ collapsed, children }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed)

  return (
    <>
      <button
        className="MKcollapsible"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        設備＆服務
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
export default Collapse
