import { motion, useAnimation } from "framer-motion"

function Circle({ data }) {
  const { cycleTime, timestamps } = data

  const animation = useAnimation()

  const sequence = async () => {
    await animation.start({
      stiffness: 100,
      scale: [1, .1],
      transition: {
        duration: 3
      }
    })

    await animation.start({
      scale: [.1, 1, 1, .1, .1],
      transition: {
        stiffness: 100,
        duration: cycleTime,
        delay: 1,
        repeat: Infinity,
        times: timestamps
      }
    })
  }

  return (
    <motion.div
      className="inner-circle"
      initial={sequence}
      animate={animation}
    />
  )
}

export default Circle