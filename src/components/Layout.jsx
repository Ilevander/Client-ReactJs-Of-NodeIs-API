import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import NavigationBar from "./NavigationBar";
import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";



const Layout =( {children} ) => {
    return(
        <>
            <StyledContainer fluid>
                <BackgroundColor/>
                <ToastContainer/>
                <NavigationBar/>
                {children}
            </StyledContainer>
        </>
    );
    
};

export default Layout;

const BackgroundColor = createGlobalStyle 
    ` body {
        background-color: #f0f0f0; 
    }`
;
const StyledContainer = styled(Container)`
    margin-top: 80px; /* Adjust the margin-top value as needed */
`;

