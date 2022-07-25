import { useTranslation } from "react-i18next";
import { createStatus, deleteStatus, getActivitiesRelation } from "../service";


const signgUpUser = (data, change) => {
    createStatus(data).then( () =>{
        change(1);
    })
};
    

const unsuscribeUser = (actId, loggedUser, change) =>{
        getActivitiesRelation('2', loggedUser, actId).then((result)=>{
             deleteStatus(result.results[0].id).then(() =>{
                change(2);
            })
        })
}


const SignedUpBtn = ({actId, loggedUser, isActive, change}) =>{

    const {t} = useTranslation('global');

     const data = {
        "userId":loggedUser,
         "activityId":actId,
        "userStatusId":2  
     };


     const handleSuscribe = (data, change) =>{
        signgUpUser(data, change);
     }

     const handleUnsuscribe = (actId, loggedUser, change) =>{
        unsuscribeUser(actId, loggedUser, change);
     }


    return(
        <>
        {
  (isActive)
  ?( <button className="active singup-btn" onClick={() => {handleUnsuscribe(actId, loggedUser, change)}}>
  {t("signBtn.unsuscribe")}
  </button>
  )

  :(<button className="singup-btn" onClick={() => {handleSuscribe(data, change)}}>
  {t("signBtn.suscribe")}   
  </button>
  )
        }
        </>
        )

}

export default SignedUpBtn;