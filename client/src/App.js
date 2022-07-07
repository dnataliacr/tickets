import logo from './assets/logo.svg'
import './style.css'
import TicketList from './components/TicketList'
import { BsChevronLeft } from 'react-icons/bs'

function App() {
  return (
    <div className="App">
    <div className='breadCrumb'> <span className='breadCrumbIcon'><BsChevronLeft/> </span>Volver</div>
     <TicketList/>
     <img src={logo} alt="tiendamia logo" className='logo'/>
    </div>
  );
}

export default App;
