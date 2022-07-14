import Page from "../layout/Page";
import { useTranslation } from "react-i18next";
import InputStandar from "../common/InputStandar";
import InputSubmit from "../common/InputSubmit";
import FormControls from "../common/FormControls";
import FormGroup from "../common/FormGroup";
import TextAreaStandar from "../common/TextAreaStandar";

const NewUser = () => {
  const { t } = useTranslation("global");


  return(
<Page title={t("new-user.title")}
      subtitle={t("new-user.subtitle")}
    pageClass="form register-form"
    >
  <form>
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
                  />

<InputStandar
                    label={t("new-user.email")}
                    type="email"
                    className={'formfield'}
                    required
                  />

<InputStandar
                    label={t("new-user.password")}
                    type="password"
                    className={'formfield'}
                    required
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
                    className={'formfield'}/>

              <InputStandar
                    label={t("new-user.date")}
                    type="date"
                    className={'formfield'}/>

{/* RADIO - Gender */}
{ /* SELECT - location */}


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
          />

         <FormControls
prevBtn={true}
nextBtn={false}>
</FormControls>
         
         
          <InputSubmit
            label={t("new-user.register-btn")}
            className={'submit-btn'}
          />
        </FormGroup>

      </form>
      </Page>
        )
  
  };
  
  export default NewUser;
  