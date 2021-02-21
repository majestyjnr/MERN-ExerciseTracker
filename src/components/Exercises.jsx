import React, { useEffect, useState } from "react";
import axios from "axios";
import Exercise from "../components/Exercise";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/").then((response) => {
      setExercises(response.data);
    });
  }, []);

  function deleteExercise(id) {
    // axios.get("http://localhost:4000/exercise/" + id).then((res) => {
    //   alert('Data deleted successfully')
    // });
    // setExercises(exercises.filter((el) => el._id !== id));
  }

  return exercises.length > 0 ? (
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
          {exercises.map(function (eachExercise) {
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
  ) : (
    <h1 className="text-center m-5">No Data posted</h1>
  );
};

export default Exercises;
