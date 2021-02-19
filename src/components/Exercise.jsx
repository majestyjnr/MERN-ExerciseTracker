import React from 'react'
import {Link} from 'react-router-dom'

const Exercise = (props) => {
    function update(id){
        console.log(id)
        window.location = '/edit-exercises/' + id
    }
    return (
        <tr>
            <td>{props.exercise.username}</td>
            <td>{props.exercise.description}</td>
            <td>{props.exercise.duration}</td>
            <td>{props.exercise.date}</td>
            <td>
            {/* <Link to={"/edit-exercises/" + props.exercise._id }> Edit </Link>  */}
            <Link to={"/edit-exercises/" + props.exercise._id }> Edit </Link> | <a href="#" > Delete </a>
            </td>
        </tr>
    )
}

export default Exercise
