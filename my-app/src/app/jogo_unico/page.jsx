'use client';

import Navbar from '../components/navbar';
import Image from 'next/image';
import styles from './jogo_unico.module.css';
import { useRouter } from 'next/navigation'

export default function JogoUnico(){
    const router = useRouter();

    return(
        <div className={styles.unico_container}>
            <Navbar/>
            <div className={styles.unico_body}>
                <div className={styles.unico_info}>
                    <div className={styles.unico_imgs}>
                        <Image src={"/Big_game.png"} width={600} height={600}/>
                        <Image src={"/under_big_game.png"} width={600} height={600}/>
                    </div>
                    <div className={styles.unico_card}>
                        <div className={styles.unico_titulo}>
                            <h1>RED DEAD REDEMPITION 2</h1>
                        </div>
                        <div className={styles.unico_under}>
                            <div className={styles.unico_preco}>
                                <span>R$ 100,00</span>
                            </div>
                            <div className={styles.unico_botao}>
                                <button onClick={()=>router.push('/carrinho')}>Adicionar ao carrinho</button>
                            </div>  
                        </div>
                    </div>
                </div>
                <div className={styles.unico_descricao}>
                    <div className={styles.unico_desctitulo}>
                        <h2>Descrição</h2>
                    </div>
                    <div className={styles.unico_desctexto}>
                        <p>Red Dead Redemption 2 é um jogo de ação e aventura em mundo aberto desenvolvido pela Rockstar Games. O jogo se passa em 1899, no final da era do Velho Oeste, e segue a história do fora-da-lei Arthur Morgan, membro da gangue Van der Linde.</p>
                    </div>
                </div>
                <div className={styles.unico_comentario}>
                    <div className={styles.unico_comentitulo}>
                        <h2>Comentário</h2>
                    </div>
                    <div className={styles.unico_comeninfo}>
                        <div className={styles.unico_comenup}>
                            <div className={styles.unico_comennome}>
                                <Image src={"/perfil.svg"} width={30} height={30}/>
                                <span>Lucas</span>
                            </div>
                            <div className={styles.unico_comenestrela}>
                                <Image src={"/estrela.svg"} width={24} height={24}/>
                                <Image src={"/estrela.svg"} width={24} height={24}/>
                                <Image src={"/estrela.svg"} width={24} height={24}/>
                                <Image src={"/estrela.svg"} width={24} height={24}/>
                                <Image src={"/estrela.svg"} width={24} height={24}/>
                            </div>
                        </div>
                        <div className={styles.unico_comentexto}>
                            <p>Red Dead Redemption 2 é um jogo de ação e aventura em mundo aberto desenvolvido pela Rockstar Games. O jogo se passa em 1899, no final da era do Velho Oeste, e segue a história do fora-da-lei Arthur Morgan, membro da gangue Van der Linde.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}