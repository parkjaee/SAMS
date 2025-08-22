import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = () => {
        console.log("로그인 시도:", username, password);
        navigate("/main");
    };

    return (
        <div className="container text-center">
            <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
                <div className="col-12 col-md-8 col-lg-4">
                    <div>
                        <h1>로그인</h1>
                    </div>
                    <div className="input-group mb-3" style={{maxWidth: "400px"}}>
                        <span className="input-group-text" id="user_id">ID</span>
                        <input type="text" className="form-control" placeholder="Username" aria-label="UserName" value={username} onChange={(e) => setUsername(e.target.value)}
                               aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3" style={{maxWidth: "400px"}}>
                        <span className="input-group-text" id="user-pw">PW</span>
                        <input type="password" className="form-control" placeholder="UserPassword" aria-label="UserPassword" value={password} onChange={(e) => setPassword((e.target.value))}
                               aria-describedby="basic-addon1"/>
                    </div>
                    <button type="submit" className="btn btn-success btn-lg" href="#" onClick={handleLogin}>로그인</button>
                    <button type="button" className="btn btn-danger btn-lg" href="#">나가기</button>
                </div>
            </div>
        </div>
    );
}

export default Login;



