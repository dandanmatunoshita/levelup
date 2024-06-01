'use client'

import Navbar from '../components/navbar';
import styles from './aprovado.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation'

export default function Aprovado(){
    const router = useRouter();

    return(
        <div className={styles.aprovado_container}>
            <Navbar/>
            <div className={styles.aprovado_body}>
                <h2>COMPRA APROVADA</h2>
                <Image src={'/checked.svg'} width={200} height={200}/>
                <button onClick={()=>router.push('/inicio')}>Voltar ao Inicio</button>
            </div>
        </div>
    );
}