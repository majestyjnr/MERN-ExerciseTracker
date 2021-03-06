import React,{useState, useEffect} from 'react'
import Datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.min.css'
import axios from 'axios'

const EditExercises = (props) => {
const [exerciseId, setExerciseId] = useState('')
const [username, setUsername] = useState('')
const [description, setDescription] = useState('')
const [duration, setDuration] = useState(0)
const [date, setDate] = useState(new Date())
const [users, setUsers] = useState([])

useEffect(() => {
    axios.get('http://localhost:4000/edit-exercise/' + props.match.params.id).then((response) => {
        setExerciseId(response.data._id)
        setUsername(response.data.username)
        setDescription(response.data.description)
        setDuration(response.data.duration)
        setDate(new Date(response.data.date))
    }).catch(error => {
        console.log(error)
    });

    axios.get('http://localhost:4000/users').then(response => {if (response.data.length > 0 ){
        setUsers(response.data.map(user => user.username))
    }}).catch(error => {
        console.log(error)
    });
}, [])

const onSubmit = (e) => {
    e.preventDefault()
    const newExercise ={
        exerciseId,
        username,
        description,
        duration,
        date
    }
    axios.post('http://localhost:4000/edit-exercise', newExercise).then(res => console.log(res.data))

    window.location ='/'
}



    return (
        <div className="container card p-5">
            <h1>Edit Exercise</h1>
            <form className="add-form" onSubmit={onSubmit}>
                <div class="form-group">
                    <label for="username">Username:</label>
                    <select class="form-control" value={username} onChange={(e)=> setUsername(e.target.value)} id="username" required>
                        {
                            users.map(function(user){
                                return <option key={user} value={user}>{user}</option>
                            })
                        }
                    </select>
                </div>
                <input type="hidden" className="form-control" value={exerciseId}/>
                <div className="form-group">
                    <label htmlFor="">Description:</label>
                    <input type="text" placeholder="Description" className="form-control" value={description} onChange={(e)=> setDescription(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Duration: (In minutes)</label>
                    <input type="number" value={duration} className="form-control" onChange={(e)=> setDuration(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Date:</label>
                    <br/>
                    <Datepicker selected ={date} onChange={(date) => setDate(date)}/>
                </div>

                <input type="submit" value="Update Exercise" placeholder='In Minutes' className='btn btn-primary'/>
            </form>
        </div>
    )
}

export default EditExercises
