import React from 'react'
import { NavLink } from 'react-router-dom';

function GetAllEleves(props) {

    let promotions = props.promotions;

    return (
        <>
            {promotions && promotions.taille > 0 ? (
                promotions.data.map((promotion, i) => {
                    return (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{promotion.nom}</td>
                            <td>{promotion.description}</td>

                            <td style={{ width: "430px" }}>
                                <button className='btn me-2'>
                                    <i className='fa fa-trash me-2'></i> Supprimer
                                </button>
                                <button className='btn me-2'>
                                    <i className='fa fa-edit'></i> Editer
                                </button>
                                <NavLink to={{ pathname: "filieres" }} state={{ promotion: promotion }}>
                                    <button className='btn'>
                                        <i className='fa fa-info'></i> Consulter ses filières
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

export default GetAllEleves