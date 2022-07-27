
const FilterArticle = ({title, children}) => {


    return(

    <article>
            <p className="title">{title}</p>
            {children}
    </article>

    )
   

};


export default FilterArticle;