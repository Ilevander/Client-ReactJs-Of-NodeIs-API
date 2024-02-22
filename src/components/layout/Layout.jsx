import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import NavigationBar from "./NavigationBar.jsx";
import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Footer from "./Footer.jsx";


const Layout =( {children} ) => {
    return(
        <>
            <StyledContainer fluid>
                <BackgroundColor/>
                <NavigationBar/>
                <ToastContainer/>
                <Container className='mt-5'>{children}</Container>
            </StyledContainer>
            <Footer/>
        </>
    );
};

export default Layout;



const BackgroundColor = createGlobalStyle 
    ` body {
        background-color: #c4fcfb; 
    }`
;
const StyledContainer = styled(Container)`
    margin-top: 80px; 
`;

