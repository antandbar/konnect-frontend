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
            default:
        }

    },[type])
  
    return typeIcon;
}


const useClass = (type) => {
    const [newClass, setNewClass] = useState();
    useEffect(() => {
    if(type === "user"){
        setNewClass("user-profile activity-data");
       }else{
        setNewClass("activity-data");
       }
    },[type])
  
    return newClass;
}



const ActivityData = ({ type, info }) => {
    
    const icon = useIcon(type);
    
    const newClass = useClass(type);
    

    return (
        <p className={newClass}>
            <img className="icon" src={icon} alt="icono"/>
            {info}
        </p>

    );
  };
  
  export default ActivityData;
  