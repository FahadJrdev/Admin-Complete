import React, { useReducer } from 'react';
import { Button, ButtonWithArrow } from '../../component/buttons';
import './addRisk.css';
const initialState = {
    data: '',
    description:''
}

function reducer(state, { field, value }) {
    return {
        ...state,
        [field]: value
    }
}
const AddRisk = ({ title ,language}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const onChange = (e) => {
        dispatch({ field: e.target.name, value: e.target.value })
    }
    const { data, description } = state;
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
    }
    return ( <>
        <div className = "adding-investor-overlay"></div> 
        <div className = "adding-investor addRisk">
            <div className = "investor-add">
                <div className = "header-add">
                    <ButtonWithArrow text = { language.global.back }background = { `var(--primary-color)` }/> 
                    <h1>{title}</h1>
                </div> 
                <form className='addRiskForm' action="/Projects" method='POST' onSubmit={handleSubmit}>
                    <div className="addRisk-body">
                        <li>
                            <label htmlFor="data">{ `Data` }</label>
                            <input type="text" name='data' value={data} onChange={onChange} placeholder='Enter'/>
                        </li>
                        <li>
                            <label htmlFor="data">{ `Description` }</label>
                            <textarea type="text" name='description' value={description} rows='10' cols='20' onChange={onChange} placeholder='Enter'></textarea>
                        </li>
                    </div>
                    <div className="submit">
                        <Button text={language.global.add} background={`var(--primary-color)`} types={`submit`} />
                    </div>
                </form> 
            </div>
        </div>
        </>
    )
}

export default AddRisk;