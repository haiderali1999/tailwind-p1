import React, { useEffect, useState } from "react"
import Card from "./Card"

const Cards = () => {
  const [photos, setPhotos] = useState([])

  //   useEffect(() => {
  //     const url =
  //       "https://api.themoviedb.org/3/account/21218836/rated/movies?language=en-US&page=1&sort_by=created_at.asc"
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         accept: "application/json",
  //         Authorization:
  //           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDY3MDdhZGU3ZWFkNTU4ZTgzNzgzZjJlY2UzNTU0MSIsInN1YiI6IjY2MWZhOThhMjBhZjc3MDE2NDNlMzc3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4ksQqPq8rW_OMYp_l_31mbgxj4WrdkVEVc79kVWZ1SI",
  //       },
  //     }

  //     fetch(url, options)
  //       .then((res) => res.json())
  //       .then((json) => console.log(json))
  //       .catch((err) => console.error("error:" + err))
  //     // fetch("https://jsonplaceholder.typicode.com/photos")
  //     //   .then(async (res) => await res.json())
  //     //   .then((json) => setPhotos(json))
  //   }, [])

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
