import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Page from '../layout/Page';
import InputStandar from '../common/InputStandar';
import Selector from '../common/Selector';
import TextArea from '../common/TextAreaStandar';
import next from '../../assets/img/next.svg';
import prev from '../../assets/img/prev.svg';
import Button from '../common/Button';
import '../style.css';
import '../../assets/js/script.js';

const NewActivity = () => {
  const { t } = useTranslation("global");
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [place, setPlace] = useState('');
  const [limit, setLimit] = useState('');
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
    //setIsMale(e.target.value);
  };

  const handleSelectorLocation = e => {
    //setLocations([e.target.value]);
  };

  const handleInputLimit = e => {
    setLimit(e.target.value);
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
      subtitle={t("create-activity.subtitle1")}
    >
      <form onSubmit={handleSubmit}>
        <article className="register-group" id="group-1">
          <p className="fieldgroup-title">{t("create-activity.tell-plan")}</p>
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
          <p className="fieldgroup-title">{t("create-activity.subtitle2")}</p>
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

          <InputStandar
            onChange={handleInputLimit}
            label={t("create-activity.attendance")}
            value={limit}
            type="number"
            className={'formfield'}
            required
          />

          <div className="form-controls">
            <img className="step-btn" name="prev" src={prev} alt="prev" />
          </div>
          <Button type="submit" variant="primary" className="submit-btn">
          {t("create-activity.create-activity")}
          </Button>
        </article>
      </form>
    </Page>
  );
};

export default NewActivity;
