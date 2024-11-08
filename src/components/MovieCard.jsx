function MovieCard({moviePoster}) {
  return (
    <div className="w-80 rounded-lg">
        <img className=" rounded-lg" src={moviePoster}></img>
    </div>
  )
}

export default MovieCard