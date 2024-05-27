'use client'

import Image from 'next/image'; 
import styles from './cadastro.module.css';
import { useRouter } from 'next/navigation'

export default function Cadastro(){
    const router = useRouter();

    return(
        <div className={styles.cadastro_container}>
            <div className={styles.cadastro_header}>
                <button className={styles.btn_primary} onClick={()=>router.push('/login')}>Entre</button>
            </div>
            <div className={styles.cadastro_body}>
                <div className={styles.cadastro_img}>
                    <Image
                    src="/Rectangle 34.svg"
                        width={600}
                        height={600}
                    />
                </div>
                <div className={styles.cadastro_info}>
                    <h1>Cadastro</h1>
                    <form className={styles.cadastro_form}>
                        <div className={styles.nome}>
                            <span>Nome</span>
                            <input type="email" placeholder="Email" className={styles.info}/>
                        </div>
                        <div className={styles.email}>
                            <span>Email</span>
                            <input type="email" placeholder="Email" className={styles.info}/>
                        </div>
                        <div className={styles.password}>
                            <span>Senha</span>
                            <input type="password" placeholder="Senha" className={styles.info}/>
                        </div>
                        <div className={styles.repeat_password}>
                            <span>Repetir Senha</span>
                            <input type="password" placeholder="Senha" className={styles.info}/>
                        </div>
                    </form>
                    <button type="submit" onClick={()=>router.push('/inicio')}>Entrar</button>
                </div>
            </div>
            </div> 
    )
}
