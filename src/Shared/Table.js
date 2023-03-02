import { Table, Tooltip, Text } from "@nextui-org/react";

import IconButton from "./Button";
import DeleteIcon from "../svg/delete";


export default function Template({stagiaires, columns, deleteStagiaire})
{
    return(
    
    <Table
      aria-label="Example table with static content"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
    >
      <Table.Header>
        {columns.map((colum, index) => (<Table.Column key={index}>{colum}</Table.Column>))}
      </Table.Header>


        <Table.Body>{stagiaires.map((stagiaire, index) => (<Table.Row key={index}>

            <Table.Cell><Text b size={14} css={{ tt: "capitalize" }}>{stagiaire.matricule}</Text></Table.Cell>
            <Table.Cell><Text b size={14} css={{ tt: "capitalize" }}>{stagiaire.nom}</Text></Table.Cell>
            <Table.Cell><Text b size={14} css={{ tt: "capitalize" }}>{stagiaire.prenom}</Text></Table.Cell>
            <Table.Cell><Text b size={14} css={{ tt: "capitalize" }}>{stagiaire.filiere}</Text></Table.Cell>
            <Table.Cell>
                <Tooltip
                    content="Delete Stagiaire"
                    color="error"
                    onClick={() => deleteStagiaire(stagiaire.matricule)}
                >
                    <IconButton>
                        <DeleteIcon size={20} fill="#FF0080" />
                    </IconButton>
                </Tooltip>
            </Table.Cell>

        </Table.Row>))}</Table.Body>

    </Table>


    )
}