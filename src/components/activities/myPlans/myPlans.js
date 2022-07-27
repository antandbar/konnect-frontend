import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../auth/context";
import Page from "../../layout/Page";
import ActivitySimple from "../activitySingle/activitySimple";
import EmptyList from "../common/emptyList";
import { getActivitiesRelation } from "../service";


const useActivities = (type, loggedUser) => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
     getActivitiesRelation(type, loggedUser, '').then(results => {
        const newArr = results.results.map(({activity}) =>{
                return activity;
        }); 
        setActivities(newArr);
     })
    },[type, loggedUser])
    return activities;
  };


const Myplans = () => {
    const { t } = useTranslation("global");

    const { loggedUser} = useAuth();
    const [type, setType] = useState('1');
   const activities = useActivities(type, loggedUser);




    return (
        <Page
        title={t("my-plans.title")}
      >    
<section className="plans-selector">
<div className={( type === '1' ) ? 'activo' : '' } onClick={() => setType('1')}>{t("my-plans.created")}</div>
                <div className={( type === '3' ) ? 'activo' : '' }  onClick={() => setType('3')}>{t("my-plans.fav")}</div>
                <div className={( type === '2' ) ? 'activo' : '' }  onClick={() => setType('2')}>{t("my-plans.signedup")}</div>
            </section>

            <section className="activities-plans activities-section">

                      {
            activities.length
            ?(
              <>

                {activities.map(activity => 
                <ActivitySimple key={activity.id} {...activity}/>
                )}  
              </>
            )
            :(<EmptyList />
            )
            }
                </section>

            </Page>
          
    );
}


export default Myplans;