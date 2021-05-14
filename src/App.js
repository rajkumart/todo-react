import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'fontawesome-4.7/css/font-awesome.css'
import Todo from './components/todo'

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <Todo />
        </div>
      </div>
    </div>
  );
}

export default App;
