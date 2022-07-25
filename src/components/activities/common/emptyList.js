import { useTranslation } from "react-i18next";

const EmptyList = () => {
  const { t } = useTranslation("global");

  return(
    <div className="emptylist">
      <p>{t("empty.text")}</p>
    </div>
 ) };


  export default EmptyList;