import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import axios from "axios"

function GetAllSessions(props) {

    let valueSearch = props.valueSearch;

    console.log(valueSearch)

    const [cours, setCours] = useState([]);
    const getOneSession = () => {
        axios.get(`http://localhost:5000/api/sessions/${valueSearch && valueSearch.id}`)
            .then(res => {
                setCours(res.data);
                console.log(res.data , " ::: DATA")
            })
            .catch(err => {
                console.log(err.response)
            })
    };

    useEffect(()=>{
        if(valueSearch.id){
            getOneSession();
        }
    }, [valueSearch.id]);

    console.log(cours)

    return (
        <>
            {cours && cours.data !== undefined ? (
                cours.data.cours !== undefined && cours.data.cours.map((value, i) => {
                    return (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{value.nom}</td>
                            <td>{value.ponderation}</td>
                            <td>{value.cotation}</td>

                            <td style={{ width: "430px" }}>
                                <button className='btn me-2'>
                                    <i className='fa fa-trash me-2'></i> Supprimer
                                </button>
                                <button className='btn me-2'>
                                    <i className='fa fa-edit'></i> Editer
                                </button>
                                <NavLink to={{ pathname: "filieres" }} state={{ data: value }}>
                                    <button className='btn'>
                                        <i className='fa fa-info'></i> Consulter le résultat
                                    </button>
                                </NavLink>
                            </td>
                        </tr>
                    )
                })

            ) :
                <tr>
                    <td colSpan='7px' className='text-center'>
                        <i className='fa fa-spinner fa-pulse fa-2x'></i> Chargement...
                    </td>
                </tr>
            }

        </>
    )
}

export default GetAllSessions