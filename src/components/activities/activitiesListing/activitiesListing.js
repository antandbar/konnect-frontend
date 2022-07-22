import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Page from "../../layout/Page";
import ActivitySimple from "../activitySingle/activitySimple";
import Filters from "../common/filters";
import { getActivities } from "../service";


const useActivities = () => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
      getActivities().then(activities => {
        setActivities(activities.results)
    })
    },[])
    return activities;
  };


  const EmptyList = () => (
    <div>
      <p>No hay actividades para mostrar.</p>
    </div>
  );


  const ActivitiesPage = () =>{
    const { t } = useTranslation("global");

    const allActivities = useActivities();


    return (
        <Page
        title={t("activities-listing.title")}
        subtitle={t("activities-listing.subtitle")}
        pageClass="listing-container"
      >    
<Filters />      
        {
            allActivities.length
            ?(
                <section className="activities-listing activities-section">
                {allActivities.map(activity => 
                <ActivitySimple key={activity.id} {...activity}/>
                )}  
                </section>
            )
            :(<EmptyList />
            )
            }
                  
        </Page>
      );


  };



  export default ActivitiesPage;