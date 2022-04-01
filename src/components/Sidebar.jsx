import { Link } from "react-router-dom"
import exercises from "../assets/exercises.json"

function Sidebar() {
  return (
    <nav>
      <ul>
        {
          exercises.map(exercise => (
            <li key={ exercise.id }>
              <Link
                to={`/exercise/${exercise.id}`}
                tabIndex={0}
              >
                { exercise.name }
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Sidebar