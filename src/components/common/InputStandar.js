const InputStandar = ({ className, label, ...props }) => {
  return (
    <div className={className}>
      <label>{label}</label>
      <input {...props} />
    </div>
  );
};

export default InputStandar;
