import NewGoal from './components/NewGoal/NewGoal'
import GoalList from './components/GoalList/GoalList'

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [courseGoals, setCourseGoals] = useState([
    { id: 'cg1', text: 'Finish the course' },
    { id: 'cg2', text: 'Learn all about the course main topic' },
    { id: 'cg3', text: 'Help other students in the course Q&A' }
  ])

  const addNewGoalHandle = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal))  
    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal))
  }

  return (
    <div className="course-goals">
      <h1>Course Goals</h1>
      <NewGoal onAddGoal={addNewGoalHandle} />
      <GoalList goals={courseGoals} />
    </div>
  );
}

export default App;
