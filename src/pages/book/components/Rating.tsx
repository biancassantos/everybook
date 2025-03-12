import { useState } from "react";

function Rating() {
  const [rating, setRating] = useState(0)

  return (
    <section className="flex flex-col gap-3 justify-self-start">
      <p className="text-xl">
        My rating
      </p>
      <div className="flex items-center gap-3">
        <input 
        type="range" 
        name="rate" 
        id="rate" 
        min={0} 
        max={5} 
        step={0.5}
        value={rating}
        onChange={e => setRating(Number(e.target.value))}
        className="accent-primary"
        />
        <p className="font-semibold text-xl">
          {rating}
        </p>
      </div>
    </section>
  )
}

export default Rating;