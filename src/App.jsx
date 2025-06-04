import './App.css';
import Login from './Componets/Login';
import Header from './Componets/Header';
import Navbar from './Componets/Navbar';
import Banner from './Componets/Banner';

export default function App() {
    return(
        <div>
            <Header />
            <Navbar/> 
            <Banner/>
            <Login />
        </div>
    )
    
}
