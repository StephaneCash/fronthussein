import axios from 'axios';
import React, { useEffect, useState } from 'react'
import GetAllEleves from '../components/eleves/GetAllEleves'
import Leftbar from '../components/Leftbar'
import Navbar from '../components/Navbar'
import "../css/Eleves.css"

function Promotion() {
    const [promotions, setPromotions] = useState([]);

    const getAllPrmotions = () => {
        axios.get('http://localhost:5000/api/promotions')
            .then(res => {
                setPromotions(res.data);
            })
            .catch(err => {
                console.log(err.response)
            })
    };
    
    useEffect(() => {
        getAllPrmotions();
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
                            <h6>Liste de différentes promotions</h6>
                        </div>
                        <div className="alert alert-primary">
                            <div className="d-flex">
                                <div className='col-sm-5'>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">
                                                <i className='fa fa-search' style={{ height: "30px", lineHeight: "30px" }}></i>
                                            </span>
                                        </div>
                                        <input type="search" className="form-control" placeholder="Recherche" aria-label="recherche" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                                <div className='col-sm-7'>
                                    <button style={{ float: "right" }} className='btn btn-dark'>Ajouter une promotion</button>
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
                                <GetAllEleves promotions={promotions} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promotion