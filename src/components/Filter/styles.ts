import styled, {css} from 'styled-components/native';
import {TouchableOpacity} from 'react-native'

export interface FilterStyleProps {
  isActive?: boolean;
}

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
   

   border: 1px solid ${({theme, isActive}) => isActive ? theme.COLORS.GREEN_700 : 'transparent'} ;

   border-radius: 4px;
   margin-right: 12px;
   height:38px;
   width:70px;
   align-items: center;
   justify-content: center;
`;

export const Title = styled.Text`
 font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
 font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
 color: ${({theme}) => theme.COLORS.WHITE};
`