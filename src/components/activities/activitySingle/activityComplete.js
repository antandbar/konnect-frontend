import moment from 'moment';
import { useTranslation } from "react-i18next";
import InterestElem from "../common/interestElem";
import ActivityData from "../common/activityData";
import { useEffect, useState } from 'react';
import { getCreator } from '../service';
import { useAuth } from "../../auth/context";
import SignUp from '../common/singnUp';


const useCreator = (id) =>{
    const [creator, setCreator] = useState();
    useEffect(() => {
      getCreator(id).then(creator => {
        setCreator(creator.results[0].user)
      })
    },[id])
    return creator;
  }



const ActivityComplete = ({actId, title, activityDate, category, description, place, location}) =>{
    
    const { t } = useTranslation("global");

    const activityCreator = useCreator(actId);
    const { loggedUser } = useAuth();
        

              return(
    <article>
           <InterestElem actId={actId} creator={activityCreator?.id } loggedUser={loggedUser}/>

           
            <p className="category">{category?.categoryName}</p>
            <h1 className="title">{title}</h1>
            <div className="row">
                <ActivityData type="user" info={activityCreator?.userName}></ActivityData>
                <ActivityData type="date" info={moment(activityDate).format('DD/MM/YYYY')}/>
                <ActivityData type="location" info={location?.location}/>
            </div>
            <p className="place">{t("activity.place")} <b>{place}</b></p>
            <p className="activity-body">{description}</p>
                <SignUp actId={actId} creator={activityCreator?.id} loggedUser={loggedUser}/>
    </article>

    );


    
    

};


export default ActivityComplete;