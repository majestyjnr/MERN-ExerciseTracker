import React, { useEffect, useState } from "react";
import axios from "axios";
import Exercise from "../components/Exercise";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/").then((response) => {
      setExercises(response.data);
    });
  });

  function deleteExercise(id) {
    axios.get("http://localhost:4000/exercise/" + id).then((res) => {
      console.log(res.data);
    });
    setExercises(exercises.filter((el) => el._id !== id));
  }

  return (
    <div className="container card">
      <h2 className="text-center">Registered Exercises</h2>
      <table className="table m-2 table-hover">
        <thead className="bg-primary text-white">
          <tr>
            <td>Username</td>
            <td>Exercise</td>
            <td>Duration</td>
            <td>Date</td>
            <td>Action</td>
          </tr>
          </thead>
          <tbody>
            {exercises.map(function(eachExercise) {
              return (
                <Exercise
                  exercise={eachExercise}
                  deleteExercise={deleteExercise}
                  key={eachExercise._id}
                />
              );
            })}
          </tbody>
      </table>
    </div>
  );
};

export default Exercises;
