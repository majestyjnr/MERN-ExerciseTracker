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
    <div>
      <h1>Exercises List Component</h1>
    </div>
  );
};

export default Exercises;
