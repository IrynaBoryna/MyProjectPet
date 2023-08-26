import styled from '@emotion/styled';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-sizing: border-box;

  maxheight: 559px;
  width: 264px;
  margin: 68px 20px 198px 20px;
  padding: 20px 8px 17px 8px;
  border-radius: 40px;
  border: none;
  border: 1px solid #000;
  background: #fff;

  @media screen and (min-width: 767px) {
    maxheight: 648px;
    width: 458px;
    margin: 128px 155px 248px 155px;
    padding: 20px 32px 20px 32px;
  }
  @media screen and (min-width: 1280px) {
    margin: 108px 411px 90px 411px;
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 264px;
  maxHeight: 314px;
  gap: 20px;
  margin-bottom: 24px;
  margin-top: 16px;

  @media screen and (min-width: 767px) {
    gap: 24px;
    width: 394px;
    margin-bottom: 32px;
    margin-top: 20px;
    maxHeight: 380px;
  }
`;

export const TitleLabel = styled.p`
 margin: 0px;
  color: #111111;
  font-weight: 500;
  font-size: 14px;
  line-hieght: normal;
  text-align: start;
`;
export const Label = styled.label`
  // display: flex;
  // gap: 4px;
  // flex-direction: column;
  // text-align: start;
  // width: 264px;
  // height: 63px;
  // @media screen and (min-width: 767px) {
  //   gap: 8px;
  //   width: 394px;
  //   height: 83px;
  //    }
`;
export const Input = styled.input`
  box-sizing: border-box;
  color: #111111;
  border-color: #54adff;
  display: flex;
  gap: 10px;
  align-items: center;
  height: 40px;
  width: 248px;
  border-radius: 40px;
  margin-top: 4px;
   flex-shrink: 0;
  padding-left: 8px;
  @media screen and (min-width: 767px) {
    width: 394px;
    height: 48px;
    margin-top: 8px;
    padding-left: 16px;
  }
`;
