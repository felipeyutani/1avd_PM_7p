import styled from 'styled-components/native'
import { RFPercentage, RFValue }
  from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`
export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(30)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding-left: 24px;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 24px;
  align-items: center;
`

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  border-radius: 50px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
  /* color: ${props => props.theme.colors.shape}; */
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const TextHeader = styled.Text`
  margin-top: 20px;
  color: #000;
  padding-left: 20px;
  width: ${RFPercentage(40)};
  text-align: left;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const AmbientChoose = styled.View`
  flex-direction: row;
  align-items: center;
`;

