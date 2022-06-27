import React, { useState,useEffect} from 'react';
import { Button } from '../../component/buttons';
import './Fm.css';
import axios from "../../api/axios.js";
import { FundManagementTable } from '../../component/table';
import GeneralTab from '../ConfigTab';

const FundManagement = ({language, extraClass,dataFondos}) => {
  
  const [listFundss, setLista]=useState([]);
  const callListFounds = ()=>{
    if(dataFondos){
      setLista(dataFondos)
    }else{
      let bearerToken={
        headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` }
      }
          axios.get("/funds", {},bearerToken)
          .then((response) => {
            if(response.status===200){
              
              setLista(response.data)
            }else{
              setLista([])
            }
          }).catch((err)=>{
              
            setLista([])
          })
    }
    

}

  const [listFunds, setList]=useState(callListFounds);
  
  useEffect(()=>{
  setList(listFundss)
}, [listFundss]);
  return (
      <>
      <div className="management">
        <Button text={language.funds.create_fund} background={`var(--tartiary-color)`} />
        <Button text={language.funds.assign} background={`var(--primary-color)`} />
        <GeneralTab itemClass={`Gfundtab`} item1={`Fund 1`} item2={`Fund2`} hideItem3 = {`dn`} hideItem4={`dn`} hideItem5={`dn`} link1={`#`} link2={`#`} link3={`#`} link4={`#`} link5={`#`} />
        {listFunds?(<FundManagementTable key={1} language={language} header1={language.funds.header1} header2={language.funds.header2} header3={language.funds.header3} header4={language.funds.header4}  data={listFunds}   />):""}
      </div>
      </>
  )
}

export default FundManagement;