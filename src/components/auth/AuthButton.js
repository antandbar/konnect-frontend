//import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

function AuthButton({ className }) {
  return (
    <Button as={Link} to="/login" variant="primary" className={className}>
      Login
    </Button>
  );
}

export default AuthButton;
