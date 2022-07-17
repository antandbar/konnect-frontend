const Selector = ({
  className,
  label,
  tags,
  handleSelector,
  ...props
}) => {


  return (
    <div className={className}>
      <label className="multiselector-label">
        <span>{label}</span>
      </label>
      <div className='select-wrapper'>
        <select
          onChange={handleSelector}
          className="multiselector-select"
          {...props}
        >
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
