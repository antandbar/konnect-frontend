import { useTranslation } from "react-i18next";
import Selector from "../../common/Selector";
import { useAppLocation } from "../../utility/getData";


const LocationsCombo = ({handleChange, value }) =>{

    const { t } = useTranslation("global");

      const locations = useAppLocation();



    return (
        <div className="formfield">
        <label className="multiselector-label">
          <span>{t("new-user.location")}</span>
        </label>
        <Selector
            tags={locations}
            handleChange={handleChange}
            value={value}
            name="locationId"
            required
          /> 

        </div>
    )

}


export default LocationsCombo;