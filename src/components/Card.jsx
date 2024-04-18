import React, { useState } from "react"

const Card = (props) => {
  const { id, label, release_date, description, poster } = props
  return (
    <div className="card card-side bg-base-100 shadow-xl h-full w-1/2 my-5 px-2">
      <figure className="h-full w-1/5">
        <img
          className="h-full"
          src={`https://image.tmdb.org/t/p/w500${poster}`}
          alt={label}
        />
      </figure>
      <div className="card-body h-full w-4/5 p-4">
        <h2>{label}</h2>
        <p className="overflow-auto">
          <MovieDetailShortner detail={description} />
        </p>
        <span>{release_date}</span>
        <div className="card-actions justify-end">
          <button className="btn btn-active me-2">Watch</button>
          <button className="btn btn-active">Details</button>
        </div>
      </div>
    </div>
  )
}

export default Card

function MovieDetailShortner(props) {
  const { detail } = props
  const [size, setSize] = useState(100)
  const length = detail.length
  return (
    <>
      {detail.slice(0, size)}
      {size !== length ? (
        <>
          ...
          <span onClick={() => setSize(length)}>more</span>
        </>
      ) : (
        <span onClick={() => setSize(100)}> (show less) </span>
      )}
    </>
  )
}
