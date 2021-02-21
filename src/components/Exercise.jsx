import React from 'react'
import {Link} from 'react-router-dom'

const Exercise = (props) => {
    return (
        <tr>
            <td>{props.exercise.username}</td>
            <td>{props.exercise.description}</td>
            <td>{props.exercise.duration}</td>
            <td>{props.exercise.date}</td>
            <td>
            {/* onClick={props.deleteExercise(props.exercise._id)} */}
            <Link to={'/edit-exercise/' + props.exercise._id}> Edit </Link> | <button onClick={props.deleteExercise(props.exercise._id)} > Delete </button>
            </td>
        </tr>
    )
}

export default Exercise
