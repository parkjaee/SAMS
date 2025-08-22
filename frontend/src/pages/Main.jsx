import React, {useState, useRef} from "react";
import { CSSTransition} from "react-transition-group";
import '../styles/Main.css';

function Main() {

    const [showSubmenu, setShowSubmenu] = useState(false);

    const toggleSubmenu = () => {
         setShowSubmenu(prev => !prev);
       };

    const nodeRef = useRef(null);

    return(
        <div>
            <div className="container text-center">
                <div className="row justify-content-center" style={{backgroundColor:"whitesmoke"}}>
                    <div className="d-flex justify-content-between align-items-center px-5 py-3">
                        <button className="btn btn-outline-dark mx-2 custom-menu-btn" onClick={toggleSubmenu}>메뉴</button>
                    </div>
                </div>
            </div>

            <CSSTransition
                in={showSubmenu}
                timeout={300}
                classNames="submenu"
                unmountOnExit
                nodeRef={nodeRef}
            >
                <div ref={nodeRef} className="submenu-box mt-3 bg-secondary p-3 rounded">
                    <ul className="list-unstyled mb-0">
                        <li className="text-white"><a href="/">공지사항</a></li>
                        <li className="text-white"><a href="/">게시판</a></li>
                        <li className="text-white"><a href="/">자료실</a></li>
                    </ul>
                </div>
            </CSSTransition>
        </div>
    );
}

export default Main;
