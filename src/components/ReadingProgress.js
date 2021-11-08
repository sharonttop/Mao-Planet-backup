import { useState, useEffect } from 'react'
import { ProgressBar } from 'react-bootstrap'
import throttle from 'lodash.throttle'
import '../Styles/ReadingProgress.scss'

function getPageHeight() {
  const body = document.body
  const html = document.documentElement

  return Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.scrollHeight,
    html.offsetHeight
  )
}

function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = throttle(() => {
      const { scrollY, innerHeight } = window
      const pageHeight = getPageHeight()
      setProgress(
        !scrollY
          ? 0
          : scrollY + innerHeight >= pageHeight
          ? 100
          : Math.round(
              ((scrollY + innerHeight * (scrollY / pageHeight)) / pageHeight) *
                100
            )
      )
    }, 100)

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="ACbarPosition">
      <ProgressBar min={0} max={100} now={progress} />
    </div>
  )
}

export default ReadingProgress
