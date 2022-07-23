import { useState } from "react";

const SelectorList = ({list, value, onChange, ...props}) => {


        const [checked, setChecked] = useState(false);


    return(
                <div>
                        {list.map(item => 
                        <label key={item.id} >
                        <input
                            type="checkbox"
                            value={item.id}
                            id={item.id}
                            checked={value.includes(item)}
                            onChange={(e) => setChecked(e.target.checked)}
                            {...props}
                        />
                        <span>{item.name}</span>
                        </label>           
                        )}  
                </div>
       
    )



}


export default SelectorList;
