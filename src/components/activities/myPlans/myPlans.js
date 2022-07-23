import { useTranslation } from "react-i18next";
import Page from "../../layout/Page";

const Myplans = () => {
    const { t } = useTranslation("global");



    return (
        <Page
        title={t("activities-listing.title")}
        subtitle={t("activities-listing.subtitle")}
        pageClass="listing-container"
      >    
                      
            </Page>
          
    );
}


export default Myplans;