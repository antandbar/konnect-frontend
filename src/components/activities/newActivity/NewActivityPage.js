import { useEffect, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Page from '../../layout/Page';
import InputStandar from '../../common/InputStandar';
import Selector from '../../common/Selector';
import TextAreaStandar from '../../common/TextAreaStandar';
import InputSubmit from '../../common/InputSubmit';
import { createActivity, getCategories, getLocations } from '../service';
import { useLocation, useNavigate } from 'react-router-dom';
import FormControls from '../../common/FormControls';
import FormGroup from '../../common/FormGroup';
import { useCategories } from '../../utility/getData';





const NewActivity = () => {
  
  const { t } = useTranslation("global");
  const navigate = useNavigate();

  const categories = useCategories();
  const locations = useLocation();



  const [info, setInfo] = useState({
    title:"",
    description:"",
    activityDate: "",
    locationId: "",
    place: "",
    categoryId: ""
  });
 
  const{title, description, activityDate, locationId, place, categoryId} = info;


  const handleInput = (e) => {
    setInfo(info =>({
      ...info,
      [e.target.name]: e.target.value
    }));
  };


  const buttonDisabled = useMemo(() => {
    return !title || !description || !activityDate || !locationId || !place || !categoryId;
  }, [title, description, activityDate, locationId, place, categoryId]);



  const handleSubmit = async event => {
    event.preventDefault();
 
  try {
    const createdActivity = await createActivity(info);
    // const createRelation = await creatorRelation(createdActivity.id, userId);
   navigate(`/adverts/${createdActivity.id}`);
  } catch (error) {
    console.log(error);
  }
  };

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


{/* <Selector
            tags={categories}
            handleChange={handleInput}
            label={t("create-activity.category")}
            className={'formfield'}
            value={categoryId}
            name="categoryId"
            required
          /> */}

        
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
          />


{/* <Selector
            tags={locations}
            handleChange={handleInput}
            label={t("create-activity.location")}
            className={'formfield'}
            value={locationId}
            name="locationId"
            required
          /> */}


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
