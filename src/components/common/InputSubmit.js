const InputSubmit = ({ className, label, disabled }) => {
    return (
        <input type="submit" className={className} defaultValue={label} disabled={disabled}/>
    );
  };
  
  export default InputSubmit;
  