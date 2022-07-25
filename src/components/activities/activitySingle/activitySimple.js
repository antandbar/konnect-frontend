import moment from 'moment';
import ActivityData from "../common/activityData";
import ActivityTitle from "../common/activityTitle";
import InterestElem from "../common/interestElem";
import { useAuth } from "../../auth/context";
import SignUp from "../common/singnUp";

const ActivitySimple = ({title, activityDate, category, location, id}) =>{
   
    //const allLocations = useAppLocation();
   
    const { loggedUser } = useAuth();

   

    return(
        <article className="activities-item" key={id}>
            <InterestElem actId={id} loggedUser={loggedUser}/>
            {/* <p className="category">{category.categoryName}</p>  */}
            <ActivityTitle title={title} linkId={id} />
            <div className="row">
                <ActivityData type="date" info={moment(activityDate).format('DD/MM/YYYY')}/>
                {/* <ActivityData type="location" info={location.location}/> */}
            </div>
            <SignUp actId={id} loggedUser={loggedUser}/>
        </article>
    );



};


export default ActivitySimple;