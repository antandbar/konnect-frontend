import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserDetail } from "../../auth/service";
import Page from "../../layout/Page";
import ActivityComplete from "../activitySingle/activityComplete";
import { getActivity, getCreator } from "../service";


const useActivity = (id) =>{
    const [activity, setActivity] = useState();
    useEffect(() => {
      getActivity(id).then(activity => {
        setActivity(activity.results[0])
    })
    },[id])
    return activity;
}




const useCreator = (id) =>{
  const [creator, setCreator] = useState();
  useEffect(() => {
    getCreator(id).then(creator => {
      // setCreator(creator.results[0].user.id);
      const userId = creator.results[0].user.id;
      getUserDetail(userId).then(details => {
        setCreator(details.results[0])
    })     })
  },[id])
  return creator;
}


const ActivityPage = () => {

    const { activityId } = useParams();
    
    const activity = useActivity(activityId);
    const creatorInfo = useCreator(activityId);


    return(
        <Page
        pageClass="activity-detail activities-section"
      >    
        <ActivityComplete user={creatorInfo} {...activity} />

    </Page>

    );
};


export default ActivityPage;


