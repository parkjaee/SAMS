import React, { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../styles/Header.css';

function Header() {
    const [showSubmenu, setShowSubmenu] = useState(false);
    const [showBoardSubmenu, setShowBoardSubmenu] = useState(false);
    const nodeRef = useRef(null);

    const toggleSubmenu = () => {
        setShowSubmenu(prev => !prev);
    };

    const handleBoardMouseEnter = () => {
        setShowBoardSubmenu(true);
    };

    const handleBoardMouseLeave = () => {
        setShowBoardSubmenu(false);
    };

    return (
        <div className="header-container">
            <div className="container text-center">
                <div className="row justify-content-center" style={{backgroundColor:"whitesmoke"}}>
                    <div className="d-flex justify-content-between align-items-center px-5 py-3 position-relative">
                        <div className="d-flex align-items-center">
                            <a href="/"><button className="btn btn-outline-dark mx-2 custom-menu-btn">홈</button></a>
                            <button className="btn btn-outline-dark mx-2 custom-menu-btn" onClick={toggleSubmenu}>메뉴</button>

                            <CSSTransition
                                in={showSubmenu}
                                timeout={300}
                                classNames="sidebar"
                                unmountOnExit
                                nodeRef={nodeRef}
                            >
                                <div ref={nodeRef} className="sidebar-overlay">
                                    <div className="sidebar-meny">
                                        <div className="sidebar-header">
                                            <h5>메뉴</h5>
                                            <button className="sidebar-close-btn" onClick={toggleSubmenu}>×</button>
                                        </div>
                                        <nav className="sidebar-nav">
                                            <ul className="sidebar-nav-list">
                                                <li><a href="/" className="sidebar-nav-item">🏠 홈</a></li>
                                                <li><a href="/notice" className="sidebar-nav-item">📢 공지사항</a></li>
                                                <li
                                                    className="sidebar-nav-item-with-submenu"
                                                    onMouseEnter={handleBoardMouseEnter}
                                                    onMouseLeave={handleBoardMouseLeave}
                                                >
                                                <a href="/" className="sidebar-nav-item">📝 게시판</a>
                                                    {showBoardSubmenu && (
                                                        <div className="submenu">
                                                            <ul className="submenu-list">
                                                                <li><a href="/free" className="submenu-item">자유게시판</a></li>
                                                                <li><a href="/question" className="submenu-item">질문게시판</a></li>
                                                                <li><a href="/tip" className="submenu-item">팁&노하우</a></li>
                                                                <li><a href="/review" className="submenu-item">후기게시판</a></li>
                                                            </ul>
                                                        </div>
                                                    )}
                                                </li>
                                                <li><a href="/" className="sidebar-nav-item">📁 자료실</a></li>
                                                <li><a href="/" className="sidebar-nav-item">🖼️ 갤러리</a></li>
                                                <li><a href="/" className="sidebar-nav-item">👥 회원목록</a></li>
                                                <li><a href="/" className="sidebar-nav-item">❓ Q&A</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </CSSTransition>
                        </div>
                        <div className="d-flex align-items-center">
                            <button className="btn btn-outline-dark login">로그인</button>
                            <button className="btn btn-outline-dark mypage">마이페이지</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;