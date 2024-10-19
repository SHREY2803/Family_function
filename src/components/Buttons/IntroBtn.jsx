import React from "react";
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from "react-awesome-button";
import "react-awesome-button/dist/styles.css"; 
import { useNavigate } from "react-router-dom";

function IntroBtn(){
    const navigate = useNavigate();

    const handleClick = () => {
    navigate('FrontPage'); // Navigate to the "FrontPage" route
  };
    return(
        <>
            <AwesomeButton type="primary" onPress={handleClick}>
            येथे क्लिक करा</AwesomeButton>
        </>
    )
}
export default IntroBtn;