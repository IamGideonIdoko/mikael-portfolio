import styled from 'styled-components';
import { basePageStyle } from './general.style';

interface Props {
    elevated: boolean;
}

export const TestimonialsWrapper = styled.div<Props>`
    ${basePageStyle}
    transform: ${(props: Props) => (props.elevated ? 'translateY(-100%)' : 'translateY(0%)')};
    padding: 100px 54px;
    background-color: teal;
    z-index: 4;
`;
