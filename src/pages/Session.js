import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import GetAllEtudiants from '../components/etudiants/GetAllEtudiants';
import Leftbar from '../components/Leftbar'
import Navbar from '../components/Navbar'
import axios from "axios"
import "../css/Eleves.css"
import GetAllSessions from '../components/sessions/GetAllSessions';

function Session() {

    const location = useLocation();
    const { state } = location;

    const [etatMotif, setEtatMotif] = useState(false);
    const [id, setId] = useState(null);
    const [valMotif, setValMotif] = useState('');

    const [etudiants, setEtudiants] = useState([]);
    const getOneFiliere = () => {
        axios.get(`http://localhost:5000/api/etudiants/${state && state.etudiant && state.etudiant.id}`)
            .then(res => {
                setEtudiants(res.data);
            })
            .catch(err => {
                console.log(err.response)
            })
    };

    const handleMotif = (id) => {
        setEtatMotif(!etatMotif);
        setId(id)
        setValMotif(id);
    }

    useEffect(() => {
        getOneFiliere();
    }, []);

    return (
        <div>
            <Navbar />
            <div className='d-flex main'>
                <div className='col-sm-2'>
                    <Leftbar />
                </div>
                <div className='col-sm-10'>
                    <div className='getAllEleves' style={{ padding: "1rem" }}>
                        <div className='alert alert-success'>
                            <h6>Liste de différentes Sessions pour l'étudiant  <span className='btn btn-success'> {state && state.etudiant.nom + " " + state.etudiant.postnom}
                            </span></h6>
                        </div>
                        <div className="alert alert-primary">
                            <div className="alert alert-info grille">
                                {
                                    etudiants && etudiants.data && etudiants.data.sessions ?
                                        etudiants.data.sessions.map((val, i) => {
                                            return (
                                                <div className='' key={i}>
                                                    <button className={id === val ? 'btn btn-info motifSelected' : 'btn btn-info'}
                                                        onClick={() => handleMotif(val)}>
                                                        {val.nom}
                                                    </button> {' '}
                                                </div>
                                            )
                                        }) : <i className='text-dark'>"Pas de données"</i>
                                }
                            </div>
                        </div>
                        <table className='table table-striped table-bordered'>
                            <thead>
                                <tr>
                                    <th>N°</th>
                                    <th>Nom cours</th>
                                    <td>Pondération</td>
                                    <td>Cotation</td>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <GetAllSessions valueSearch={valMotif} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Session