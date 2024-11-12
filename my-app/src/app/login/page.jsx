'use client'

import Image from 'next/image';
import styles from './login.module.css';
import { useRouter } from 'next/navigation';
import { server } from '../config';
import { useState } from 'react';



export default function Login(){
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        senha: ''
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${server}login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();;
                const token = data.token;
                localStorage.setItem('token', token);
                alert("Login realizado com sucesso!",token);
                router.push('/inicio');
            } else {
                const errorData = await response.json();
                alert(`Erro no login: ${errorData.msg}`);
            }
        } catch (error) {
            console.error('Erro no login:', error);
            alert("Erro ao realizar o login. Por favor, tente novamente.");
        }
    };

    return(
        
        <div className={styles.login_container}>
            <div className={styles.login_header}>
                <button className={styles.btn_primary} onClick={()=>router.push('/cadastro')}>Cadastre-se</button>
            </div>
            <div className={styles.login_body}>
                <div className={styles.login_img}>
                    <Image
                    src="/img_login.jpg"
                        width={600}
                        height={600}
                    />
                </div>
                <div className={styles.login_info}>
                    <h1>Login</h1>
                    <form className={styles.login_form} onSubmit={handleSubmit}>
                        <div className={styles.email}>
                            <span>Email</span>
                            <input type="email" name='email' placeholder="Email" className={styles.info} onChange={handleChange} required/>
                        </div>
                        <div className={styles.password}>
                            <span>Senha</span>
                            <input type="password" name='senha' placeholder="Senha" className={styles.info} onChange={handleChange} required/>
                            <div className={styles.forgot_password}>
                                <span><input type='checkbox'/>Lembrar-me</span>
                                <u>Esqueceu a senha?</u>
                            </div>
                        </div>
                        <button type="submit">Entrar</button>
                    </form>
                </div>
            </div>
        </div> 
    )
}
