import React, {useState} from "react";
import '../../styles/notice-board.css'
function NoticeBoard() {

    const [notices] = useState([
        {
            id: 1,
            title: "개인정보 처리방침 변경 안내",
            author: "관리자",
            date: "2024-01-15",
            views: 125,
            content: "개인정보 처리방침이 변경되었습니다..."
        },
        {
            id: 2,
            title: "사이트 이용 규칙",
            author: "관리자",
            date: "2024-01-14",
            views: 89,
            content: "사이트 이용시 준수해야 할 규칙들..."
        },
    ]);

    return(
        <div className="notice-board container">
            <div className="notice-header">
                <h2>공지사항</h2>
                <button className="write-btn">글쓰기</button>
            </div>

            <div className="notice-list">
                <div className="notice-list header">
                    <span>번호</span>
                    <span>제목</span>
                    <span>작성자</span>
                    <span>날짜</span>
                    <span>조회수</span>
                </div>


                {notices.map(notice => (
                    <div key={notice.id} className="notice-item">
                        <span>{notice.id}</span>
                        <span className="notice-title">{notice.title}</span>
                        <span>{notice.author}</span>
                        <span>{notice.date}</span>
                        <span>{notice.views}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NoticeBoard;