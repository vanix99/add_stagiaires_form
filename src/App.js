import { useState } from 'react';
import Table from './Shared/Table';
import { Input, Button, Text } from "@nextui-org/react";
import './App.css';

function App() {

  const columns = ["Matricule", "Nom", "Prénom", "Filiére", "Delete"];

  const [stagiaires, update_row] = useState([{
      matricule:"14503658",
      nom: "Anass",
      prenom: "Dabibe",
      filiere: "Dev",
  }]);

  const [new_stagiaire, set_stagiaire] = useState({matricule:'', nom: '', prenom: '', filiere: ''})

  const deleteStagiaire = (matricule) => update_row(stagiaires.filter((stagiaire) => stagiaire.matricule !== matricule))

  console.log(new_stagiaire)
  const capitalize = (s) => s[0].toUpperCase() + s.slice(1);

  const add_stagiaire = () => 
  {
    if(
      new_stagiaire.matricule === '' || 
      new_stagiaire.nom === '' ||
      new_stagiaire.prenom === '' ||
      new_stagiaire.filiere === ''
    ){
      alert('Invalid Information')
      return
    }

    update_row([...stagiaires, new_stagiaire])
    set_stagiaire({matricule:'', nom: '', prenom: '', filiere: ''})

  }

  return (
    <>
    <Table stagiaires={stagiaires} columns={columns} deleteStagiaire={deleteStagiaire}/>


    <div style={{width:'400px', display:'grid', margin:'50px auto', flexDirection:'column', gap:'10px'}}>

      {
        ["matricule", "nom", "prenom", "filiere"].map((ele, index) => (
          <label>
            <Text b size={14} css={{ tt: "capitalize", margin:'0 5px' }}>{ele}</Text>
            
            <Input
            value={new_stagiaire[ele]}
            onChange={(event) => set_stagiaire({...new_stagiaire, ...{[ele]: event.target.value} })} 
            clearable bordered fullWidth color="primary" key={index} size="md" placeholder={capitalize(ele)} />
          </label>
        ))
      }
      
      <span><Button css={{margin:'10px 0'}} onPress={add_stagiaire} flat color="primary" auto>Ajouter Stagiaire</Button></span>
    </div>

    </>

    
  );
}

export default App;
