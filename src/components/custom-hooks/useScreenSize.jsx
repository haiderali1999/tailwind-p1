import { useEffect, useState } from "react"

const useScreenSize = () => {
  const [screen, setScreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  useEffect(() => {
    // Function to update the state with the current window width
    const updateScreenWidth = () => {
      setScreen({ ...screen, width: window.innerWidth })
      setScreen({ ...screen, height: window.innerHeight })
    }

    // Attach event listener for window resize
    window.addEventListener("resize", updateScreenWidth)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateScreenWidth)
    }
  }, [])
  return screen
}

export default useScreenSize
