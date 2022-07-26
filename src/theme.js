import {createGlobalStyle} from "styled-components"

const zIndexes = {
  z1: 1, 
  z2: 2, 
  z3: 3, 
  z4: 4, 
  z5: 5, 
  z6: 6000, 
  z7: 7000, 
  z8: 8000, 
  z9: 9000, 
  z10: 10000
}

const shadows = {
  tiny: "0 1px 3px rgba(0, 0, 0, .12)", 
  small: "0 1px 4px rgba(0, 0, 0, .24)", 
  medium: "0 4px 16px rgba(0, 0, 0, .12)", 
  large: "0 8px 32px rgba(0, 0, 0, .24)"
}

const mobile = {
  phone: "860px", 
  tablet: "1200px"
}

const swatches = {
  blue: "#0870CE",
  blueLight: "#EEF8FF",
  green: "#26A86F",
  greenLight: "#F9FFFC", 
  red: "#F12433", 
  redLight: "#FFF8F8", 
  yellow: "#F9A61B", 
  yellowLight: "#FFFAF0",
  greyLight: "#F2F2F3", 
  white: "#FFF",
  black: "#000" 
}

export const lightTheme = {
  name: "light",
  background: "#FFF", 
  backgroundSecondary: "#F2F2F3",
  backgroundTertiary: "#E1E1EA",
  border: "#E5E6E8",
  color: "#2B2C31", 
  colorLight: "#7D8292",
  error: "#F12433",
  formBackground: "#FFF",
  primary: "#ef2424", 
  primaryLight: "#EEF8FF",
  secondary: "#1FB273" ,
  layer: zIndexes, 
  shadow: shadows, 
  swatch: swatches, 
  mobile: mobile
}

export const darkTheme = {
  name: "dark",
  background: "#1A1B20", 
  backgroundSecondary: "#121419",
  backgroundTertiary: "#1E1F24",
  border: "#0F1010",
  color: "#FFF", 
  colorLight: "#505460",
  error: "#F12433",
  formBackground: "#32343B",
  primary: "#ef2424", 
  primaryLight: "#DBD8ED",
  secondary: "#1FB273" ,
  layer: zIndexes, 
  shadow: shadows, 
  swatch: swatches, 
  mobile: mobile
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${props => props.theme.backgroundSecondary}; 
    color: ${props => props.theme.color}; 
    font-family: 'Lato', 'Helvetica', 'Arial', 'sans-serif';

    @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
      padding-top: 80px;
    }
  }

  .ant-message-notice-content {
    background: ${props => props.theme.swatch.red};
    color: ${props => props.theme.swatch.white};
    padding: 16px 24px;
    border-radius: 4px;
    font-size: 16px;

    .anticon {
      svg {
        fill: #fff;
      }
    }
  }
`