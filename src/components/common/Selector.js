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
          {/* recibe los datos de manera dinámica */}
          {tags.map(tag => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Selector;
