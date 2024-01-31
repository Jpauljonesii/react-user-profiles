import { useState } from 'react';
import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main';
import Header from './components/header';
import Footer from './components/footer';



function App() {
  const [profile, setProfile] = useState([]);
  
 function displayProfile (event) {
  event.preventDefault();
  setProfile(event.target.value);
 }

  return (
  
   <>
   <Header profile={profile}/>
   <Main profile={profile}/>
   <Footer profile={profile}/>
   
   </>
  
  )
}

export default App
