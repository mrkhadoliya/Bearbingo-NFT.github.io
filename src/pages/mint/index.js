import React, {useEffect, useState, useCallback, memo} from "react";
import styled, {useTheme}  from 'styled-components';

// COMPONENTS
import DefaultLayout from "../../layouts/default";
import MintCard from "../../components/mint-card";
// import PrivateMintCard from "../../components/private-mint-card";
import Stats from "../../components/stats";
import Alert from "../../components/alert";
import Collection from "../../components/collection";
import './index.css'

const Mint = ({setTheme}) => {
  const theme = useTheme(); 
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  // SET ERROR MESSAGE WHEN PRESENT
  const setAlert = useCallback((message) => {
    setAlertMessage(message);
    setShowAlert(true); 
  }, []);

  // HERO BACKGROUND ANIMATION
  // useEffect(() => {
  //   window.VANTA.FOG({
  //     el: "#hero",
  //     mouseControls: true,
  //     touchControls: true,
  //     gyroControls: false,
  //     minHeight: 200.00,
  //     minWidth: 200.00,
  //     highlightColor: theme.primary,
  //     midtoneColor: theme.swatch.red,
  //     lowlightColor: "#000000", 
  //     zoom: .5
  //   })
  // }, [theme]); 

  return (
    <DefaultLayout setTheme={setTheme}>
      {alertMessage && showAlert &&
        <Alert type="error" closable={true} isVisible={setShowAlert}>{alertMessage}</Alert>
      }

      <StyledShowcase className='mintbgimg' id="hero">      
        <div className="grid">
          <div className="col-5_sm-12">
            <MintCard setAlert={setAlert} />
            {/*<PrivateMintCard setAlert={setAlert} />*/}
          </div>

          <div className="col-7_sm-12">
          <Stats />
          </div>
        </div>
      </StyledShowcase>
      
      
      
      <Collection />
    </DefaultLayout>
  );
}

const StyledShowcase = styled.header`
  padding: 8rem 80px;
  box-shadow: inset ${props => props.theme.shadow.medium};

  @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
    padding: 16px;
  }
`

export default memo(Mint);