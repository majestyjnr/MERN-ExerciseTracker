import React, {useState} from 'react'

const CreateUsers = () => {

    const [username, setUsername] = useState('')
    
    const onSubmit = (e) => {
        e.preventDefault()
        const newUser ={
            username,
        }
        console.table(newUser)
    
        window.location ='/'
    }

    return (
        <div className="container card p-5">
        <h1>Create User Component</h1>

        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="">Username:</label>
                <input type="text" placeholder="Username" className="form-control" value={username} onChange={(e)=> setUsername(e.target.value)}/>
            </div>

            <input type="submit" value="Add User" className='btn btn-primary'/>
        </form>
    </div>
    )
}

export default CreateUsers
