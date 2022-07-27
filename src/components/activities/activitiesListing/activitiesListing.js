import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Page from "../../layout/Page";
import ActivitySimple from "../activitySingle/activitySimple";
import EmptyList from "../common/emptyList";
import FiltersForm from "../common/filtersForm";
import { getActivities } from "../service";


const useActivities = ({categoryFilter, locationFilter, dateFilter}) => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
      getActivities(categoryFilter, locationFilter, dateFilter).then(activities => {
       setActivities(activities.results)
   })
    },[categoryFilter, locationFilter, dateFilter])
    return activities;
  };




  const ActivitiesPage = () =>{
    const { t } = useTranslation("global");

    const [allFilters, setAllFilters] = useState({});
    
    const allActivities = useActivities(allFilters);


    return (
        <Page
        title={t("activities-listing.title")}
        subtitle={t("activities-listing.subtitle")}
        pageClass="listing-container"
      >    
      <FiltersForm categorySet={setAllFilters} />
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