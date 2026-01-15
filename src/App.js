import './App.css';
import Counter from './01_useState_counter';
import Greeting from './01_useState_string';
import UserProfile from './01_useState_multi';
import Like from './01_useState_like';
function App() {
  return (
    <div className="App">
      <Counter />
      <Greeting />
      <UserProfile />
      <Like />
    </div>
  );
}

export default App;
