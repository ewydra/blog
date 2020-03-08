import React, { useState, useEffect } from "react";
import { format } from "date-fns";

export default function Clock() {
  const [timestamp, setTimestamp] = useState(Date.now());
  const formattedHour = format(timestamp, "H:mm:ss");

  useEffect(() => {
    const t = setInterval(() => setTimestamp(Date.now()), 1000);
    return () => clearInterval(t);
  }, [])

  return (
    <div className="clock">{formattedHour}</div>
  )
}
