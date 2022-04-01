import { useState, useEffect, useCallback } from "react"
import sleep from "../utils/sleep.js"

function GuideText({ data }) {
  const { inhaleTime, holdTime, exhaleTime, pauseTime, prepareText, cycleTexts } = data

  const [guideText, setGuideText] = useState(prepareText)
  
  const textSwitch = useCallback(async () => {
    setGuideText(cycleTexts[0])
    await sleep(inhaleTime)
    setGuideText(cycleTexts[1] || "")
    await sleep(holdTime || 0)
    setGuideText(cycleTexts[2])
    await sleep(exhaleTime)
    setGuideText(cycleTexts[3] || "")
    await sleep(pauseTime || 0)
    textSwitch()
  }, [inhaleTime, holdTime, exhaleTime, pauseTime, cycleTexts])

  useEffect(() => {
    sleep(4).then(textSwitch)
  }, [textSwitch])

  return (
    <p>
      { guideText }
    </p>
  )
}

export default GuideText