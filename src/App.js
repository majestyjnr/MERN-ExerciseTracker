import { BrowserRouter as Router, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'

// Require Components
import Navbar from './components/Navbar'
import ExerciseList from './components/Exercises'
import CreateExercises from "./components/CreateExercises";
import EditExercises from "./components/EditExercises";
import CreateUsers from "./components/CreateUsers";


function App() {
  return (
    <Router>
      <Navbar/>
      <br/>
      <Route path="/" exact component={ExerciseList}/>
      <Route path="/create-exercise" component={CreateExercises}/>
      <Route path="/edit-exercises" component={EditExercises}/>
      <Route path="/create-users" component={CreateUsers}/>
    </Router>
  );
}

export default App;
