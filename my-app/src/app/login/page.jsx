'use client'

import Image from 'next/image';
import styles from './login.module.css';
import { useRouter } from 'next/navigation'



export default function Login(){
    const router = useRouter();
    
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
                    <form className={styles.login_form}>
                        <div className={styles.email}>
                            <span>Email</span>
                            <input type="email" placeholder="Email" className={styles.info}/>
                        </div>
                        <div className={styles.password}>
                            <span>Senha</span>
                            <input type="password" placeholder="Senha" className={styles.info}/>
                            <div className={styles.forgot_password}>
                                <span><input type='checkbox'/>Lembrar-me</span>
                                <u>Esqueceu a senha?</u>
                            </div>
                        </div>
                    </form>
                    <button type="submit" onClick={()=>router.push('/inicio')}>Entrar</button>
                </div>
            </div>
        </div> 
    )
}
