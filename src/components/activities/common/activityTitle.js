import { Link } from "react-router-dom";


const ActivityTitle = ({ title, linkId }) => {
        
    return (
        <h2 className="title">
            <Link to={`/activities/${linkId}`}>
            {title}
            </Link>
        </h2>

    );
  };
  
  export default ActivityTitle;
  