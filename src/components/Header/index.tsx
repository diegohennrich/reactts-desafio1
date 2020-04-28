import React, { useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Container, Box, Barrinha } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const location = useLocation();

  const [active, setActive] = useState(() => location.pathname);
  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Box>
            <Link to="/">Listagem</Link>
            {active === '/' && <Barrinha />}
          </Box>

          <Box>
            <Link to="/import">Importar</Link>
            {active === '/import' && <Barrinha />}
          </Box>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
