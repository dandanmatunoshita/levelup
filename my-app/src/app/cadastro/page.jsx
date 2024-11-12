'use client'

import Image from 'next/image';
import styles from './cadastro.module.css';
import { useRouter } from 'next/navigation'
import { server } from '../config';
import { useState } from 'react';

export default function Cadastro(){
    const router = useRouter();
    const [formData, setFormData] = useState({
        usu_nome: '',
        usu_email: '',
        usu_senha: '',
        confirmarSenha: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(formData.usu_senha !== formData.confirmarSenha) {
            alert("As senhas não coincidem!");
            return;
        }

        try {
            const response = await fetch(`${server}user`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Cadastro realizado com sucesso!");
                router.push('/login');
            } else {
                const errorData = await response.json();
                alert(`Erro no cadastro: ${errorData.message}`);
            }
        } catch (error) {
            console.error('Erro ao cadastrar:', error);
            alert("Erro ao realizar o cadastro. Por favor, tente novamente.");
        }
    };

    return(
        <div className={styles.cadastro_container}>
            <div className={styles.cadastro_header}>
                <button className={styles.btn_primary} onClick={()=>router.push('/login')}>Entre</button>
            </div>
            <div className={styles.cadastro_body}>
                <div className={styles.cadastro_img}>
                    <Image
                        src="/img_login.jpg"
                        width={600}
                        height={600}
                        alt="Imagem de cadastro"
                    />
                </div>
                <div className={styles.cadastro_info}>
                    <h1>Cadastro</h1>
                    <form className={styles.cadastro_form} onSubmit={handleSubmit}>
                        <div className={styles.nome}>
                            <span>Nome</span>
                            <input type="text" name="usu_nome" placeholder="Nome" className={styles.info} onChange={handleChange} required/>
                        </div>
                        <div className={styles.email}>
                            <span>Email</span>
                            <input type="email" name="usu_email" placeholder="Email" className={styles.info} onChange={handleChange} required/>
                        </div>
                        <div className={styles.password}>
                            <span>Senha</span>
                            <input type="password" name="usu_senha" placeholder="Senha" className={styles.info} onChange={handleChange} required/>
                        </div>
                        <div className={styles.repeat_password}>
                            <span>Repetir Senha</span>
                            <input type="password" name="confirmarSenha" placeholder="Confirmar Senha" className={styles.info} onChange={handleChange} required/>
                        </div>
                        <button type="submit">Cadastrar</button>
                    </form>
                </div>
            </div>
        </div> 
    )
}