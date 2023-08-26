import styled from '@emotion/styled';
// import { theme } from '../../../theme/theme';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 496px;
  width: 280px;
  margin: 68px 20px 37px 20 px;
  padding: 20px 8px 17px 8px;
  border-radius: 40px;
  border: none;
  border: 1px solid #000;
  background: #fff;

  @media screen and (min-width: 767px) {
    height: 542px;
    width: 458px;
    margin: 128px 155px 354px;
    padding: 20px 32px 20px 32px;
  }
  @media screen and (min-width: 1280px) {
    margin: 108px 411px 120px;
  }
`;
// color: ${({ theme }) => theme.colors.blue};
  // box-schadow: ${({ theme }) => theme.boxShadows.main};
  // margin-bottom: ${({ error }) => (error ? '1px' : '24px')};
export const CategoryForm = styled.ul`
  display: inline-flex;
  flex-direction: column;

  
  align-items: flex-start;
  width: 131px;
  height: 176px;
  gap: 12px;
  margin-bottom: 95px;
  margin-top: 24px;
  @media screen and (min-width: 767px) {
    margin-bottom: 137px;
    margin-top: 40px;
  }
`;
export const CategoryButton = styled.input`

  display: none;  
`;


export const CheckedLabel = styled.label`
  display: flex;
  height: 35px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  cursor: pointer;
    font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
  background: #cce4fb;

 background-color: ${props => (props.checked ? '#54adff' : '#CCE4FB')};
  color: ${props => (props.checked ? '#FEF9F9' : '#54ADFF')};
  transition: all 0.2s ease-in-out;
  > input[type='radio'] {
    visibility: hidden;
    height: 0;
    width: 0;
  }

  }
`;
//  &input[type='radio']:checked + label {
    // background-color: #54adff;
    // color: #ffffff;
  // width: fit-content;
  // transition: all 0.2s ease-in-out;

  // &:hover {
  //   transform: scale(1.05);
  // }

  // > input[type='radio'] {
  //   visibility: hidden;
  //   height: 0;
  //   width: 0;
  // }


// color: ${({ theme }) => theme.color.blue};
//   background-color: ${({ theme }) => theme.color.lightBlue};
//   &cheked, &hover,
//   &focus: {
//     color: ${({ theme }) => theme.color.lightBlue};
//     background-color: ${({ theme }) => theme.color.blue};
//   }

