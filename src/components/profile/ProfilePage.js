import { useState } from 'react';
import Page from '../layout/Page';
import InputStandar from '../common/InputStandar';
import Selector from '../common/Selector';
import TextArea from '../common/TextAreaStandar';
import Button from '../common/Button';
import { useTranslation } from 'react-i18next';
import '../style.css';

const ProfilePage = () => {
  const { t } = useTranslation("global");
  const [userName, setUserName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [age, setAge] = useState('');
  const [locations, setLocations] = useState(['Madrid', 'Sevilla']);
  const [genders, setGenders] = useState(['Hombre', 'Mujer']);
  const [bio, setBio] = useState('');

  const handleInputBio = e => {
    setBio(e.target.value);
  };

  const handleInputGender = e => {
    //setIsMale(e.target.value);
  };

  const handleSelector = e => {
    //setLocations([e.target.value]);
  };

  const handleInputAge = e => {
    setAge(e.target.value);
  };

  const handleInputPwd = e => {
    setPwd(e.target.value);
  };
  const handleInputEmail = e => {
    setEmail(e.target.value);
  };
  const handleInputUserName = e => {
    setUserName(e.target.value);
  };

  const handleInputName = e => {
    setName(e.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
  };

  return (
    <Page title={t("my-account.title")}>
      <form onSubmit={handleSubmit}>
        <InputStandar
          onChange={handleInputUserName}
          label={t("my-account.user-name")}
          value={userName}
          type="text"
          className={'formfield'}
          required
        />

        <InputStandar
          onChange={handleInputEmail}
          label={t("my-account.email")}
          type="email"
          value={email}
          className={'formfield'}
          required
        />

        <InputStandar
          onChange={handleInputName}
          label={t("my-account.name")}
          value={name}
          type="text"
          className={'formfield'}
          required
        />

        <InputStandar
          onChange={handleInputPwd}
          label={t("my-account.password")}
          value={pwd}
          type="password"
          className={'formfield'}
          required
        />

        <InputStandar
          onChange={handleInputAge}
          label={t("my-account.age")}
          value={age}
          type="number"
          className={'formfield'}
          required
        />

        <Selector
          tags={genders}
          handleSelector={handleInputGender}
          label={t("my-account.gender")}
          className={'formfield'}
          required
        />
        <Selector
          tags={locations}
          handleSelector={handleSelector}
          label={t("my-account.location")}
          className={'formfield'}
          required
        />

        <TextArea
          onChange={handleInputBio}
          label={t("my-account.bio")}
          value={bio}
          className={'formfield'}
          rows={5}
          required
        />
        <Button type="submit" variant="primary" className="submit-btn">
        {t("my-account.update-profile")}
        </Button>
      </form>
    </Page>
  );
};

export default ProfilePage;
