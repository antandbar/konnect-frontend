import peopleIcon from "../../../assets/img/user.svg";
import moment from 'moment';
import { useTranslation } from "react-i18next";
import ActivityData from "../common/activityData";
import ActivityTitle from "../common/activityTitle";
import InterestBtn from "../common/interestBtn";
import SignedUpPeople from "../common/signedupPeople";

const ActivitySimple = ({title, activityDate, category, location, id}) =>{




    return(
        <article className="activities-item" key={id}>
            <InterestBtn actId={id} />
            <p className="category">{category.categoryName}</p> 
            <ActivityTitle title={title} linkId={id} />
            <div className="row">
                <ActivityData type="date" info={moment(activityDate).format('DD/MM/YYYY')}/>
                <ActivityData type="location" info={location.location}/>
            </div>
            <SignedUpPeople actId={id} />
        </article>
    );



};


export default ActivitySimple;