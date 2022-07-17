import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Page from "../../layout/Page";
import ActivityComplete from "../activitySingle/activityComplete";
import { getActivity } from "../service";


const useActivity = (id) =>{
    const [activity, setActivity] = useState();
    useEffect(() => {
      getActivity(id).then(activity => {
        setActivity(activity)
        // setActivity(activity.results)
    })
    },[])
    return activity;
}


const ActivityPage = () => {

    const { activityId} = useParams();
    // const activity = useActivity(activityId);

    return(
        <Page
        pageClass="activity-detail activities-section"
      >    
        <ActivityComplete/>
        {/* <ActivityComplete {...activity} /> */}

    </Page>

    );
};


export default ActivityPage;


