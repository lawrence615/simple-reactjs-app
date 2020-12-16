import GoalList from './components/GoalList'

import logo from './logo.svg';
import './App.css';

function App() {
  const courseGoals = [
    { id: 'cg1', text: 'Finish the course' },
    { id: 'cg2', text: 'Learn all about the course main topic' },
    { id: 'cg3', text: 'Help other students in the course Q&A' }
  ]
  return (
    <div className="course-goals">
      <h1>Course Goals</h1>
      <GoalList goals={courseGoals} />
    </div>
  );
}

export default App;
