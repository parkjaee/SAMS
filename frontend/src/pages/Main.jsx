import React from "react";
import '../styles/Main.css';

function Main() {
    const popularPosts = [
        { title: "안녕하세요", author: "작성자", date: "날짜", likes: "추천수" },
        { title: "반갑습니다.", author: "작성자", date: "날짜", likes: "추천수" },
        { title: "삼스 조깝습니다~!", author: "작성자", date: "날짜", likes: "추천수" },
        { title: "이직 기원 !", author: "작성자", date: "날짜", likes: "추천수" },
        { title: "퇴사합니다~", author: "작성자", date: "날짜", likes: "추천수" },
        { title: "에이에이씨티 고발합니다", author: "작성자", date: "날짜", likes: "추천수" },
        { title: "추가 게시물 1", author: "작성자", date: "날짜", likes: "추천수" },
        { title: "추가 게시물 2", author: "작성자", date: "날짜", likes: "추천수" }
    ];

    const announPosts = [
        { title: "개인정보관련", author: "작성자", date: "날짜", view: "조회수"},
        { title: "개인정보관련", author: "작성자", date: "날짜", view: "조회수"},
        { title: "개인정보관련", author: "작성자", date: "날짜", view: "조회수"},
        { title: "개인정보관련", author: "작성자", date: "날짜", view: "조회수"}
    ];

    const galleryImages = [
        { id: 1, src: "https://picsum.photos/200/150?random=1", title: "풍경 사진", date: "2024-01-15" },
        { id: 2, src: "https://picsum.photos/200/150?random=2", title: "여행 사진", date: "2024-01-14" },
        { id: 3, src: "https://picsum.photos/200/150?random=3", title: "음식 사진", date: "2024-01-13" },
        { id: 4, src: "https://picsum.photos/200/150?random=4", title: "건축물", date: "2024-01-12" },
        { id: 5, src: "https://picsum.photos/200/150?random=5", title: "자연 풍경", date: "2024-01-11" },
        { id: 6, src: "https://picsum.photos/200/150?random=6", title: "도시 야경", date: "2024-01-10" },
        { id: 7, src: "https://picsum.photos/200/150?random=7", title: "꽃 사진", date: "2024-01-09" },
        { id: 8, src: "https://picsum.photos/200/150?random=8", title: "동물 사진", date: "2024-01-08" },
        { id: 9, src: "https://picsum.photos/200/150?random=9", title: "사진", date: "2024-01-08" },
        { id: 10, src: "https://picsum.photos/200/150?random=10", title: "사진", date: "2024-01-08" }
    ];

    const adBanners = [
        {
            id: 1,
            title: "더클라임 문래점",
            description: "최신 기술로 무장한 플래그십 모델",
            image: "https://picsum.photos/300/150?random=100",
            link: "#",
            badge: "HOT"
        },
        {
            id: 2,
            title: "을지로 손상원",
            description: "프로그래밍부터 디자인까지",
            image: "https://picsum.photos/300/150?random=101",
            link: "#",
            badge: "SALE"
        },
        {
            id: 3,
            title: "상봉 크래커",
            description: "국내외 인기 여행지 할인",
            image: "https://picsum.photos/300/150?random=102",
            link: "#",
            badge: "NEW"
        }
    ];

    return(
        <div className="main-content">
            <div className="container text-center">
                <div className="main-grid-container mt-4">
                    <div className="featured-section">
                        <h4>인기 게시물</h4>
                        <div className="popular-posts-list">
                            {popularPosts.slice(0, 5).map((post, index) => (
                                <div key={index} className="popular-posts-item">
                                    <p className="post-title"><strong>{post.title}</strong></p>
                                    <p className="post-meta">{post.author} | {post.date} | {post.likes}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="notice-section">
                        <h4>공지사항</h4>
                        <div className="flex-container notice-board">
                            <div className="flex-item">
                                {announPosts.slice(0,5).map((post,index) => (
                                    <div key={index} className="announ-posts-item">
                                        <p className="announ-title"><strong>{post.title}</strong></p>
                                        <p className="announ-meta">{post.author} | {post.date} | {post.view}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="gallery-section">
                        <h4>갤러리</h4>
                        <div className="gallery-grid">
                            {galleryImages.slice(0, 10).map((image) => (
                                <div key={image.id} className="gallery-item">
                                    <div className="image-container">
                                        <img src={image.src} alt={image.title} className="gallery-image" />
                                        <div className="image-overlay">
                                            <p className="image-title">{image.title}</p>
                                            <p className="image-date">{image.date}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="ad-section">
                        <h4>암장정보</h4>
                        <div className="ad-banner-container">
                            {adBanners.map((ad) => (
                                <div key={ad.id} className="ad-banner-card">
                                    <div className="ad-image-container">
                                        <img src={ad.image} alt={ad.title} className="ad-image" />
                                        <span className={`ad-badge ${ad.badge.toLowerCase()}`}>
                                            {ad.badge}
                                        </span>
                                    </div>
                                    <div className="ad-content">
                                        <h6 className="ad-title">{ad.title}</h6>
                                        <p className="ad-description">{ad.description}</p>
                                        <a href={ad.link} className="ad-link">자세히 보기 →</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;