import Page from '../layout/Page';
import InputStandar from '../common/InputStandar';
import TextArea from '../common/TextAreaStandar';
import { useTranslation } from 'react-i18next';


const ProfilePage = () => {
  const { t } = useTranslation("global");

  //RECIBIMOS LOS VALORES
  const userName = "Username";
  const name = "Name";
  const email = 'example@gmail.com';
  const password = "123456";
  const age = '40';
  const location = "Location";
  const gender = "Mujer";
  const bio = "Lorem ipsum dolor sit amet";

  

  return (
    <Page title={t("my-account.title")}
    pageClass="account-content form"
    >
        <InputStandar
          label={t("my-account.user-name")}
          value={userName}
          type="text"
          className={'formfield'}
          required
        />

        <InputStandar
          label={t("my-account.email")}
          type="email"
          value={email}
          className={'formfield'}
          required
        />

        <InputStandar
          label={t("my-account.name")}
          value={name}
          type="text"
          className={'formfield'}
          required
        />

    

<InputStandar
          label={t("my-account.password")}
          value={password}
          type="password"
          className={'formfield'}
          required
        />

<InputStandar
          label={t("my-account.gender")}
          value={gender}
          type="text"
          className={'formfield'}
          required
        />

        <InputStandar
          label={t("my-account.age")}
          value={age}
          type="number"
          className={'formfield'}
          required
        />

<InputStandar
          label={t("my-account.location")}
          value={location}
          type="text"
          className={'formfield'}
          required
        />
        
        <TextArea
          label={t("my-account.bio")}
          value={bio}
          className={'formfield'}
          rows={5}
          required
        />

       
    </Page>
  );
};

export default ProfilePage;
