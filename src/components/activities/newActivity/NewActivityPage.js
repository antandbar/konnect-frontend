import { useEffect, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Page from '../../layout/Page';
import InputStandar from '../../common/InputStandar';
import Selector from '../../common/Selector';
import TextAreaStandar from '../../common/TextAreaStandar';
import InputSubmit from '../../common/InputSubmit';
import { createActivity, getCategories, getLocations } from '../service';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import FormControls from '../../common/FormControls';
import FormGroup from '../../common/FormGroup';



const useCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then(categories => {
        const results =  categories.results;
        const categoryArr = results.map((category) => category);
      setCategories(categoryArr);
  })
  },[])
  return categories;
};

const useLocation = () => {
  const [locations, setlocations] = useState([]);
  useEffect(() => {
    getLocations().then(locations => {
        const results =  locations.results;
        const locationArr = results.map((locations) => locations);
        setlocations(locationArr);
  })
  },[])
  return locations;
};



const NewActivity = () => {
  
  const { t } = useTranslation("global");
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  //const categories = useCategories();
  //const locations = useLocation();
  

  const [info, setInfo] = useState({
    title:"",
    description:"",
    activityDate: '',
    locationId: 1,
    place: "",
    categoryId:1
  });
 
  const{title, description, activityDate, locationId, place, categoryId} = info;


  const handleInput = (e) => {
    setInfo(info =>({
      ...info,
      [e.target.name]: e.target.value
    }));
  };


  const handleInputDate = e => {

    const newDate = moment(new Date(e.target.value)).format('YYYY-MM-DD');
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
   navigate(`/adverts/${createdActivity.id}`);
  } catch (error) {
    setError(error);
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


{/*
<Selector
            tags={categories}
            handleSelector={handleSelectorCategory}
            label={t("create-activity.category")}
            className={'formfield'}
            required
          />
*/}
        
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
            onChange={handleInputDate}
            name="activityDate"
            label={t("create-activity.date")}
            value={activityDate}
            type="date"
            className={'formfield'}
            required
          />

{/* 
<Selector
            tags={locations}
            handleSelector={handleSelectorCategory}
            label={t("create-activity.location")}
            className={'formfield'}
            required
          />
           */}


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