import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

interface QuadroProps {
  titulo: string;
  to: string;
}

const StyledQuadro = styled(Box)<{}>`

  background-color: #DDDDDD;
  display: flex;
  width: 230px;
  height: 200px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;



  &:hover {
  border: 1px solid #46177D;
}

`;

const Quadro: React.FC<QuadroProps> = ({ titulo, to}) => (
  <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
    <StyledQuadro>
      <Typography variant="subtitle1" className="titulo" textAlign="center" style={{}}>
        {titulo}
      </Typography>
    </StyledQuadro>
  </Link>
);

export default Quadro;
