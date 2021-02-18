import React, { useEffect, useState } from "react";
import axios from "axios";

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

  return (
    <div className="container card">
      <h1>Registered Exercises</h1>
      <table className="table m-4">
          <thead className="thead-primary">
            <tr>
                <td>Username</td>
                <td>Exercise</td>
                <td>Duration</td>
                <td>Date</td>
                <td>Action</td>
            </tr>
            <tbody>
                {}
            </tbody>
          </thead>

      </table>
    </div>
  );
};

export default Exercises;
