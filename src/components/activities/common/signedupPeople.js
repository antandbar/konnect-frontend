import peopleIcon from "../../../assets/img/user.svg";
import { useTranslation } from "react-i18next";



const SignedUpPeople = ({ people }) => {
    const { t } = useTranslation('global');


    return (
        <p className="signup">
            <img className="icon"src={peopleIcon} alt="icono-user"/>
            {people} {t("signedup", { count: parseInt(people)})} 
            </p> 

    );
  };
  
  export default SignedUpPeople;
  