import moment from 'moment';
import { useTranslation } from "react-i18next";
import InterestBtn from "../common/interestBtn";
import SignedUpPeople from "../common/signedupPeople";
import ActivityData from "../common/activityData";


    




const ActivityComplete = ({user, title, activityDate, category, description, place, location}) =>{
    

    const { t } = useTranslation("global");

// console.log(location);
// console.log(location.location);

    return(
    <article>
            <InterestBtn people="5" />
            {/* <p className="category">{category.categoryName}</p> */}
            <h1 class="title">{title}</h1>
            <div class="row">
                {/* <ActivityData type="user" info={user.userName}></ActivityData> */}
                <ActivityData type="date" info={moment(activityDate).format('DD/MM/YYYY')}/>
                {/* <ActivityData type="location" info={location.location}/> */}
            </div>
            <p class="place">Lugar <b>{place}</b></p>
            <p class="activity-body">{description}</p>
            <div class="row ends">
                <button class="singup-btn">¡Quiero apuntarme!</button>
                <SignedUpPeople people="1" />
            </div> 
    </article>

    );


    
    

};


export default ActivityComplete;