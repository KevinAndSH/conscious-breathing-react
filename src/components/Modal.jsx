import { useRef } from "react"
import { createPortal } from "react-dom"
import { motion } from "framer-motion"
import Circle from "./Circle"
import GuideText from "./GuideText"

function Modal({open, onClose, data}) {
  const constraintsRef = useRef(null)

  if (!open) return null

  const { inhaleTime, holdTime, exhaleTime, pauseTime } = data
  const cycleTime = inhaleTime + holdTime + exhaleTime + pauseTime
  const timestamps = [
    0,
    inhaleTime / cycleTime,
    (inhaleTime + holdTime) / cycleTime,
    (inhaleTime + holdTime + exhaleTime) / cycleTime,
    1
  ]

  const { prepareText, inhaleText, holdText, exhaleText, pauseText } = data
  const cycleTexts = [inhaleText, holdText, exhaleText, pauseText]

  return createPortal(
    <div className="modal" onClick={onClose} ref={constraintsRef} >
      <motion.div
        className="modal--content"
        onClick={e => e.stopPropagation()}
        drag
        dragConstraints={constraintsRef}
      >
        <div className="outer-circle">
          <Circle data={{cycleTime, timestamps}} />
        </div>
        <GuideText data={{ inhaleTime, holdTime, exhaleTime, pauseTime, prepareText, cycleTexts }} />
      </motion.div>
    </div>,
    document.getElementById("portal")
  )
}

export default Modal