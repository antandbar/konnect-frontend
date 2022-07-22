const RadioBtnList = ({list, name}) => {

    return(
<div>

{list.map(item => 

<label key={item.id} >
<input type="radio" value={item.id} name={name}/>
<span>{item.name}</span>
</label>           
 )}  

</div>
       
    )



}


export default RadioBtnList;
