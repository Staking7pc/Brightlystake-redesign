import Main from './Components/Main';
import {BrowserRouter} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/style.css";
function App() {
  return (
    <div>
      <BrowserRouter>
         <Main/> 
      </BrowserRouter>
    </div>
  );
}

export default App;
