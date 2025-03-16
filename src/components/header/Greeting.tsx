import { useState, useEffect } from "react";

function Greeting() {
  const [timeOfDay, setTimeOfDay] = useState("morning");

  const date = new Date();
  const hours = date.getHours();

  useEffect(() => {
    if (hours >= 12 && hours < 17) {
      setTimeOfDay("afternoon");
    } else if (hours >= 17 && hours < 20) {
      setTimeOfDay("evening");
    } else if (hours >= 20) {
      setTimeOfDay("night");
    } else {
      setTimeOfDay("morning");
    }
  }, [hours])

  return (
    <p className="text-primary text-2xl font-semibold xs:text-3xl">
      Good {timeOfDay}, User.
    </p>
  )
}

export default Greeting;