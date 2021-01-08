import React from "react";
import PlantInfo from "./PlantInfo";
import Button from "react-bootstrap/Button";
import API from "../utils/API";
import axios from "axios";
import fetch from 'node-fetch';


 
function MoreInfoBtn(props) {
    const [modalShow, setModalShow] = React.useState(false);
    const [plantRes, setPlantRes] = React.useState();
    let plantID = props.plantId;
    
  

    function getInfo () {
        API.plantDetail(plantID).then(result => {
            setPlantRes(result);  
        })
    }
 return (
   <div>
     <Button variant="primary" onClick={() => [setModalShow(true), getInfo()]}>
       More Info
     </Button>
 
     <PlantInfo show={modalShow}
       onHide={() => setModalShow(false)}
       plantres={plantRes}
       displayname={props.displayName}
       img={props.img}
       user={props.user}
     />
   </div>
 );
}
 
export default MoreInfoBtn;
