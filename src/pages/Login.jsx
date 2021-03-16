import React from 'react';
import { Input, Button } from '../components'

function Login() {
    return (
        <div className="all-page center-content bg-primus-color-dark-2">
            <div className="login-container center-content">
                <div className="credentials">
                    <Input
                        label="Email"
                        className="mb-2"
                    />
                    <Input
                        label="Senha"
                    />
                </div>
                <div className="cta-login-container">
                    <Button
                    label="LOG IN"
                    />
                </div>
            </div>
        </div>
    );
}

export default Login;