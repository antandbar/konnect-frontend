import dateIcon from "../../../assets/img/calendar.svg";
import locationIcon from "../../../assets/img/place.svg";
import peopleIcon from "../../../assets/img/user.svg";
import moment from 'moment';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


    //Funcion para saber el creador de la actividad
    
   /* const useCreator = (id) => {
    const [creator, setCreator] = useState();
    useEffect(() => {
      getCreator(id).then(creator => {
        setCreator(creator)
    })
    },[])
    return activities;
  };
    */
    




const ActivityComplete = ({title, activityDate, category, description, place, location, id}) =>{
    
    //Mirar el user creador de la actividad
    //const ActivityCreator = useCreator(id);

    const { t } = useTranslation("global");

    return(
    <article>
{/*   <p class="category">Exposiciones</p> 
            <h1 class="title">Exposición de cómic: Sueños e historia</h1>
            <div class="row">
            <p class="activity-data"><img class="icon"src="./assets/img/user-buble.svg"/> <a href="#" class="host">lucia_715</a></p>
            <p class="activity-data"><img class="icon"src="./assets/img/calendar.svg"/>07/08/2022</p>
            <p class="activity-data"><img class="icon"src="./assets/img/place.svg"/>Madrid</p>
        </div>
        <p class="place">Lugar <b>Caixa Forum</b></p>
        <p class="activity-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit eget magna ut venenatis. Curabitur sed nulla ac justo dignissim laoreet eget id libero. Nunc at magna non lacus tempor interdum. Vivamus sollicitudin justo non magna blandit posuere. Morbi accumsan est vitae elementum vestibulum. Nunc ultricies nisi sit amet massa venenatis imperdiet. Aenean elementum consequat ligula vel efficitur. Phasellus ac eros sagittis, tristique erat ut, iaculis ipsum. Morbi ullamcorper imperdiet dapibus. Nullam in libero id risus pharetra tristique eget id erat. Phasellus iaculis odio non porta accumsan. Maecenas aliquet nisl ante, a fermentum mi interdum eget.</p>
        <div class="row ends">
            <button class="singup-btn">¡Quiero apuntarme!</button>
            <p class="signup"><img class="icon"src="./assets/img/user.svg"/><span>3 personas </span>apuntadas de 10</p> 
        </div> */}

    </article>

    );


    
    

};


export default ActivityComplete;