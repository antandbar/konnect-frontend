import { useTranslation } from "react-i18next";
import Selector from "../../common/Selector";
import { useCategories } from "../../utility/getData";


const CategoriesCombo = ({handleChange, value }) =>{

    const { t } = useTranslation("global");

      const categories = useCategories();


    return (
        <div className="formfield">
        <label className="multiselector-label">
          <span>{t("create-activity.category")}</span>
        </label>
        <Selector
            tags={categories}
            handleChange={handleChange}
            value={value}
            name="categoryId"
            required
          /> 

        </div>
    )

}


export default CategoriesCombo;