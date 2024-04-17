import React from "react"

const Card = (props) => {
  const { id, label, url, thumbnail } = props
  return (
    <div className="card h-20 w-10" key={id}>
      <img src={thumbnail} />
      <span>{label}</span>
      <a>{url}</a>
    </div>
  )
}

export default Card
