import React, {useState, useEffect} from 'react';
import './POI.css';
import { AiFillEdit } from "react-icons/ai";
import { useReducer } from 'react';
import { Button, ButtonWithArrow } from '../../component/buttons';
import { VscChevronDown } from "react-icons/vsc";

const initialState = {
  Names: '',
  Surnames:'',
  Type_of_identification:'',
  Identification: '',
  Department:'',
  Country:'',
  Address_main_office: '',
  City: '',
  Telephone: '',
  Email: ''
}

function reducer(state, {field,value}) {
  return {
    ...state,
    [field]: value
  }
}

const ProjectOwnerInfo = ({title,language}) => {
  const [isEditing, setEditing] = useState('no');
  useEffect(()=>{
    const editElement = document.querySelector('.ProjectOwnerInfo ul li svg');
    if(editElement){
      editElement.addEventListener('click',()=>{
        setEditing('yes');
      })
    }
    const submitButton = document.querySelector('.ProjectOwnerInfo ul li button');
    if(submitButton){

      submitButton.addEventListener('click',()=>{
        setEditing('no');
      })
    }
  },[])
  
  const [state, dispatch] = useReducer(reducer,initialState);
  const onChange =(e)=>{
      dispatch({field: e.target.name, value: e.target.value})
  }
  const {Names, Surnames, Type_of_identification, Identification, Department, Country, Address_main_office, City, Telephone, Email} = state;
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  }
  return (
    <>
        <div className = "adding-investor-overlay"></div> 
        <div className = "adding-investor PI">
            <div className = "investor-add">
                <div className = "header-add">
                    <ButtonWithArrow text={language.global.back} background={`var(--primary-color)`} /> 
                    <h1>{title}</h1>
                </div> 
                <form action="" method='POST' className='ProjectOwnerInfo information'  onSubmit={handleSubmit}>
                    <p className='OwnerInfoTitle'>{language.projectDetails.propetar_basicinfo}</p>
                    <ul>
                        <li style={{order: 2}}>
                            <label htmlFor="Names">{language.projectDetails.propetar_names}</label>
                            {
                            isEditing==='no'
                            ?<p>{Names}</p>
                            :<input type="text" name='Names'  value={Names} placeholder='Names' onChange={onChange} />
                            }
                        </li>
                        <li style={{order: 3}}>
                            <label htmlFor="Surnames">{language.projectDetails.propetar_surname}</label>
                            {
                            isEditing ==='no'
                            ?<p>{Surnames}</p>
                            :<input type="text" name='Surnames' value={Surnames} placeholder='Surnames' onChange={onChange} />
                            }
                        </li>
                        <li style={{order: 4}}>
                            <label htmlFor="Type_of_identification">{language.projectDetails.propetar_typeidentifica}</label>
                            {
                            isEditing ==='no'
                            ?<p>{Type_of_identification}  </p>
                            :<textarea type="text" name='Type_of_identification' value={Type_of_identification} onChange={onChange} placeholder='Type of identification' row='8' column='25'></textarea>
                            }
                        </li>
                        <li style={{order: 5}}>
                            <label htmlFor="Identification">{language.projectDetails.propetar_identifiaci}</label>
                            {
                            isEditing ==='no'
                            ?<p>{Identification}  </p>
                            :<textarea type="text" name='Identification' value={Identification} onChange={onChange} placeholder='Identification' row='8' column='25'></textarea>
                            }
                        </li>
                        <li style={{order: 5}}>
                            <AiFillEdit />
                        </li>
                    </ul>
                    <p className='OwnerInfoTitle'>{language.projectDetails.propetar_soscio}</p>
                    <ul>
                        <li>
                            <label htmlFor="Department">{language.projectDetails.propetar_department}</label>
                            {
                            isEditing==='no'
                            ?<p>{Department}</p>
                            :<>
                            <select className="input_201px" name='Department' value={Department} onChange={onChange} placeholder='Select'>
                                <option value=""></option>
                                <option value="Department 1">Department 1</option>
                                <option value="Department 2">Department 2</option>
                            </select> 
                            <input className='selectInput' type="text" name='Department' placeholder='Select' value={Department} onChange={onChange} /> 
                            <VscChevronDown />
                            </>
                        }
                        </li>
                        <li>
                            <label htmlFor="Country">{language.projectDetails.propetar_country}</label>
                            {
                            isEditing==='no'
                            ?<p>{Country}</p>
                            :<>
                            <select className="input_201px" name='Country' value={Country} onChange={onChange} placeholder='Select'>
                                <option value=""></option>
                                <option value="Japan">Japan</option>
                                <option value="USA">USA</option>
                            </select> 
                            <input className='selectInput' type="text" name='Country' placeholder='Select' value={Country} onChange={onChange} /> 
                            <VscChevronDown />
                            </>
                        }
                        </li>
                        <li>
                            <label htmlFor="Address_main_office">{language.projectDetails.propetar_addresmain}</label>
                            {
                            isEditing==='no'
                            ?<p>{Address_main_office}</p>
                            :<input type="text" name='Address_main_office'  value={Address_main_office} placeholder="Enter" onChange={onChange} />
                            }
                        </li>
                        <li>
                            <label htmlFor="City">{language.projectDetails.propetar_city}</label>
                            {
                            isEditing==='no'
                            ?<p>{City}</p>
                            :<>
                            <select className="input_201px" name='City' value={City} onChange={onChange} placeholder='Select'>
                                <option value=""></option>
                                <option value="Tokyo">Tokyo</option>
                                <option value="NewYork">NewYork</option>
                            </select> 
                            <input className='selectInput' type="text" name='City' placeholder='Select' value={City} onChange={onChange} /> 
                            <VscChevronDown />
                            </>
                            }
                        </li>
                    </ul>
                    <p className='OwnerInfoTitle'>{language.projectDetails.propetar_contactinfo}</p>
                    <ul>
                        <li>
                            <label htmlFor="Telephone">{language.projectDetails.propetar_telepho}</label>
                            {
                            isEditing==='no'
                            ?<p>{Telephone}</p>
                            :<input type="text" name='Telephone'  value={Telephone} placeholder="Enter" onChange={onChange} />
                            }
                        </li>
                        <li>
                            <label htmlFor="Projected_departure_date">{language.projectDetails.propetar_email}</label>
                            {
                            isEditing==='no'
                            ?<p>{Email}</p>
                            :<input type="text" name='Email' value={Email} placeholder="Email" onChange={onChange} />
                            }
                        </li>
                    </ul>
                    <div className="submit-button">
                    {
                        isEditing==='no'
                        ?<></>
                        :<Button text={language.global.accept} background={`var(--primary-color)`} types={`submit`} />
                    }
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default ProjectOwnerInfo;