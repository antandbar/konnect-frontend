import { useTranslation } from "react-i18next";

const Selector = ({
  tags,
  handleChange,
  ...props
}) => {


  const { t } = useTranslation("global");


  return (
      <div className='select-wrapper'>
        <select
          onChange={handleChange}
          className="multiselector-select"
          {...props}
        >
          <option defaultValue="true" value="">
          {t("selector.elige")}
          </option>
          {tags.map(tag => (
            <option key={tag.id} value={tag.id}>
            {tag.name}
        </option>
            
          ))}
        </select>
      </div>
    
  );
};

export default Selector;
