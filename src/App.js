import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import{BrowserRouter, Route,Router,Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Header';



function App() {
  return (
<>
<BrowserRouter>
<Header/>
<Routes>
<Route path="/" element={<Home />} />
</Routes>
</BrowserRouter>


</>
 

  );
}

export default App;
