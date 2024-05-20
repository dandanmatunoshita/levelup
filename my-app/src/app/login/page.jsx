'use client'

import Image from 'next/image';
import styles from './page.module.css';
import { useRouter } from 'next/navigation'
import Link from "next/link";



export default function Login(){
    const router = useRouter();
    
    return(
        <div className={styles.login_container}>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Button
            </button>
            <div className={styles.login_header}>
                <button onClick={()=>router.push('/carrinho')}>Cadastro</button>
            </div>
            <div className={styles.login_body}>
                <div className={styles.login_img}>
                    <Image
                    src="/img_login.jpg"
                        width={250}
                        height={250}
                    />
                </div>
                <div className={styles.login_info}>
                    <h1>Login</h1>
                    <form>
                        <span>Email</span>
                        <input type="email" placeholder="Email"/>
                        <span>Senha</span>
                        <input type="password" placeholder="Senha"/>
                        <button type="submit" onClick={()=>router.push('/home')}>Entrar</button>
                    </form>
                </div>
            </div>
        </div> 
    )
}
