import React,{useState} from 'react'

const CreateExercises = () => {

const [username, setUsername] = useState('')
const [description, setDescription] = useState('')
const [duration, setDuration] = useState(0)
const [date, setDate] = useState(new Date())
const [users, setUsers] = useState([])



const onSubmit = (e) => {
    e.preventDefault()
    const newExercise ={
        username,
        description,
        duration,
        date
    }
    console.table(newExercise)

    // window.location ='/'
}



    return (
        <div className="container card p-5">
            <h1>Create Exercise Component</h1>

            <form className="add-form" onSubmit={onSubmit}>
                <div class="form-group">
                    <label for="username">Username:</label>
                    <select class="form-control" value={username} onChange={(e)=> setDate(e.target.value)} id="username">
                        {
                            users.map(function(user){
                                return <option key={user} value={user}>{user}</option>
                            })
                        }
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="">Description:</label>
                    <input type="text" placeholder="Description" className="form-control" value={description} onChange={(e)=> setDescription(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Duration: (In minutes)</label>
                    <input type="number" value={duration} className="form-control" onChange={(e)=> setDuration(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Date:</label>
                    <input type="date" value={date} className="form-control" onChange={(e)=> setDate(e.target.value)}/>
                </div>

                <input type="submit" value="Save Task" placeholder='In Minutes' className='btn btn-primary'/>
            </form>
        </div>
    )
}

export default CreateExercises
