import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import axios from "axios";

function GetAllEtudiants(props) {

    let idFilière = props.etudiants;
    console.log(props)
    const [filieres, setFilieres] = useState([]);
    const getOneFiliere = () => {
        axios.get(`http://localhost:5000/api/filieres/${idFilière && idFilière.etudiant && idFilière.etudiant.id}`)
            .then(res => {
                setFilieres(res.data);
            })
            .catch(err => {
                console.log(err.response)
            })
    };

    useEffect(() => {
        getOneFiliere();
    }, []);

    return (
        <>

            {
                filieres && filieres.data && filieres.data.etudiants !== undefined && filieres.data.etudiants.map((etudiant, i) => {
                    return (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{etudiant.nom}</td>
                            <td>{etudiant.postnom}</td>
                            <td>{etudiant.prenom}</td>
                            <td>{etudiant.sexe}</td>
                            <td>{etudiant.matricule}</td>

                            <td style={{ width: "450px" }}>
                                <button className='btn me-2'>
                                    <i className='fa fa-trash me-2'></i> Supprimer
                                </button>
                                <button className='btn me-2'>
                                    <i className='fa fa-edit'></i> Editer
                                </button>
                                <NavLink to={{ pathname: "sessions" }} state={{ etudiant: etudiant }}>
                                    <button className='btn'>
                                        <i className='fa fa-info'></i> Consulter les sesssions
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

export default GetAllEtudiants