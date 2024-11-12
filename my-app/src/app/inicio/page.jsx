'use client';

import { useEffect, useState } from 'react';
import styles from './inicio.module.css';
import Navbar from '../components/navbar';
import Card from '../components/card';
import Link from 'next/link';
import { server } from '../config';

export default function Inicio() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${server}game`);
                if (response.ok) {
                    const games = await response.json();
                    const formattedData = games.map(game => ({
                        id: game.jog_id,
                        nome: game.jog_titulo,
                        preco: `R$${game.jog_preco},00`,
                        imagem: '/gow.png'
                    }));
                    setData(formattedData);
                } else {
                    console.error("Erro ao buscar os jogos:", response.statusText);
                }
            } catch (error) {
                console.error("Erro na requisição:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.inicio_body}>
                {data.map((info) => (
                    <Link key={info.id} href={`/jogo_unico/${info.id}`} className={styles.link}>
                        <Card info={info} />
                    </Link>
                ))}
            </div>
        </div>
    );
}
