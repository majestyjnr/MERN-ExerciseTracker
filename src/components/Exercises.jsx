import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Exercises = () => {

    const [exercises, setExercises] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:4000/exercises').then(response => {
            setExercises(response.data)
        })
    })
    return (
        <div>
            <h1>Exercises List Component</h1>
        </div>
    )
}

export default Exercises
