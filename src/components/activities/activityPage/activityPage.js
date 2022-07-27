import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Page from "../../layout/Page";
import ActivityComplete from "../activitySingle/activityComplete";
import { getActivity } from "../service";


const useActivity = (id) =>{
    const [activity, setActivity] = useState();
    const navigate = useNavigate();

    useEffect(() => {
      getActivity(id).then(activity => {
        setActivity(activity.results[0])
        if(activity.results.length === 0){
          navigate('/404')
        }
    }).catch(() =>{
      navigate('/404')
    })

  
    },[id])
    return activity;
}



const ActivityPage = () => {

    const { activityId } = useParams();
    const activity = useActivity(activityId);

    return(
        <Page
        pageClass="activity-detail activities-section"
      >    
        <ActivityComplete actId={activityId} {...activity} />

    </Page>

    );
};


export default ActivityPage;


