import { useEffect, useState } from "react";
import { getActivitiesRelation, getInterestedPeople } from "../service";
import InterestBtn from "./interestBtn";
import InterestedPeople from "./interestedPeople";



const useInterestedPeople = (actId, change) => {
    const [people, setPeople] = useState([]);
    useEffect(() => {
      getInterestedPeople(actId).then(people => {
        setPeople(people.result)
    })
    },[change, actId])
    return people;
  };


  const useIsActive = (loggedUser, actId, change) =>{
    const [initialState, setInitialState] = useState();
    useEffect(() => {
        getActivitiesRelation(3, loggedUser, actId).then(result =>{
            setInitialState(result.results.length);
        })
    },[change,loggedUser, actId,])
    return initialState;
} ;




const InterestElem = ({actId, loggedUser}) => {

  const [change, setChange] = useState('');

  const isActive = useIsActive(loggedUser, actId, change);
    const people = useInterestedPeople(actId,change);

    return (
        <div className="interested">
           <InterestedPeople people={people}/>
            <InterestBtn SignedUpBtn actId={actId} loggedUser={loggedUser} isActive={isActive} change={setChange} />
        </div>


    );
  };
  
  export default InterestElem;
  