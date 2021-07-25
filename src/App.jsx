import React, { useEffect, useState } from "react"
import { useMediaQuery } from "@material-ui/core"

import HeroHeader from "components/HeroHeader"
import NavBar from "components/NavBar"
import MainSection from "components/MainSection"

const App = () => {
  const [opacity, setOpacity] = useState(0)
  const isMediumDisplay = useMediaQuery((theme) => theme.breakpoints.up("sm"))

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const calcOpacity = window.scrollY / (window.innerHeight - 64)
      return calcOpacity > 1 ? setOpacity(1) : setOpacity(calcOpacity)
    })
  }, [])

  return (
    <>
      <NavBar opacity={opacity} isMediumDisplay={isMediumDisplay} />
      <HeroHeader opacity={opacity} />
      <MainSection
        isBackToTopDisplay={opacity === 1}
        isMediumDisplay={isMediumDisplay}
      />
    </>
  )
}

export default App
