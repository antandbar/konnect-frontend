import { useEffect, useState } from "react";
import dateIcon from "../../../assets/img/calendar.svg";
import locationIcon from "../../../assets/img/place.svg";



const useIcon = (type) => {

    const [typeIcon, setTypeIcon] = useState();
    useEffect(() => {
        switch(type){
            case 'date':
                setTypeIcon(dateIcon)
                break;
            case 'location':
                setTypeIcon(locationIcon)
                break;
        }

    },[])
  
    return typeIcon;
}



const ActivityData = ({ type, info }) => {
    
    const icon = useIcon(type);
    
    return (
        <p className="activity-data">
            <img className="icon"src={icon}/>
            {info}
        </p>

    );
  };
  
  export default ActivityData;
  