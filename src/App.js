import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home';
import Ajouter from './Pages/Ajouter'
import Navbar from './Shared/navbar'
import { useNavigate } from "react-router-dom";

function App() {

  const navigate = useNavigate();

  const columns = ["Matricule", "Nom", "Prénom", "Filiére", "Delete"];

  const [stagiaires, update_row] = useState([{
      matricule:"14503658",
      nom: "Anass",
      prenom: "Dabibe",
      filiere: "Dev",
  }]);

  const [new_stagiaire, set_stagiaire] = useState({matricule:'', nom: '', prenom: '', filiere: ''})

  const deleteStagiaire = (matricule) => update_row(stagiaires.filter((stagiaire) => stagiaire.matricule !== matricule))

  const notify = () => toast.success("Stagiaire ajouté avec succée")

  const add_stagiaire = () => 
  {
    if(
      new_stagiaire.matricule === '' || 
      new_stagiaire.nom === '' ||
      new_stagiaire.prenom === '' ||
      new_stagiaire.filiere === ''
    ){
      toast.warning("Invalide information")
      return
    }
    
    update_row([...stagiaires, new_stagiaire])
    set_stagiaire({matricule:'', nom: '', prenom: '', filiere: ''})
    notify()
    navigate("/");
  }


  return (
    <>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Home stagiaires={stagiaires} columns={columns} deleteStagiaire={deleteStagiaire}/>} />
          <Route path="/ajouter" element={<Ajouter  add_stagiaire={ add_stagiaire} new_stagiaire={new_stagiaire} set_stagiaire={set_stagiaire}/>} />
        </Routes>

        <ToastContainer
          autoClose={1000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
    </>

  );
}

export default App;




