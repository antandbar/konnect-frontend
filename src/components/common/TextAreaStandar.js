const TextAreaStandar = ({ className, label, ...props }) => {
  return (
    <div className={className}>
      <label>{label}</label>
      <textarea {...props} />
    </div>
  );
};

export default TextAreaStandar;
