
const SelectorList = ({list, className, onChange, name, ...props}) => {




    return(
                <div className={className}>
                        {list.map(item => 
                        <label key={item.id} >
                        <input
                        name={name}
                            type="radio"
                            value={item.id}
                            id={item.id}
                            onChange={onChange}
                            {...props}
                        />
                        <span>{item.name}</span>
                        </label>           
                        )}  
                </div>
       
    )



}


export default SelectorList;
