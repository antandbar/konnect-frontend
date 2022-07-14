
function FormGroup({ id, className, groupTitle, children }) {
  return (
      <article className={className} id={id}>
         <p className="fieldgroup-title">{groupTitle}</p>
{children}
</article>
  );
}

export default FormGroup;
