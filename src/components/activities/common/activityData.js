import { useEffect, useState } from "react";
import dateIcon from "../../../assets/img/calendar.svg";
import locationIcon from "../../../assets/img/place.svg";
import userIcon from "../../../assets/img/user-buble.svg";



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
            case 'user':
                setTypeIcon(userIcon)
                break;
        }

    },[type])
  
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
  