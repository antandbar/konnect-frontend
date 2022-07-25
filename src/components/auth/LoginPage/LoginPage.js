import Page from "../../layout/Page";
import { useTranslation } from "react-i18next";
import InputSubmit from "../../common/InputSubmit";
import InputStandar from "../../common/InputStandar";
import { useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getLoggedUser, login } from "../service";
import T from 'prop-types';

const LoginPage = ({onLogin}) => {
  const { t } = useTranslation("global");

  const navigate = useNavigate();
  const location = useLocation();
  const [credentials, setCredentials] = useState({
    'email': '',
    'password': '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { email, password } = credentials;


  const handleChange = (event) => {
    setCredentials(credentials => ({
      ...credentials,
      [event.target.name]:
      event.target.value,
    }));
  }; 


  const resetError = () => setError(null);


const buttonDisabled = useMemo(() => {
  return !email || !password || isLoading;
}, [email, password, isLoading]);


const handleSubmit = async event => {
  event.preventDefault();
  try {
    resetError();
    setIsLoading(true);
    await login(credentials);
    setIsLoading(false);
    getLoggedUser().then((userId) => {
       onLogin(userId);
       const from = location.state?.from?.pathname || '/';
    navigate(from, { replace: true });
    })

    
  } catch (error) {
    setError(error);
    setIsLoading(false);
  }
};


  return (

    <Page title={t("login.title")}
    pageClass="form login-form"
    >
                  <form onSubmit={handleSubmit}>
                        <InputStandar
                        onChange={handleChange}
                        label={t("login.email")}
                        name="email"
                        value={email}
                        type="email"
                        className={'formfield'}
                        required
                      />
                                  <InputStandar
                        onChange={handleChange}
                        label={t("login.password")}
                        value={password}
                        name="password"
                        type="password"
                        className={'formfield'}
                        required
                      />

                                                        
                                  <InputSubmit
                        label={t("login.send")}
                        className={'submit-btn'}
                        disabled={buttonDisabled}
                      />                        
            </form>   


        <section className="link-to-registro">
              <p>
              {t("login.register")}
              <Link to="/register"> {t("login.register-link")}</Link>
              .</p>
        </section>
</Page>

   
  );
};


LoginPage.propTypes = {
  onLogin: T.func,
};


export default LoginPage;
