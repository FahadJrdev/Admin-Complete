import React from 'react';
import {Button} from '../../component/buttons';
import {RiskInfo} from './RiskInfo';
import {RiskTable} from '../../component/table';
import './risk.css';

const Risk = ({language}) => {
  return (
    <div className="risk">
        <div className="add-risk">
            <Button text={language.global.add} background={`var(--tartiary-color)`} />
        </div>
        <div className="riskTable">
            <RiskTable header1={`Data`} header2={`Description`} header3={`Actions`} data={RiskInfo} language={language} />
        </div>
    </div>
  )
}

export default Risk;