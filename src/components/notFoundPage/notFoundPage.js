import Page from "../layout/Page";
import { useTranslation } from "react-i18next";


const NotFound = () => {
  const { t } = useTranslation("global");


  return(
<Page title={t("new-user.title")}
      subtitle={t("new-user.subtitle")}
    pageClass="form register-form"
    >
  Page not found (por hacer)
      </Page>
        )
  
  };
  
  export default NotFound;
  