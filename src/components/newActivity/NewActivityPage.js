import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Page from '../layout/Page';
import InputStandar from '../common/InputStandar';
import Selector from '../common/Selector';
import TextArea from '../common/TextAreaStandar';
import next from '../../assets/img/next.svg';
import prev from '../../assets/img/prev.svg';
import InputSubmit from '../common/InputSubmit';



const NewActivity = () => {
  const { t } = useTranslation("global");
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [place, setPlace] = useState('');
  const [locations, setLocations] = useState(['Madrid', 'Sevilla']);
  const [category, setCategory] = useState([
    'Exposiciones',
    'Ocio',
    'Deportes',
  ]);
  const [describe, setDescribe] = useState('');

  const handleInputDescribe = e => {
    setDescribe(e.target.value);
  };

  const handleSelectorCategory = e => {
    setCategory([e.target.value]);
  };


  const handleSelectorLocation = e => {
    setLocations([e.target.value]);
  };

 
  const handleInputPlace = e => {
    setPlace(e.target.value);
  };
  const handleInputTitle = e => {
    setTitle(e.target.value);
  };

  const handleInputDate = e => {
    setDate(e.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
  };

  return (
    <Page
      title={t("create-activity.title")}
      subtitle={t("create-activity.subtitle")}
      pageClass="register-form form"
    >
      <form onSubmit={handleSubmit}>
        <article className="register-group" id="group-1">
          <p className="fieldgroup-title">{t("create-activity.group-one-title")}</p>
          <InputStandar
            onChange={handleInputTitle}
            label={t("create-activity.name")}
            value={title}
            type="text"
            className={'formfield'}
            required
          />

          <TextArea
            onChange={handleInputDescribe}
            label={t("create-activity.detail")}
            value={describe}
            className={'formfield'}
            rows={3}
            required
          />

          <Selector
            tags={category}
            handleSelector={handleSelectorCategory}
            label={t("create-activity.category")}
            className={'formfield'}
            required
          />
          <div className="form-controls">
            <img className="step-btn" name="next" src={next} alt="next" />
          </div>
        </article>
        <article className="register-group" id="group-2">
          <p className="fieldgroup-title">{t("create-activity.group-two-title")}</p>
          <InputStandar
            onChange={handleInputDate}
            label={t("create-activity.date")}
            value={date}
            type="date"
            className={'formfield'}
            required
          />

          <Selector
            tags={locations}
            handleSelector={handleSelectorLocation}
            label={t("create-activity.location")}
            className={'formfield'}
            required
          />

          <InputStandar
            onChange={handleInputPlace}
            label={t("create-activity.place")}
            value={place}
            type="text"
            className={'formfield'}
            required
          />

          <div className="form-controls">
            <img className="step-btn" name="prev" src={prev} alt="prev" />
          </div>
         
          <InputSubmit
            label={t("create-activity.create-activity")}
            className={'submit-btn'}
          />
        </article>
      </form>
    </Page>
  );
};

export default NewActivity;
