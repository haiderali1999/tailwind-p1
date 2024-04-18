import React, { useState } from "react"

const Card = (props) => {
  const { id, label, release_date, description, poster } = props
  return (
    <div className="card card-side bg-base-100 shadow-xl h-full w-1/2 my-5 px-2">
      <figure>
        <img
          className="h-80 w-full"
          src={`https://image.tmdb.org/t/p/w500${poster}`}
          alt={label}
        />
      </figure>
      <div className="card-body">
        <h2>{label}</h2>
        <p className="">
          <MovieDetailShortner detail={description} />
        </p>
        <span>{release_date}</span>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  )
}

export default Card

function MovieDetailShortner(props) {
  const { detail } = props
  const [size, setSize] = useState(100)

  return (
    <div className="overflow-auto">
      {detail.slice(0, size)}...
      <span onClick={() => setSize(detail.length)}>more</span>
    </div>
  )
}
