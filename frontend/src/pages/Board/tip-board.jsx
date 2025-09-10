import React, {useState} from "react";
import '../../styles/tip-board.css'

function TipBoard() {

    const [tips] = useState([
        {
            id: 1,
            title: "React 성능 최적화 꿀팁 5가지",
            author: "프론트마스터",
            date: "2024-01-15",
            views: 234,
            content: "React 앱의 성능을 향상시키는 실무 팁들을 공유합니다..."
        },
        {
            id: 2,
            title: "CSS 레이아웃 실수 피하는 방법",
            author: "디자인개발자",
            date: "2024-01-14",
            views: 189,
            content: "자주 하는 CSS 레이아웃 실수들과 해결방법..."
        },
        {
            id: 3,
            title: "Git 명령어 효율적으로 사용하기",
            author: "버전관리왕",
            date: "2024-01-13",
            views: 156,
            content: "Git을 더 효율적으로 사용할 수 있는 팁들 모음"
        },
        {
            id: 4,
            title: "VS Code 확장프로그램 추천 BEST 10",
            author: "코딩마니아",
            date: "2024-01-12",
            views: 312,
            content: "개발 생산성을 높여주는 VS Code 확장프로그램들..."
        },
        {
            id: 5,
            title: "API 테스트를 위한 Postman 활용법",
            author: "백엔드개발자",
            date: "2024-01-11",
            views: 98,
            content: "Postman을 활용한 효율적인 API 테스트 방법"
        },
    ]);

    return(
        <div className="tip-board container">
            <div className="tip-header">
                <h2>팁게시판</h2>
                <button className="write-btn">팁 공유하기</button>
            </div>

            <div className="tip-list">
                <div className="tip-list header">
                    <span>번호</span>
                    <span>제목</span>
                    <span>작성자</span>
                    <span>날짜</span>
                    <span>조회수</span>
                </div>

                {tips.map(tip => (
                    <div key={tip.id} className="tip-item">
                        <span>{tip.id}</span>
                        <span className="tip-title">{tip.title}</span>
                        <span>{tip.author}</span>
                        <span>{tip.date}</span>
                        <span>{tip.views}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TipBoard;