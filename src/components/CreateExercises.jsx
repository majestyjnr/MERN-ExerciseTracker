import React,{useState} from 'react'

const CreateExercises = () => {

const [username, setUsername] = useState('')
const [description, setDescription] = useState('')
const [duration, setDuration] = useState('')
const [users, setUsers] = useState([])


    return (
        <div>
            <h1>Create Exercise Component</h1>
        </div>
    )
}

export default CreateExercises
