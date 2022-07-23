import { useEffect, useState } from "react";
import { getInterestedPeople } from "../service";



const useInterestedPeople = (actId) => {
    const [people, setPeople] = useState([]);
    useEffect(() => {
      getInterestedPeople(actId).then(people => {
        setPeople(people.result)
    })
    },[])
    return people;
  };

const InterestBtn = ({ actId }) => {
    const people = useInterestedPeople(actId);

    return (
        <div className="interested">
            
           {
            people !== undefined
                ? people
                : ('0')
           } 
            <button className="interested-btn"></button>
        </div>


    );
  };
  
  export default InterestBtn;
  