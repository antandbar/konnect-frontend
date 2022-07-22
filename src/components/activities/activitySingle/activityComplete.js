import moment from 'moment';
import { useTranslation } from "react-i18next";
import InterestBtn from "../common/interestBtn";
import SignedUpPeople from "../common/signedupPeople";
import ActivityData from "../common/activityData";
import { useEffect, useState } from 'react';
import UserPopup from '../common/userPopup';


    




const ActivityComplete = ({user, title, activityDate, category, description, place, location}) =>{
    

    const { t } = useTranslation("global");

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

            const [newUser, setNewUser] = useState();
            useEffect(() => {
                if(user !== undefined){
                    setNewUser(user.userName);         
                }
              },[user])  

              return(
    <article>
            <InterestBtn people="5" />
            <p className="category">{newCategory}</p>
            <h1 className="title">{title}</h1>
            <div className="row">
                <ActivityData type="user" info={newUser}></ActivityData>
                <UserPopup>{user}</UserPopup>
                <ActivityData type="date" info={moment(activityDate).format('DD/MM/YYYY')}/>
                <ActivityData type="location" info={newLocation}/>
            </div>
            <p className="place">Lugar <b>{place}</b></p>
            <p className="activity-body">{description}</p>
            <div className="row ends">
                <button className="singup-btn">¡Quiero apuntarme!</button>
                <SignedUpPeople people="1" />
            </div> 
    </article>

    );


    
    

};


export default ActivityComplete;