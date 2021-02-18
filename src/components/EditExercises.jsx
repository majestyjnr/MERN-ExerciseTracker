import React from 'react'

const EditExercises = () => {
    return (
        <div className="container card p-5">
            <h1>Edit Exercise</h1>

            {/* <form className="add-form" onSubmit={onSubmit}>
                <div class="form-group">
                    <label for="username">Username:</label>
                    <select class="form-control" value={username} onChange={(e)=> setUsername(e.target.value)} id="username">
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
            </form> */}
        </div>
    )
}

export default EditExercises
