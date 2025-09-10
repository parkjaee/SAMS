import React, {useState} from "react";
import '../../styles/review-board.css'

function ReviewBoard() {

    const [reviews] = useState([
        {
            id: 1,
            title: "React 강의 수강 후기 - 정말 만족해요!",
            author: "수강생A",
            date: "2024-01-15",
            views: 145,
            content: "React 기초부터 실전까지 정말 알기 쉽게 설명해주셔서..."
        },
        {
            id: 2,
            title: "Node.js 부트캠프 6개월 완주 후기",
            author: "개발꿈나무",
            date: "2024-01-14",
            views: 203,
            content: "6개월간 정말 힘들었지만 많은 것을 배웠습니다..."
        },
        {
            id: 3,
            title: "알고리즘 스터디 참여 후기",
            author: "코딩왕초보",
            date: "2024-01-13",
            views: 87,
            content: "알고리즘이 이렇게 재미있을 줄 몰랐어요!"
        },
        {
            id: 4,
            title: "프론트엔드 취업 준비 과정 후기",
            author: "취준생2024",
            date: "2024-01-12",
            views: 267,
            content: "드디어 취업에 성공했습니다! 과정을 공유드려요"
        },
        {
            id: 5,
            title: "온라인 코딩테스트 대비반 후기",
            author: "코테마스터",
            date: "2024-01-11",
            views: 134,
            content: "코딩테스트 합격률이 정말 높아졌어요"
        },
    ]);

    return(
        <div className="review-board container">
            <div className="review-header">
                <h2>후기게시판</h2>
                <button className="write-btn">후기 작성하기</button>
            </div>

            <div className="review-list">
                <div className="review-list header">
                    <span>번호</span>
                    <span>제목</span>
                    <span>작성자</span>
                    <span>날짜</span>
                    <span>조회수</span>
                </div>

                {reviews.map(review => (
                    <div key={review.id} className="review-item">
                        <span>{review.id}</span>
                        <span className="review-title">{review.title}</span>
                        <span>{review.author}</span>
                        <span>{review.date}</span>
                        <span>{review.views}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ReviewBoard;