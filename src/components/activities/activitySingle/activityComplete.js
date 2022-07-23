import moment from 'moment';
import { useTranslation } from "react-i18next";
import InterestBtn from "../common/interestBtn";
import SignedUpPeople from "../common/signedupPeople";
import ActivityData from "../common/activityData";
import { useEffect, useState } from 'react';
import { getCreator } from '../service';


const useCreator = (id) =>{
    const [creator, setCreator] = useState();
    useEffect(() => {
      getCreator(id).then(creator => {
        setCreator(creator.results[0].user.userName)
      })
    },[id])
    return creator;
  }



const ActivityComplete = ({actId, title, activityDate, category, description, place, location}) =>{
    
    const { t } = useTranslation("global");

    const activityCreator = useCreator(actId);

console.log(activityCreator);

    const [newLocation, setNewLocation] = useState();
        useEffect(() => {
            if(location !== undefined){
                setNewLocation(location.location);         
            }
          },[location])       

          const [newCategory, setNewCategory] = useState();
          useEffect(() => {
              if(category !== undefined){
                setNewCategory(category.categoryName);         
              }
            },[category])  



              return(
    <article>
            <InterestBtn actId={actId} />
            <p className="category">{newCategory}</p>
            <h1 className="title">{title}</h1>
            <div className="row">
                <ActivityData type="user" info={activityCreator}></ActivityData>
                <ActivityData type="date" info={moment(activityDate).format('DD/MM/YYYY')}/>
                <ActivityData type="location" info={newLocation}/>
            </div>
            <p className="place">Lugar <b>{place}</b></p>
            <p className="activity-body">{description}</p>
            <div className="row ends">
                <button className="singup-btn">¡Quiero apuntarme!</button>
                <SignedUpPeople actId={actId} />
            </div> 
    </article>

    );


    
    

};


export default ActivityComplete;