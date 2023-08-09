
import { AppBar, Toolbar, styled,Button } from '@mui/material'; 
import { Link,useNavigate } from 'react-router-dom';
import Modal from '../Form/modal/Modal';



const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: center;
    & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
    }
`


const Header = () => {
        const navigate=useNavigate();
    return (
        <Component>
            <Container>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
                <Link to='/login'>LOGOUT</Link>
                <Modal/>
            </Container>
            
        </Component>
    )
}

export default Header;