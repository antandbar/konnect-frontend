import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Page from "../../layout/Page";
import ActivityComplete from "../activitySingle/activityComplete";
import { getActivity, getCreator, getUserDetail } from "../service";


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
      setCreator(creator.results[0].user.id);
     })
  },[id])
  return creator;
}


const useUserDetail = (id) =>{
  const [details, setDetails] = useState();
  useEffect(() => {
    getUserDetail(id).then(details => {
      setDetails(details.results[0])
  })
  },[id])
  return details;
}




const ActivityPage = () => {

    const { activityId } = useParams();
    
    const activity = useActivity(activityId);
    const creatorID = useCreator(activityId);
    const creatorInfo = useUserDetail(creatorID);

    console.log(creatorInfo);

    return(
        <Page
        pageClass="activity-detail activities-section"
      >    
        <ActivityComplete user={creatorInfo} {...activity} />

    </Page>

    );
};


export default ActivityPage;


