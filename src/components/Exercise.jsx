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
                Edit || Delete
                {/* <Link to={"/edit-exercise/"+ props.exercise._id}> Edit </Link> | <a href="#" > Delete </a> */}
            </td>
        </tr>
    )
}

export default Exercise
