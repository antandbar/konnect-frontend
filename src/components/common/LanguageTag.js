import React from "react";
import {useTranslation} from 'react-i18next';

function LanguageTag({...props}){

    const {i18n} = useTranslation();
    const language = props.language;
    const pageLanguage = i18n.language;

    return(
       <span 
       className={(language === pageLanguage) ? "active" : ""}
       onClick={(e) => i18n.changeLanguage(language)}>{language}</span>
    );
    
}

export default LanguageTag;