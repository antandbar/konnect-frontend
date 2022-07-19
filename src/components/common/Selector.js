import { useTranslation } from "react-i18next";

const Selector = ({
  className,
  label,
  tags,
  handleChange,
  type,
  ...props
}) => {


  const { t } = useTranslation("global");


  return (
    <div className={className}>
      <label className="multiselector-label">
        <span>{label}</span>
      </label>
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
    </div>
  );
};

export default Selector;
