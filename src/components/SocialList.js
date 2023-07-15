import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialList = (props) => {
    const socialIcon = props.data
    .map((social, index) => { 
      return ( 
        <a href={social.url} key={index}>
          <FontAwesomeIcon icon={social.icon} size="2x"/>
        </a> 
      ); 
    }); 
return socialIcon;

}
export default socialList; 