import peopleIcon from "../../../assets/img/user.svg";
import { useTranslation } from "react-i18next";
import { getSignedPeople } from "../service";
import { useEffect, useState } from "react";


const useSignedupPeople = (actId) => {
    const [people, setPeople] = useState([]);
    useEffect(() => {
      getSignedPeople(actId).then(people => {
        setPeople(people.result)
    })
    },[])
    return people;
  };


const SignedUpPeople = ({ actId }) => {
    const { t } = useTranslation('global');

    const people = useSignedupPeople(actId);

    return (
        <p className="signup">
            <img className="icon"src={peopleIcon}/>
            {people} {t("signedup", { count: parseInt(people)})} 


            </p> 



    );
  };
  
  export default SignedUpPeople;
  