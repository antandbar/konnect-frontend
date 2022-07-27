import moment from 'moment';
import ActivityData from "../common/activityData";
import ActivityTitle from "../common/activityTitle";
import InterestElem from "../common/interestElem";
import { useAuth } from "../../auth/context";
import SignUp from "../common/singnUp";
import { useAppLocation, useCategories } from '../../utility/getData';
import { useEffect, useState } from 'react';
import { getCreator } from '../service';


const useCreator = (id) =>{
    const [creator, setCreator] = useState();
    useEffect(() => {
      getCreator(id).then(creator => {
        setCreator(creator.results[0].user)
      })
    },[id])
    return creator;
  }

const ActivitySimple = ({title, activityDate, category, categoryId, location, locationId, id}) =>{
      
    const { loggedUser } = useAuth();
    const activityCreator = useCreator(id);

    const categories = useCategories();
    const locations = useAppLocation();

    const propertyIdtoName = (arr, id) =>{
        const newArr = arr.filter(item => item.id === id);
        return newArr[0]?.name;
    }

    const cat = propertyIdtoName(categories, categoryId);
    const loc = propertyIdtoName(locations, locationId);


    return(
        <article className="activities-item" key={id}>
    
           <InterestElem actId={id} creator={activityCreator?.id } loggedUser={loggedUser}/>
            <p className="category">{category?.categoryName || cat}</p>  
            <ActivityTitle title={title} linkId={id} />
            <div className="row">
                <ActivityData type="date" info={moment(activityDate).format('DD/MM/YYYY')}/>
                <ActivityData type="location" info={location?.location || loc}/>
            </div>
            <SignUp actId={id} creator={activityCreator?.id} loggedUser={loggedUser}/>
        </article>
    );



};


export default ActivitySimple;