import moment from "moment";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useCategories, useAppLocation } from "../../utility/getData";
import FilterArticle from "./filterArticle";
import SelectorList from "./selectorList.js";

const FiltersForm = ({ categorySet}) => {
  const { t } = useTranslation("global");

const allCategories = useCategories();
const allLocations = useAppLocation();
const initialFilter = {
  categoryFilter:"",
  locationFilter:"",
  dateFilter: ""
}


const [filters, setFilters] = useState(initialFilter);




const handleCheck = (e) => {
  setFilters(filters =>({
    ...filters,
    [e.target.name]: e.target.value
  }));
};

const unSelectRadios = () => {
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  for(const radioButton of radioButtons){
    if(radioButton.checked){
      radioButton.checked = false;
    }
}    
};


const handleReset = () =>{
  categorySet({});
  setFilters(initialFilter);
  unSelectRadios();
  document.querySelector("input[type=date]").value = "";
}



const handleSubmit = (event) =>{
    event.preventDefault();
    categorySet(filters);
  }


return(
<section className="listing-filters">
 <form onSubmit={handleSubmit}> 
      <FilterArticle title={t("filtro.date")}>
          <input type="date" name="dateFilter"  min={moment().format('YYYY-MM-DD')}  onChange={handleCheck}/>
      </FilterArticle>

      <FilterArticle title={t("filtro.categories")}>
          <SelectorList list={allCategories}  name="categoryFilter" onChange={handleCheck}/>
      </FilterArticle>
      
      <FilterArticle title={t("filtro.location")}>
          <SelectorList list={allLocations} className="locationContainer"  name="locationFilter" onChange={handleCheck}/>
      </FilterArticle>
      <button className="filter-btn submit" type="submit">{t("filtro.submit")}</button>
      <button className="resetBtn" onClick={handleReset}>Reset</button>

</form>

        </section>
);

    };



export default FiltersForm;