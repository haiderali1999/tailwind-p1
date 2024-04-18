import React, { useEffect, useState } from "react"
import Card from "./Card"

const Cards = () => {
  const [movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [pages, setPages] = useState(0)

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${currentPage}`
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDY3MDdhZGU3ZWFkNTU4ZTgzNzgzZjJlY2UzNTU0MSIsInN1YiI6IjY2MWZhOThhMjBhZjc3MDE2NDNlMzc3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4ksQqPq8rW_OMYp_l_31mbgxj4WrdkVEVc79kVWZ1SI",
      },
    }

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
        setPages(json.total_pages)
      })
      .catch((err) => console.error("error:" + err))
  }, [])

  return (
    <div className="flex flex-wrap">
      {movies.map((movie) => (
        <Card
          key={movie.id}
          id={movie.id}
          label={movie.original_title}
          release_date={movie.release_date}
          description={movie.overview}
          poster={movie.poster_path}
        />
      ))}
    </div>
  )
}

export default Cards
