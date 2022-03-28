import { Link, useParams } from "react-router-dom"
import exercises from "../assets/exercises.json"

function Main() {
  const { id } = useParams()
  const exercise = exercises.find(ex => ex.id === parseInt(id))

  return (
    <div className="content-wrapper">
      <h2>
        { exercise.name }
      </h2>

      <div>
        {
          exercise.description.map(line => <p key={line}>{ line }</p>)
        }
      </div>
      <Link
        className="btn"
        to={`/exercise/${id}/try-it-out`}
      >Intentalo</Link>
    </div>
  )
}

export default Main