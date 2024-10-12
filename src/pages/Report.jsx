import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // useParams를 임포트합니다.
import axios from "axios";
import Contents from "../components/Contents";
import Header from "../components/Header";
import styled from "styled-components";

const BASE_URL = "http://localhost:8080";

const fetchUsers = async (userId, setUsers) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/detail/${userId}/report`);
    setUsers(response.data);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

const Report = () => {
  const { userId } = useParams();
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetchUsers(userId, setUsers);
  }, [userId]);

  if (!users || users.length === 0) {
    return <div>Loading...</div>;
  }

  const usersReport = users[0];
  const month = usersReport.month.slice(5, 7); // 월만 추출
  const name = usersReport.title.split("님")[0]; // 이름 추출

  return (
    <>
      <Header />
      <Container>
        <Title>
          {name} 님의 {month}월 종합 리포트
        </Title>
        <Contents title="식사 상태" description={usersReport.mealStatus} />
        <Contents title="건강 상태" description={usersReport.healthStatus} />
        <Contents title="정서 상태" description={usersReport.emotionStatus} />
        <Contents title="종합 평가" description={usersReport.evaluation} />
        <Conclusion>{usersReport.conclusion}</Conclusion>
        <From>- Budd 드림 -</From>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 20px;
  max-width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  margin-left: 25px;
`;

const Conclusion = styled.div`
  text-align: center;
  margin-top: 30px;
  margin-right: 25px;
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
`;

const From = styled.div`
  text-align: right;
  margin-top: 20px;
  margin-right: 25px;
  font-size: 20px;
  font-weight: bold;
`;

export default Report;
