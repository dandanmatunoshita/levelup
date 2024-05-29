import { useRouter } from 'next/navigation'
import Image from 'next/image';
import Link from 'next/link';
import styles from './card.module.css';

export default function card({info}){
    return(
        <div className={styles.card}>
            <div className={styles.card_image}>
                <Image src={info.imagem} width={200} height={200}/>
            </div>
            <div className={styles.card_info}>
                <h1>{info.nome}</h1>
                <div className={styles.card_carrinho}>
                    <p>{info.preco}</p>
                    <Image src={"/carrinho.svg"} width={20} height={20}/>
                </div>
            </div>
        </div>
    )
}