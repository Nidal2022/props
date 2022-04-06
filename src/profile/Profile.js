import { PropTypes } from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
import button from 'react-bootstrap/Button';
const Profile = (props) => {
  const styleObject = {
   backgroundColor:"azure",
    width: "700px",
    display: "flex",
    flexDirection: "column",
    marginLeft: "400px",
    paddingBottom: "30px",
    fontFfamily: 'Helvetica Neue',
  
  };
  return (
    <div>
      <section style={styleObject}>
        <h1> {props.fullName}</h1>
        <h1> {props.bio} </h1>
        <h1> {props.profession} </h1>
        <button type="button" class="btn btn-primary" onClick={() => props.handleName(" my name is " + props.fullName)}>Who Am I ?</button>
        
        <div> {props.children}</div>
      </section>
    </div>
  );
};
// Set default props
Profile.defaultProps = {
  fullName: "16",
  bio: "nothing",
  profession: "also nothing",
};
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};
export default Profile;
