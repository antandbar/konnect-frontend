import { useEffect, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Page from '../../layout/Page';
import InputStandar from '../../common/InputStandar';
import Selector from '../../common/Selector';
import TextAreaStandar from '../../common/TextAreaStandar';
import InputSubmit from '../../common/InputSubmit';
import { createActivity, createStatus, getCategories, getLocations } from '../service';
import { useNavigate } from 'react-router-dom';
import FormControls from '../../common/FormControls';
import FormGroup from '../../common/FormGroup';
import { useAppLocation, useCategories } from '../../utility/getData';
import { getLoggedUser } from '../../auth/service';
import CategoriesCombo from '../common/categoriesCombo';
import LocationsCombo from '../common/locationCombo';
import { useAuth } from '../../auth/context';
import moment from 'moment';

const useLoggedUserId = () =>{
  const [user, setUser] = useState();
  useEffect(() => {
    getLoggedUser().then(userData => {
    setUser(userData.userId);
    })
  },[])
  return user;
}


const NewActivity = () => {
  
  const { t } = useTranslation("global");
  const navigate = useNavigate();

  const locations = useAppLocation();


  const [info, setInfo] = useState({
    title:"",
    description:"",
    activityDate: "",
    locationId: "",
    place: "",
    categoryId: ""
  });
 
  const{title, description, activityDate, locationId, place, categoryId} = info;
  
  const { loggedUser} = useAuth();


  const handleInput = (e) => {
    setInfo(info =>({
      ...info,
      [e.target.name]: e.target.value
    }));
  };


  const buttonDisabled = useMemo(() => {
    return !title || !description || !activityDate || !locationId || !place || !categoryId;
  }, [title, description, activityDate, locationId, place, categoryId]);



 
  const handleSubmit =  (event) => {
    event.preventDefault();

    createActivity(info).then((createdActivity) => {
      const data = {
        "userId":loggedUser,
        "activityId":createdActivity.results.id,
        "userStatusId":1   
       };
      createStatus(data);
      navigate(`/activities/${createdActivity.results.id}`);
    }).catch((error) => {
      console.error(error);
    });

  }



  return (
    <Page
      title={t("create-activity.title")}
      subtitle={t("create-activity.subtitle")}
      pageClass="register-form form"
    >


      <form onSubmit={handleSubmit}>
        
          <FormGroup
          id="group-1"
          className="register-group"
          groupTitle={t("create-activity.group-one-title")}
          >
          <InputStandar
            onChange={handleInput}
            name="title"
            label={t("create-activity.name")}
            value={title}
            type="text"
            className={'formfield'}
            required
          />


          <TextAreaStandar
            onChange={handleInput}
            name="description"
            label={t("create-activity.detail")}
            value={description}
            className={'formfield'}
            rows={3}
            required
          />

<CategoriesCombo
handleChange={handleInput}
defaultValue={categoryId}
/>

        
        <FormControls
                  prevBtn={false}
                  nextBtn={true}>
                  </FormControls>
                  </FormGroup>

                  <FormGroup
          id="group-2"
          className="register-group"
          groupTitle={t("create-activity.group-two-title")}
          >
        
          <InputStandar
            onChange={handleInput}
            name="activityDate"
            label={t("create-activity.date")}
            value={activityDate}
            type="date"
            className={'formfield'}
            required
            min={moment().format('YYYY-MM-DD')}
          />


<LocationsCombo
handleChange={handleInput}
defaultValue={locationId}
/>



          <InputStandar
            onChange={handleInput}
            label={t("create-activity.place")}
            name="place"
            value={place}
            type="text"
            className={'formfield'}
            required
          />

          <FormControls
                  prevBtn={true}
                  nextBtn={false}>
                  </FormControls>
         
          <InputSubmit
            label={t("create-activity.create-activity")}
            className={'submit-btn'}
            disabled={buttonDisabled}
          />
           </FormGroup>
      </form>
    </Page>

  );
};

export default NewActivity;
