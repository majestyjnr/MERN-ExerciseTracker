import React, { useEffect, useState } from "react";
import axios from "axios";
import Exercise from '../components/Exercise'

const Exercises = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/").then((response) => {
      setExercises(response.data);
    });
  });

  function deleteExercise(id) {
    axios.delete("http://localhost:4000/exercises/" + id).then((res) => {
      console.log(res.data);
    });

    setExercises(exercises.filter(elements => elements._id !== id))
  }

  function exercisesList(){
      return exercises.map(eachExercise => {
        return <Exercise exercise= {eachExercise} deleteExercise={deleteExercise} key={eachExercise._id}/>
      })
  }

  return (
    <div className="container card">
      <h2 className="text-center">Registered Exercises</h2>
      <table className="table m-2">
          <thead className="bg-primary text-white">
            <tr>
                <td>Username</td>
                <td>Exercise</td>
                <td>Duration</td>
                <td>Date</td>
                <td>Action</td>
            </tr>
            <tbody>
                {exercisesList}
            </tbody>
          </thead>

      </table>
    </div>
  );
};

export default Exercises;
