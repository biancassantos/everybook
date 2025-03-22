import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function Greeting() {
  const [timeOfDay, setTimeOfDay] = useState("morning");

  const currentUser = useContext(UserContext);

  const name = currentUser?.user?.displayName?.split(" ")[0];

  const date = new Date();
  const hours = date.getHours();

  useEffect(() => {
    if (hours >= 4 && hours < 12) {
      setTimeOfDay("morning");
    } else if (hours >= 12 && hours < 17) {
      setTimeOfDay("afternoon");
    } else if (hours >= 17 && hours < 20) {
      setTimeOfDay("evening");
    } else {
      setTimeOfDay("night");
    }
  }, [hours])

  if (currentUser?.isAuthPending) return <div></div>

  return (
    <p className="text-primary text-2xl font-semibold xs:text-3xl">
      Good {timeOfDay}, {name ? name : "User"}.
    </p>
  )
}

export default Greeting;