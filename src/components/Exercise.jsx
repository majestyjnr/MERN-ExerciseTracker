import React from 'react'
import {Link} from 'react-router-dom'

const Exercise = ({props}) => {
    return (
        <tr>
            <td>{props.exercise.username}</td>
            <td>{props.exercise.exercise}</td>
            <td>{props.exercise.duration}</td>
            <td>{props.exercise.date}</td>
            <td>
                <Link to={"/edit-exercise/"+ props.exercise._id}> Edit </Link> | <a href="http://"> Delete </a>
            </td>
        </tr>
    )
}

export default Exercise
