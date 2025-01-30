import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Weather from './Weather';
import Currency from './Currency';
import Kanban from './Kanban';
import Quiz from './Quiz';
import Stopwatch from './Stopwatch';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/weather">Weather</Link>
        <Link to="/currency">Currency</Link>
        <Link to="/stopwatch">Stopwatch</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/kanban">Kanban</Link>
      </nav>

      <Routes>
        <Route path="/weather" element={<Weather />} />
        <Route path="/currency" element={<Currency />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/quiz" element={<Quiz/>} />
        <Route path="/kanban" element={<Kanban />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
