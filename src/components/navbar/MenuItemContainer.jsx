import { NavLink } from 'react-router-dom';
import { useHandleMenu } from '../../context/ContextWrapper';
import { ButtonText, PrimaryButton } from '../../UI/PrimaryButton';
import { Container, MenuItem } from './MenuItemContainer.style';

const MenuItemContainer = () => {
    const { isOpen, handleMenuOpen, handleRAQOpen } = useHandleMenu();

    const buttonSize = {
        width: '180',
        height: '42',
    };

    const activeLink = ({ isActive }) => {
        return isActive
            ? { color: 'var(--primary)' }
            : { color: 'var(--white)' };
    };

    const handleClickMenuItem = () => {
        isOpen && handleMenuOpen();
    };

    const handleClickRAQ = () => {
        isOpen && handleMenuOpen();
        handleRAQOpen();
    };

    return (
        <Container className='menu-item-container'>
            <MenuItem onClick={handleClickMenuItem}>
                <NavLink to={'/'} style={activeLink}>
                    Home
                </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClickMenuItem}>
                <NavLink to={'/about'} style={activeLink}>
                    About
                </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClickMenuItem}>
                <NavLink to={'/services'} style={activeLink}>
                    Services
                </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClickMenuItem}>
                <NavLink to={'/portfolios'} style={activeLink}>
                    Portfolios
                </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClickMenuItem}>
                <NavLink to={'/blog'} style={activeLink}>
                    Blog
                </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClickMenuItem}>
                <NavLink to={'/contact'} style={activeLink}>
                    Contact
                </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClickRAQ}>
                <PrimaryButton size={buttonSize}>
                    <ButtonText>request a quote</ButtonText>
                </PrimaryButton>
            </MenuItem>
        </Container>
    );
};

export default MenuItemContainer;
