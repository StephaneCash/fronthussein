import React from 'react'
import { NavLink } from 'react-router-dom';

function GetAllFilieres(props) {

    let filieres = props.filieres;

    return (
        <>

            {
                filieres && filieres.promotion && filieres.promotion.filieres !== undefined && filieres.promotion.filieres.map((filiere, i) => {
                    return (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{filiere.nom}</td>
                            <td>{filiere.description}</td>

                            <td style={{ width: "450px" }}>
                                <button className='btn me-2'>
                                    <i className='fa fa-trash me-2'></i> Supprimer
                                </button>
                                <button className='btn me-2'>
                                    <i className='fa fa-edit'></i> Editer
                                </button>
                                <NavLink to={{ pathname: "etudiants" }} state={{ etudiant: filiere && filiere, promAndFil: filieres }}>
                                    <button className='btn'>
                                        <i className='fa fa-info'></i> Consulter les étudiants
                                    </button>
                                </NavLink>
                            </td>
                        </tr>
                    )
                })
            }

        </>
    )
}

export default GetAllFilieres