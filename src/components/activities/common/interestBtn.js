import { createStatus, deleteStatus, getActivitiesRelation } from "../service";


const interestUser = (data, change) => {
    createStatus(data).then( () =>{
        change(1);
    })
};
    

const unsuscribeUser = (actId, loggedUser, change) =>{
        getActivitiesRelation('3', loggedUser, actId).then((result)=>{
             deleteStatus(result.results[0].id).then(() =>{
                change(2);
            })
        })
}


const InterestBtn = ({actId, loggedUser, isActive, change}) =>{


     const data = {
        "userId":loggedUser,
         "activityId":actId,
        "userStatusId":3
     };


     const handleSuscribe = (data, change) =>{
        interestUser(data, change);
     }

     const handleUnsuscribe = (actId, loggedUser, change) =>{
        unsuscribeUser(actId, loggedUser, change);
     }


    return(
        <>
        {
  (isActive)
  ?( <button className="active interested-btn" onClick={() => {handleUnsuscribe(actId, loggedUser, change)}}>
  </button>
  )

  :(<button className="interested-btn" onClick={() => {handleSuscribe(data, change)}}>
  </button>
  )
        }
        </>
        )

}

export default InterestBtn;