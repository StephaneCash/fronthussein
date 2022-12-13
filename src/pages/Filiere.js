import React from 'react'
import { useLocation } from 'react-router-dom';
import GetAllFilieres from '../components/filieres/GetAllFilieres';
import Leftbar from '../components/Leftbar'
import Navbar from '../components/Navbar'
import "../css/Eleves.css"

function Filiere() {

    const location = useLocation();
    const { state } = location;

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
                            <h6>Liste de différentes filières de la promotion <span className='btn btn-success'>{state && state.promotion.nom + " " + state.promotion.description}</span></h6>
                        </div>
                        <div className="alert alert-primary">
                            <div className="d-flex">
                                <div className='col-sm-5'>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">
                                                <i className='fa fa-search' style={{height:"30px", lineHeight:"30px"}}></i>
                                            </span>
                                        </div>
                                        <input type="search" className="form-control" placeholder="Recherche" aria-label="recherche" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                                <div className='col-sm-7'>
                                    <button style={{ float: "right" }} className='btn btn-dark'>Ajouter une filière</button>
                                </div>
                            </div>
                        </div>
                        <table className='table table-striped table-bordered'>
                            <thead>
                                <tr>
                                    <th>N°</th>
                                    <th>Nom</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <GetAllFilieres filieres={state} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filiere