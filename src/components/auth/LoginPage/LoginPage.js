import Page from "../../layout/Page";
import { useTranslation } from "react-i18next";
import InputSubmit from "../../common/InputSubmit";
import InputStandar from "../../common/InputStandar";
import { useState } from "react";


const LoginPage = () => {
  const { t } = useTranslation("global");

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const handleInputEmail = e =>{
  setEmail(e.target.value);

}

const handleInputPassword = e =>{
  setPassword(e.target.value);

}


  return (


    <Page title={t("login.title")}
    pageClass="form login-form"

    >
                  <form>
                                        <InputStandar
                        onChange={handleInputEmail}
                        label={t("login.email")}
                        value={email}
                        type="email"
                        className={'formfield'}
                        required
                      />
                                  <InputStandar
                        onChange={handleInputPassword}
                        label={t("login.password")}
                        value={password}
                        type="password"
                        className={'formfield'}
                        required
                      />
                                                        
                                  <InputSubmit
                        label={t("login.register")}
                        className={'submit-btn'}
                      />                        
            </form>   


        <section className="link-to-registro">
            <p>
Si aún no tienes una cuenta en konnect no esperes más y <a href="./register.html">registrate</a>. </p>
        </section>
</Page>

   
  );
};

export default LoginPage;
