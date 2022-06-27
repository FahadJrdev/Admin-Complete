import React from 'react';
import './fp.css';
import FTable from './FTable';
import {FTableInfo} from './FtableInfo';

const FinancialProjection = ({language}) => {
  return (
    <div className="financial">
        <div className="financialDesc">
            <ul>
                <li>
                    <p>Investmen Company Name: </p>
                    <p>MGM Energy Efficiency Colombia SAS</p>
                </li>
                <li>
                    <p>Holding Company Name: </p>
                    <p>MSEF II LLC</p>
                </li>
                <li>
                    <p>Holding Company Location: </p>
                    <p>USA</p>
                </li>
            </ul>
            <ul>
                <li>
                    <p>Investmen Company Ownership %: </p>
                    <p>100%</p>
                </li>
            </ul>
        </div>
        <div className="financialTable">
            <div className="responsiveFix">
                <div className="responsiveAuto">
                {
                    FTableInfo.map((info,i)=>{
                        return(
                            <FTable key={i} data={info} language={language} />
                        )
                    })
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default FinancialProjection;