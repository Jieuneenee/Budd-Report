import Contents from "../components/Contents";
import Header from "../components/Header";
import mockData from "../constants/json/user_report_sample.json";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  max-width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  font-size: 24px; // 제목 크기 설정
  margin-bottom: 20px; // 제목 아래 여백 추가
  margin-left: 25px;
`;

const Conclusion = styled.div`
  text-align: center; // 텍스트 가운데 정렬
  margin-top: 30px; // 위쪽 여백 추가
  margin-right: 25px; // 오른쪽 여백 추가
  font-size: 20px; // 폰트 크기 설정
  font-weight: bold; // 폰트 굵기 설정
`;

const From = styled.div`
  text-align: right; // 텍스트 가운데 정렬
  margin-top: 20px; // 위쪽 여백 추가
  margin-right: 25px; // 오른쪽 여백 추가
  font-size: 20px; // 폰트 크기 설정
  font-weight: bold; // 폰트 굵기 설정
`;

const Report = () => {
  return (
    <>
      <Header />
      <Container>
        <Title>
          {mockData[0].name}님의 {mockData[0].month}월 종합 리포트
        </Title>
        <Contents title="식사 상태" description={mockData[0].mealStatus} />
        <Contents title="건강 상태" description={mockData[0].healthStatus} />
        <Contents title="정서 상태" description={mockData[0].emotionStatus} />
        <Contents title="종합 평가" description={mockData[0].evaluation} />
        <Conclusion>{mockData[0].conclusion}</Conclusion> {/* 종합 평가 추가 */}
        <From>- Budd 드림 -</From> {/* 하단에 BUdd 드림 추가 */}
      </Container>
    </>
  );
};
export default Report;
