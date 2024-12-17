import { Icon } from '@chakra-ui/react';
import styled from 'styled-components';
import { FaLaughBeam } from 'react-icons/fa';
import { intenseAnimation } from './animation';

const StyledIcon = styled(Icon)`
  font-size: 3rem;
  color: #1a1a1a;
  animation: ${intenseAnimation} 2s infinite;
`;

export const AnimatedIcon = () => {
    return <StyledIcon as={FaLaughBeam} />;
};

