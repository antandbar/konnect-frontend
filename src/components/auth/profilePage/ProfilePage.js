import Page from '../../layout/Page';
import InputStandar from '../../common/InputStandar';
import TextArea from '../../common/TextAreaStandar';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { getLoggedUser, getUserDetail } from '../service';
import moment from 'moment';
import { useAuth } from '../context';




const useUserData = (id) =>{
  const [user, setUser] = useState();

  useEffect(() => {
      getUserDetail(id).then(user => {
        setUser(user.results[0])
      })
  },[])
  return user;
}



const ProfilePage = () => {
  const { t } = useTranslation("global");

  const { loggedUser} = useAuth();


  const userData = useUserData(loggedUser);


  return (
    <Page title={t("my-account.title")}
    pageClass="account-content form"
    >

    {
    userData != undefined
    ? (
      <div>
      <InputStandar
      label={t("my-account.user-name")}
      defaultValue={userData.userName}
      type="text"
      className={'formfield'}
      readOnly
    />

    <InputStandar
      label={t("my-account.email")}
      type="email"
      defaultValue={userData.email}
      className={'formfield'}
      readOnly
    />

    <InputStandar
      label={t("my-account.name")}
      defaultValue={userData.name}
      type="text"
      className={'formfield'}
      readOnly
    />



<InputStandar
      label={t("my-account.gender")}
      defaultValue={userData.gender}
      type="text"
      className={'formfield'}
      readOnly
    />

    <InputStandar
      label={t("my-account.age")}
      value={(moment(userData.bithDate).format('DD/MM/YYYY'))}
      type="text"
      className={'formfield'}
      readOnly
    />

<InputStandar
      label={t("my-account.location")}
      defaultValue={userData.userLocation}
      type="text"
      className={'formfield'}
      readOnly
    />
    
    <TextArea
      label={t("my-account.bio")}
      defaultValue={userData.bio}
      className={'formfield'}
      rows={5}
      readOnly
    />
</div>
    )
    :(<p>No info to show</p>)}
  
       

       
    </Page>
  );
};

export default ProfilePage;
