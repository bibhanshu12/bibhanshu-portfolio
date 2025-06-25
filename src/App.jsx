import './App.css';
import Header from './Components/Header/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
       
        </ul>
      </div>
      <div className="content-wrapper">
        {/* <Header /> */}
        <Outlet />
      </div>
    </>
  );
}

export default App;