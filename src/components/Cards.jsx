import React, { useEffect, useState } from "react"
import Card from "./Card"

const Cards = () => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(async (res) => await res.json())
      .then((json) => setPhotos(json))
  }, [])

  return (
    <div>
      {photos.map((photo) => (
        <Card
          key={photo.id}
          id={photo.id}
          label={photo.title}
          thumbnail={photo.thumbnailUrl}
          url={photo.url}
        />
      ))}
    </div>
  )
}

export default Cards
