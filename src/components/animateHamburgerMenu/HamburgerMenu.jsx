import { Line1, Line2, Line3, Menu } from './Hamburger.style';
import { useAction } from '../../context/ContextWrapper';

const HamburgerMenu = () => {
    const { isOpen, handleMenuOpen } = useAction();

    const animate = {
        animateLine1: 'rotate(45deg) translate(4.5px, 4px);',
        animateLine2: 'width: 0; transform: translateX(50%)',
        animateLine3: 'rotate(-45deg) translate(4.5px, -4px);',
    };

    return (
        <Menu className='hamburger-menu' onClick={handleMenuOpen}>
            <Line1 animate={isOpen && animate.animateLine1} />
            <Line2 animate={isOpen && animate.animateLine2} />
            <Line3 animate={isOpen && animate.animateLine3} />
        </Menu>
    );
};

export default HamburgerMenu;
