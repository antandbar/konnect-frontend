
const UserPopup = ({ ...user }) => {

    
    return (
        <div className="public-profile">
                        <div className="profile-field">
                            <label>Nombre usuario</label>
                            <p>lucia_715</p>
                        </div>
                        <div className="profile-field">
                            <label>Nombre</label>
                            <p>Lucia</p>
                        </div>
                        <div className="profile-field">
                            <label>Edad</label>
                            <p>34 años</p>
                        </div>
                        <div className="profile-field">
                            <label>Género</label>
                            <p>Mujer</p>
                        </div>
                        <div className="profile-field">
                        <label>Ubicación</label>
                            <p>Madrid</p>
                        </div>
            
                            <div className="profile-field">
                                <label>Bio</label>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit eget</p>
                            </div>
                        </div>

    );
  };
  
  export default UserPopup;
  