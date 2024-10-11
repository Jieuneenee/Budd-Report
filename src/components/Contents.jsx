import styled from "styled-components";

const StatusWrapper = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
`;

const Contents = ({ title, description }) => {
  return (
    <>
      <StatusWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </StatusWrapper>
    </>
  );
};
export default Contents;
