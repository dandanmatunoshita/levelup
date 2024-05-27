'use client'


import styles from './inicio.module.css';
import { useRouter } from 'next/navigation'
import Navbar from '../components/navbar';



export default function Inicio(){
    return(
        <div className={styles.container}>
            <Navbar/>
            inicio
        </div>
    )
}
