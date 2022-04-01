import { useState } from "react"
import { useParams } from "react-router-dom"
import exercises from "../assets/exercises.json"
import Modal from "./Modal"

function Main() {
  const { id } = useParams()
  const exercise = exercises.find(ex => ex.id === parseInt(id))
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <div className="content-wrapper">
      <h2>
        { exercise.name }
      </h2>

      <div>
        { exercise.description.map(line => <p key={line}>{ line }</p>) }
      </div>
      
      <button
        className="btn"
        onClick={ () => setModalOpen(true) }
      >Intentalo</button>

      <Modal open={isModalOpen} onClose={() => setModalOpen(false)} data={exercise} />
    </div>
  )
}

export default Main