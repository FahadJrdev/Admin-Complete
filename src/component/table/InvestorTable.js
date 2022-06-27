import React, {useState, useReducer} from 'react';
import { Link } from 'react-router-dom';
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import {Button} from '../buttons';

export const InvestorDatosItem = ({info}) => {
    return(
        <Link  to={{ pathname: '/InvestorsDetail?'+info.INVERSIONISTA['id'], state:info.INVERSIONISTA['id'] }}>
            <ul key={info.INVERSIONISTA['id']} className="listBody">
                <li className='listItem'>{JSON.parse(info.DATOS[0].INFORMACION_COORPORATIVA).COMPANY_NAME}</li>
                <li className='listItem'>{JSON.parse(info.DATOS[0].INFORMACION_COORPORATIVA).CITY_CONSTITUTION}</li>
                <li className='listItem'>{info.INVERSION.length}</li>
                <li className='listItem'>{info['TOTAL DE FONDOS ASIGNADOS']}</li>
                <li className='listItem'>See more</li>
            </ul>
        </Link>
    )
}

export const InvestorItem = ({info}) => {
    return(
        <Link to={{ pathname: '/InvestorsDetail?'+info.INVERSIONISTA['id'], state: info.INVERSIONISTA['id']}}>
            <ul key={info.INVERSIONISTA['id']} className="listBody">
           
                <li className='listItem'>NO DATO</li>
                <li className='listItem'>NO DATO</li>
                <li className='listItem'>{info.INVERSION.length}</li>
                <li className='listItem'>{info['TOTAL DE FONDOS ASIGNADOS']}</li>
                <li className='listItem'>See more</li>
            </ul>
        </Link>
    )
}

export const FundItem = ({info}) => {
    return(
        <Link to={{ pathname: '/FundDetails?'+info.I_CODIGO, state: info.I_CODIGO}}>
            <ul key={info.id} className="listBody">
                <li className='listItem'>{info.I_CODIGO}</li>
                <li className='listItem'>{info.C_NOMBRE}</li>
                <li className='listItem'>{info.D_VALOR_FONDO}</li>
                <li className='listItem'>{info.D_VALOR_INVERTIDO}</li>
            </ul>
        </Link>
    )
}

export const ProjectItem =({info, i, setProjectStatus}) => {
    return(
        
            <ul key={i} className='listBody'>
                <li className='listItem'>{info.C_NOMBRE_PROYECTO}</li>
                <li className='listItem'>{info.I_PAIS}</li>
                <li className='listItem'>{info.FECHA_INVERSION}</li>
                <li className='listItem'>{info.C_MONTO_INV_APRO}</li>
                <li onClick={()=>{setProjectStatus('open')}} className='listItem' style={{color: info.statusColor}}>{info.C_ESTADO_PROYECTO}</li>
                <Link to={{ pathname: '/ProjectDetails?'+info.I_CODIGO, state: info.I_CODIGO}}><li className='listItem'>See more</li></Link>
            </ul>
        
    )
}

export const RiskItem = ({info,language}) => {
    const [isEdit, setEdit] = useState(false);
    const initialState = {
        Data: '',
        Description:''
    }

    function reducer(state, { field, value }) {
        return {
            ...state,
            [field]: value
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    const onChange = (e) => {
        dispatch({ field: e.target.name, value: e.target.value })
    }
    const { Data, Description} = state;
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
    }
    return(
        <ul className="listBody">
            <form action="" method="post" onSubmit={handleSubmit}>
                <li className='listItem'>
                    {
                        isEdit
                        ?<>
                            <textarea name="Data" value={Data} id="" cols="10" rows="4" onChange={onChange} placeholder={`Data`}></textarea>
                        </>
                        :<>{info.Data}</>
                    }
                </li>
                <li className='listItem'>
                    {
                        isEdit
                        ?<>
                             <textarea name="Description" value={Description} id="" cols="10" rows="4" onChange={onChange} placeholder={`Description`}></textarea>
                        </>
                        :<>{info.Description}</>
                    }
                </li>
                <li className='listItem'>
                    {
                        isEdit
                        ?<div className="submit-riskEdit">
                            <Button text={language.global.save} background={`var(--primary-color)`} types={`submit`} />
                        </div>
                        :<></>
                    }
                </li>
                <li className='listItem'><span><AiOutlineDelete/></span> <span onClick={()=>{setEdit(!isEdit)}}><AiFillEdit /></span></li>
            </form>
        </ul>
    )
}