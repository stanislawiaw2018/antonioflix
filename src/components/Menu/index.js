import React from 'react';
import Logo from '../../assets/img/Logo.png';
import { LogoImage, MenuWrapper} from './style.js';
import Button from '../Button';
// import ButtonLink from '../components/ButtonLink';

function Menu(){
    return(
        <MenuWrapper className="Menu">
            <a href="/">
                <LogoImage src={Logo} alt="Logo AntonioFlix" />

            </a>

            <Button as="a" href="/">
                Novo vídeo
            </Button>
        </MenuWrapper>
    );
}

//Para exportação desse componente em qualquer lugar do projeto
export default Menu;