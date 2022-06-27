import React,{useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Navbar from '../sectionBlock/Navigation/Navbar';
import Header from '../sectionBlock/Header';
import Tab from '../component/tab';
import InformationFinancial from '../sectionBlock/Leasing-section/InformationFinancial';
import ScoringContract from '../sectionBlock/Leasing-section/ScoringContract';
import AttributeCredit from '../sectionBlock/Leasing-section/AttributeCredit';
import Liquidation from '../sectionBlock/Leasing-section/Liquidation';
import DocumentCredit from '../sectionBlock/Leasing-section/Document-credit';
import WarrentyCredit from '../sectionBlock/Leasing-section/Warrenty-credit';
import InfoInsurance from '../sectionBlock/Leasing-section/Info-Insurance';
import './pageStyle.css';

const Leasing = ({lang, setLang, language, responsive}) => {
    const navigate = useNavigate();
    const [isNavigate, setNavigate]=useState(false);
    const [tab,setTab] = useState('Information Financial');
    useEffect(()=>{
        const backButton = document.querySelector('.leasingConfig .first-part .buttonwitharrow');
        if(backButton){
        backButton.addEventListener('click',() => {
            setNavigate(!isNavigate);
        });
        if(isNavigate){
            navigate(-1);
        }
        }
    },[navigate,isNavigate,setNavigate])
  return (
    <>
        <div className="leasingConfig">
            <Navbar responsive={responsive} lang={lang} setLang={setLang} language={language} />
            <Header responsive={responsive} lang={lang} setLang={setLang} displayArrowBtn={`show`} colorArrowBtn={`var(--primary-color)`} textArrowBtn={language.global.back}  pageTitle={`Contract configuration  debt/leasing`} pageDesc ={`Parameterization and configuration`} displaySearch={`show`} />
            <main className='main configuration'>
                <Tab action={setTab} tab1={`Information Financial`} tab2={`Scoring Contrat`} tab3={`Attributes credit`} tab4={`Liquidation`} tab5={`Documents Credit`} tab6={`Warranties Credits`} tab7={`Information Insurance`} hideCustomizer={`dn`} tabs1={`Information Financial`} tabs2={`Scoring Contrat`} tabs3={`Attributes credit`} tabs4={`Liquidation`} tabs5={`Documents Credit`} tabs6={`Warranties Credits`} tabs7={`Information Insurance`} />
                {
                    tab === 'Information Financial'
                    ?<InformationFinancial language={language} />
                    :<></>
                }
                {
                    tab === 'Scoring Contrat'
                    ?<ScoringContract language={language} />
                    :<></>
                }
                {
                    tab === 'Attributes credit'
                    ?<AttributeCredit language={language} />
                    :<></>
                }
                {
                    tab === 'Liquidation'
                    ?<Liquidation language={language}/>
                    :<></>
                }
                {
                    tab === 'Documents Credit'
                    ?<DocumentCredit language={language} />
                    :<></>
                }
                {
                    tab === 'Warranties Credits'
                    ?<WarrentyCredit language={language} />
                    :<></>
                }
                {
                    tab === 'Information Insurance'
                    ?<InfoInsurance language={language} />
                    :<></>
                }
            </main>
        </div>
    </>
  )
}

export default Leasing;