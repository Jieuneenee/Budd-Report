import styled from "styled-components";
import LogoIcon from "../assets/logo.png";
import { Typography } from "antd";

const HeaderDiv = styled.div`
  background-color: #cad8ed;
  padding: 20px;
  margin: 0px;
  text-align: center;
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 40px; // 이미지 크기
    height: auto;
    margin-right: 10px; // 텍스트와 이미지 사이의 간격
  }

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 15px;
  }
`;

const LogoImg = styled.img`
  width: 50px;
  height: 40px;
  padding-right: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const BuddTypo = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
  color: #6b7280;
`;

const Header = () => {
  return (
    <>
      <HeaderDiv>
        <LogoImg src={LogoIcon} />
        <BuddTypo>BUDD</BuddTypo>
      </HeaderDiv>
    </>
  );
};

export default Header;
