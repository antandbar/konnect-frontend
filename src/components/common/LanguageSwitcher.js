import React from "react";
import LanguageTag from "./LanguageTag";

function LanguageSwitcher(){
  
    return(
        <div className="lang-select">
                <LanguageTag language='es'></LanguageTag>
                <LanguageTag language='en'></LanguageTag>
      </div>
    );
}

export default LanguageSwitcher;