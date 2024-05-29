'use client';

import styles from './inicio.module.css';
import { useEffect } from 'react';
import Navbar from '../components/navbar';
import Image from 'next/image';
import Card from '../components/card';
import Link from 'next/link';

export default function Inicio() {

    const data = [
        { id: 1, imagem: '/gow.png', nome: 'God of War', preco:"R$100,00"},
        { id: 2, imagem: '/lou.png', nome: 'The Last of Us', preco:"R$100,00"},
        { id: 3, imagem: '/zelda.png', nome: 'Legend of Zelda', preco:"R$100,00"},
        { id: 4, imagem: '/gow.png', nome: 'God of War', preco:"R$100,00"},
        { id: 5, imagem: '/lou.png', nome: 'The Last of Us', preco:"R$100,00"},
        { id: 6, imagem: '/zelda.png', nome: 'Legend of Zelda', preco:"R$100,00"},
        { id: 7, imagem: '/gow.png', nome: 'God of War', preco:"R$100,00"},
        { id: 8, imagem: '/lou.png', nome: 'The Last of Us', preco:"R$100,00"},
        { id: 9, imagem: '/zelda.png', nome: 'Legend of Zelda', preco:"R$100,00"},
        { id: 10, imagem: '/gow.png', nome: 'God of War', preco:"R$100,00"},
        { id: 11, imagem: '/lou.png', nome: 'The Last of Us', preco:"R$100,00"},
        { id: 12, imagem: '/zelda.png', nome: 'Legend of Zelda', preco:"R$100,00"},
      ];

    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.inicio_body}>
                
                    {data.map((info)=>(
                        <Link href="/jogo_unico" className={styles.link}>
                            <Card info={info} />
                        </Link>
                    ))}
                
            </div>
        </div>
    );
}
