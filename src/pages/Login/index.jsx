import React from 'react';
import { Input, Button, BgLogin } from '../../components';
import { useHistory } from 'react-router-dom';
import { useSyncCall } from '../../hooks';

function Login() {

    const syncCall = useSyncCall();
    const history = useHistory();

    const handleLogin = () => {
        syncCall(true, 'auth.logged')
        history.push('/dashboard');
    }

    return (
        <div className="all-page center-content bg-primus-color-dark-2">
            <BgLogin />
            <div className="login-container center-content">
                <div className="credentials">
                    <Input
                        label="Email"
                        className="mb-2"
                    />
                    <Input
                        label="Senha"
                        type="password"
                    />
                </div>
                <div className="cta-login-container">
                    <Button
                    label="LOG IN"
                    onClick={handleLogin}
                    />
                </div>
            </div>
        </div>
    );
}

export default Login;