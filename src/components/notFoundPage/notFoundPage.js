import Page from "../layout/Page";
import { useTranslation } from "react-i18next";


const NotFound = () => {
  const { t } = useTranslation("global");


  return(
<Page title={t("not-found.title")}
      subtitle={t("not-found.subtitle")}
    pageClass="form register-form"
    >
      </Page>
        )
  
  };
  
  export default NotFound;
  