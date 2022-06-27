import React from 'react';
import { Button, ButtonWithArrow } from '../../component/buttons';
import './status.css';
const ProjectStatus = ({ title ,language, status, setStatus, status1, status2, status3, status4}) => {
    return ( <>
        <div className = "adding-investor-overlay"></div> 
        <div className = "adding-investor status">
            <div className = "investor-add">
                <div className = "header-add">
                    <ButtonWithArrow text = { language.global.back }background = { `var(--primary-color)` }/> 
                    <h1>{title}</h1>
                </div>
                <div className="project-status">
                    <div>
                        <p style={{color: 'var(--primary-color)', fontSize: '16px'}}>Project Activity</p>
                        <ul className="status">
                            <li onClick={()=>{setStatus("Start")}}>
                                <div className={`pin ${status==="Start"?"active":""} ${status==="Implementation"?"active":""} ${status==="Monitoring"?"active":""} ${status==="Disinvestment"?"active":""}`}></div>
                                <div className="stat">
                                    <p>{status1}</p>
                                    <p>12/04/2022</p>
                                </div>
                            </li>
                            <li onClick={()=>{setStatus("Implementation")}}>
                                <div className={`pin ${status==="Implementation"?"active":""} ${status==="Monitoring"?"active":""} ${status==="Disinvestment"?"active":""}`}></div>
                                <div className="stat">
                                    <p>{status2}</p>
                                    <p>12/04/2022</p>
                                </div>
                            </li>
                            <li onClick={()=>{setStatus("Monitoring")}}>
                                <div className={`pin ${status==="Monitoring"?"active":""} ${status==="Disinvestment"?"active":""}`}></div>
                                <div className="stat">
                                    <p>{status3}</p>
                                    <p>12/04/2022</p>
                                </div>
                            </li>
                            <li onClick={()=>{setStatus("Disinvestment")}}>
                                <div className={`pin ${status==="Disinvestment"?"active":""}`}></div>
                                <div className="stat">
                                    <p>{status4}</p>
                                    <p>12/04/2022</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="submit">
                        <Button text={language.global.accept} background = {`var(--primary-color)`} types={`button`} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProjectStatus;