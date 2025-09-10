import React, {useState} from "react";
import '../../styles/free-board.css'

function FreeBoard() {

    const [posts] = useState([
        {
            id: 1,
            title: "안녕하세요! 처음 가입했습니다",
            author: "새내기123",
            date: "2024-01-15",
            views: 45,
            content: "안녕하세요! 처음 가입해서 인사드립니다..."
        },
        {
            id: 2,
            title: "오늘 날씨가 정말 좋네요",
            author: "햇살좋아",
            date: "2024-01-14",
            views: 32,
            content: "오늘 날씨가 너무 좋아서 기분이 상쾌합니다..."
        },
        {
            id: 3,
            title: "맛있는 음식점 추천해주세요",
            author: "먹방러버",
            date: "2024-01-13",
            views: 78,
            content: "이 근처에 맛있는 음식점 있나요?"
        },
    ]);

    return(
        <div className="free-board container">
            <div className="free-header">
                <h2>자유게시판</h2>
                <button className="write-btn">글쓰기</button>
            </div>

            <div className="free-list">
                <div className="free-list header">
                    <span>번호</span>
                    <span>제목</span>
                    <span>작성자</span>
                    <span>날짜</span>
                    <span>조회수</span>
                </div>

                {posts.map(post => (
                    <div key={post.id} className="free-item">
                        <span>{post.id}</span>
                        <span className="free-title">{post.title}</span>
                        <span>{post.author}</span>
                        <span>{post.date}</span>
                        <span>{post.views}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FreeBoard;