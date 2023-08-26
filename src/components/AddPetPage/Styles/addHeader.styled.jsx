import styled from '@emotion/styled';

export const TitlePage = styled.h2`
  color: #111;
  align-items: start;

  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-left: 12px;
 padding-reiht: auto;
  @media screen and (min-width: 767px) {
    font-size: 28px;
  }
`;
export const Options = styled.ul`
  display: flex;
  gap: 12px;
  flex-direction: row;
  text-align: start;
  list-style: none;   
  }
  @media screen and (min-width: 767px) {
   
  }
`;
export const OptionBox = styled.div`
  color: #8888;
  width: 80px;
  text-align: start;
  height: 34px;
  margin-top: 24px;
  @media screen and (min-width: 767px) {
    width: 120px;
  }
`;


export const OptionName = styled.p`
 
  font-weight: 500;
  font-size: 10px;
  line-hieght: normal;
  @media screen and (min-width: 767px) {
   font-size: 16px;
`;
export const OptionDecor = styled.div`
  background-color: #8888;
  border-radius: 8px;
  width: 80px;
  text-align: start;
  height: 8px;
  margin-top: 12px;
  @media screen and (min-width: 767px) {
    width: 120px;
  
  }
`;

