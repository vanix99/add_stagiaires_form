import { Input, Button, Text } from "@nextui-org/react";

const capitalize = (s) => s[0].toUpperCase() + s.slice(1);

export default function Template({new_stagiaire, set_stagiaire, add_stagiaire}){

    return (
    
    
    <div style={{width:'400px', display:'grid', margin:'50px auto', flexDirection:'column', gap:'10px'}}>
        {
          ["matricule", "nom", "prenom", "filiere"].map((ele, index) => (
            <label key={index}>
              <Text b size={15} color="primary" css={{ tt: "capitalize", margin:'0 5px' }}>{ele}</Text>
              
              <Input
              value={new_stagiaire[ele]}
              onChange={(event) => set_stagiaire({...new_stagiaire, ...{[ele]: event.target.value} })} 
              clearable bordered fullWidth color="primary" size="md" placeholder={capitalize(ele)} />
            </label>
          ))
        }
        
        <span><Button css={{margin:'10px 0'}} onPress={add_stagiaire} flat color="primary" auto>Ajouter Stagiaire</Button></span>
      </div>)
}