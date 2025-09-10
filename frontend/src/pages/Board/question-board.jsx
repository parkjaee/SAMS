import React, {useState} from "react";
import '../../styles/question-board.css'

function QuestionBoard() {

    const [questions] = useState([
        {
            id: 1,
            title: "React Hook 사용법에 대해 질문드립니다",
            author: "리액트초보",
            date: "2024-01-15",
            views: 67,
            content: "useState와 useEffect를 어떻게 사용하나요?"
        },
        {
            id: 2,
            title: "CSS Grid와 Flexbox 차이점이 무엇인가요?",
            author: "웹개발자지망생",
            date: "2024-01-14",
            views: 89,
            content: "Grid와 Flexbox를 언제 사용해야 할지 모르겠어요..."
        },
        {
            id: 3,
            title: "JavaScript 비동기 처리 질문",
            author: "JS공부중",
            date: "2024-01-13",
            views: 123,
            content: "async/await와 Promise의 차이점을 알고 싶습니다"
        },
        {
            id: 4,
            title: "데이터베이스 연결 오류 해결 방법",
            author: "백엔드개발자",
            date: "2024-01-12",
            views: 45,
            content: "MySQL 연결시 계속 오류가 발생합니다..."
        },
    ]);

    return(
        <div className="question-board container">
            <div className="question-header">
                <h2>질문게시판</h2>
                <button className="write-btn">질문하기</button>
            </div>

            <div className="question-list">
                <div className="question-list header">
                    <span>번호</span>
                    <span>제목</span>
                    <span>작성자</span>
                    <span>날짜</span>
                    <span>조회수</span>
                </div>

                {questions.map(question => (
                    <div key={question.id} className="question-item">
                        <span>{question.id}</span>
                        <span className="question-title">{question.title}</span>
                        <span>{question.author}</span>
                        <span>{question.date}</span>
                        <span>{question.views}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default QuestionBoard;