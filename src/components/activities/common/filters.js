import { useLocation, useCategories } from "../../utility/getData";
import FilterArticle from "./filterArticle";
import RadioBtnList from "./radioBtnList";



const Filters = ({algo}) => {

const categories = useCategories();
const locations = useLocation();

const dateChange = (e) => {
    
  };


return(
<section className="listing-filters">

<FilterArticle title="Fecha">
    <input type="date" />
</FilterArticle>

<FilterArticle title="Categorias">
<RadioBtnList list={categories} name="category"/>
</FilterArticle>

<FilterArticle title="Ubicación">
<RadioBtnList list={locations}  name="location"/>
</FilterArticle>


        </section>
);

    };



export default Filters;