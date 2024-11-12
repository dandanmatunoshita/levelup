'use client';

import { useEffect, useState } from 'react';
import Navbar from '../../components/navbar';
import Image from 'next/image';
import styles from './jogo_unico.module.css';
import { useRouter, useParams } from 'next/navigation';

export default function JogoUnico() {
    const router = useRouter();
    const { id } = useParams();
    const [jogo, setJogo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (id) {
            const fetchJogo = async () => {
                try {
                    const response = await fetch(`https://8080-eduardormoraes-pi4termo-th5o0yx9urm.ws-us116.gitpod.io/game/${id}`);
                    if (response.ok) {
                        const gameData = await response.json();
                        setJogo(gameData);
                    } else {
                        console.error("Erro ao buscar o jogo:", response.statusText);
                    }
                } catch (error) {
                    console.error("Erro na requisição:", error);
                } finally {
                    setIsLoading(false);
                }
            };

            fetchJogo();
        }
    }, [id]);

    if (isLoading) {
        return <div>Carregando...</div>;
    }

    if (!jogo) {
        return <div>Jogo não encontrado</div>;
    }

    return (
        <div className={styles.unico_container}>
            <Navbar />
            <div className={styles.unico_body}>
                <div className={styles.unico_info}>
                    <div className={styles.unico_imgs}>
                        <Image src={"/Big_game.png"} width={600} height={600} alt={jogo.jog_titulo} />
                        <Image src={"/under_big_game.png"} width={600} height={600} alt={jogo.jog_titulo} />
                    </div>
                    <div className={styles.unico_card}>
                        <div className={styles.unico_titulo}>
                            <h1>{jogo.jog_titulo}</h1>
                        </div>
                        <div className={styles.unico_under}>
                            <div className={styles.unico_preco}>
                                <span>R$ {jogo.jog_preco},00</span>
                            </div>
                            <div className={styles.unico_botao}>
                                <button onClick={() => router.push('/carrinho')}>Adicionar ao carrinho</button>
                            </div>  
                        </div>
                    </div>
                </div>
                <div className={styles.unico_descricao}>
                    <div className={styles.unico_desctitulo}>
                        <h2>Descrição</h2>
                    </div>
                    <div className={styles.unico_desctexto}>
                        <p>{jogo.jog_descricao}</p>
                    </div>
                </div>
                <div className={styles.unico_comentario}>
                    <div className={styles.unico_comentitulo}>
                        <h2>Comentário</h2>
                    </div>
                    <div className={styles.unico_comeninfo}>
                        <div className={styles.unico_comenup}>
                            <div className={styles.unico_comennome}>
                                <Image src={"/perfil.svg"} width={30} height={30} alt="Perfil" />
                                <span>Lucas</span>
                            </div>
                            <div className={styles.unico_comenestrela}>
                                <Image src={"/estrela.svg"} width={24} height={24} alt="Estrela" />
                                <Image src={"/estrela.svg"} width={24} height={24} alt="Estrela" />
                                <Image src={"/estrela.svg"} width={24} height={24} alt="Estrela" />
                                <Image src={"/estrela.svg"} width={24} height={24} alt="Estrela" />
                                <Image src={"/estrela.svg"} width={24} height={24} alt="Estrela" />
                            </div>
                        </div>
                        <div className={styles.unico_comentexto}>
                            <p>{jogo.jog_descricao}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
