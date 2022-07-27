
import { useEffect, useState } from 'react';
import SignedUpBtn from './signedUpBtn';
import SignedUpPeople from "../common/signedupPeople";
import { getActivitiesRelation, getSignedPeople } from '../service';



const useSignedupPeople = (actId, change) => {
    const [people, setPeople] = useState([]);
    useEffect(() => {
      getSignedPeople(actId).then(people => {
        setPeople(people.result)
    })

    },[change, actId])
    return people;
  };



 const useIsActive = (loggedUser, actId, change) =>{
    const [initialState, setInitialState] = useState();

    useEffect(() => {
        getActivitiesRelation(2, loggedUser, actId).then(result =>{
            setInitialState(result.results.length);
        })
    },[change, loggedUser, actId,])
    return initialState;
} ;



const SignUp = ({actId, loggedUser, creator}) =>{
    const [change, setChange] = useState('');

    const isActive = useIsActive(loggedUser, actId, change);
    const people = useSignedupPeople(actId,change);



return(
    <div className="row ends">
           {(creator === loggedUser)
           ? ''
           : (<SignedUpBtn actId={actId} loggedUser={loggedUser} isActive={isActive} change={setChange}/>
           )
           } 
<SignedUpPeople people={people} />
</div>
)
}


export default SignUp;