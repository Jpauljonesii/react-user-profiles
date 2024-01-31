import { useState } from 'react';
import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer'


function App() {
  const [profileData, setprofileData] = useState([]);
  
  return (
    <>
    <header>
      <h1>User Profiles</h1>
    </header>
    <main>
      <Main/>
    </main>
    <footer><p>&copy;John P. Jones II</p></footer>
    </>
  )
}

export default App
