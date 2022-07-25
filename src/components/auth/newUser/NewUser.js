import Page from "../../layout/Page";
import { useTranslation } from "react-i18next";
import InputStandar from "../../common/InputStandar";
import InputSubmit from "../../common/InputSubmit";
import FormControls from "../../common/FormControls";
import FormGroup from "../../common/FormGroup";
import TextAreaStandar from "../../common/TextAreaStandar";
import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import LocationsCombo from "../../activities/common/locationCombo";
import { createUser } from "../service";
import moment from "moment";

const NewUser = () => {
  const { t } = useTranslation("global");

  const navigate = useNavigate();


  const [info, setInfo] = useState({
    userName:"",
    name:"",
    email: "",
    password: "",
    birthDate: "",
    userLocation: "",
    gender:"",
    bio:""
  });

  const { userName, name, email, password, birthDate, userLocation, gender, bio} = info;


  const handleInput = (e) => {
    setInfo(info =>({
      ...info,
      [e.target.name]: e.target.value
    }));
  };


   const buttonDisabled = useMemo(() => {
     return !userName || !name || !email || !password || !birthDate || !userLocation || !gender || !bio;
   }, [userName, name, email, password, birthDate, userLocation, gender, bio]);

 

  const handleSubmit =  (event) => {
    event.preventDefault();
    
    try {
      createUser(info);
      navigate(`/login`);
    } catch (error) {
      console.log(error);
    }

  }


  return(
<Page title={t("new-user.title")}
      subtitle={t("new-user.subtitle")}
    pageClass="form register-form"
    >
      <form onSubmit={handleSubmit}>
          <FormGroup
          id="group-1"
          className="register-group"
          groupTitle={t("new-user.group-one-title")}
          >
                  <InputStandar
                    label={t("new-user.username")}
                    type="text"
                    className={'formfield'}
                    required
                    onChange={handleInput}
                    name="userName"
                    defaultValue={userName}
                  />

<InputStandar
                    label={t("new-user.email")}
                    type="email"
                    className={'formfield'}
                    required
                    onChange={handleInput}
                    name="email"
                    defaultValue={email}
                  />

<InputStandar
                    label={t("new-user.password")}
                    type="password"
                    className={'formfield'}
                    required
                    onChange={handleInput}
                    name="password"
                    defaultValue={password}
                  />
           
                  <FormControls
                  prevBtn={false}
                  nextBtn={true}>
                  </FormControls>

          </FormGroup>
         
         
        
          <FormGroup
          id="group-2"
          className="register-group"
          groupTitle={t("new-user.group-two-title")}
          >
     
    
              <InputStandar
                    label={t("new-user.name")}
                    type="text"
                    className={'formfield'}
                    onChange={handleInput}
                    name="name"
                    defaultValue={name}
                    />

              <InputStandar
                    label={t("new-user.date")}
                    type="date"
                    className={'formfield'}
                    onChange={handleInput}
                    name="birthDate"
                    defaultValue={birthDate}
                    max={moment().subtract(18, 'years').format('YYYY-MM-DD')}
                    /> 


<InputStandar
                    label={t("new-user.gender")}
                    type="text"
                    className={'formfield'}
                    onChange={handleInput}
                    name="gender"
                    defaultValue={gender}
                    />


<LocationsCombo
handleChange={handleInput}
defaultValue={userLocation}
/>



         <FormControls
prevBtn={true}
nextBtn={true}>
</FormControls>
         
        </FormGroup>
     
        <FormGroup
          id="group-3"
          className="register-group"
          groupTitle={t("new-user.group-three-title")}
          >
         
         <TextAreaStandar
            label={t("new-user.bio")}
            className={'formfield'}
            rows={3}
            required
            onChange={handleInput}
            name="bio"
            defaultValue={bio}
          />

         <FormControls
prevBtn={true}
nextBtn={false}>
</FormControls>
         
         
          <InputSubmit
            label={t("new-user.register-btn")}
            className={'submit-btn'}
            disabled={buttonDisabled}

          />
        </FormGroup>

      </form>
      </Page>
        )
  
  };
  
  export default NewUser;
  