import React, { useState, useCallback, useRef } from "react";

export default function MouseTracker({ render }) {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  const divRef = useRef(null)

  const handleMouseMove = useCallback((event) => {
    event.persist();
    const { left, top } = divRef.current.getBoundingClientRect();
     setMousePosition({
      x: event.clientX - left,
      y: event.clientY - top
    })
  }, [])

  return (
    <div onMouseMove={handleMouseMove} ref={divRef}>
      {render(mousePosition)}
    </div>
  )
}
