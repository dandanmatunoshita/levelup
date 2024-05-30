'use client'

import Navbar from '../components/navbar';
import styles from './compra.module.css';
import Image from 'next/image';

export default function Compra(){
    return(
        <div className={styles.compra_container}>
            <Navbar/>
            <div className={styles.compra_body}>
                <div className={styles.compra_info}>
                    <h1>Checkout</h1>
                    <h2>Pagamento</h2>
                    <form className={styles.compra_form}>
                        <div className={`${styles.compra_nome} ${styles.grupo}`}>
                            <label>Nome Completo</label>
                            <input type="text" id="" />
                        </div>
                        <div className={`${styles.compra_endereco} ${styles.grupo}`}>
                            <label>Endereço</label>
                            <input type="text" id="" />
                        </div>
                        <div className={styles.compra_cidade_estado}>
                            <div className={`${styles.compra_cidade} ${styles.grupo}`}>
                                <label>Cidade</label>
                                <input type="text" id="" />
                            </div>
                            <div className={`${styles.compra_estado} ${styles.grupo}`}>
                                <label>Estado</label>
                                <input type="text" id="" />
                            </div>
                        </div>
                        <div className={`${styles.compra_cartao} ${styles.grupo}`}>
                            <label>Numero do cartão</label>
                            <input type="text" id="" />
                        </div>
                        <div className={styles.compra_validade_cvc}>
                            <div className={`${styles.compra_validade} ${styles.grupo}`}>
                                <label>Validade</label>
                                <input type="text" id="" />
                            </div>
                            <div className={`${styles.compra_cvc} ${styles.grupo}`}>
                                <label>CVC</label>
                                <input type="text" id="" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className={styles.compra_carrinho}>
                    <div className={styles.compra_card_top}>
                        <h2><strong>Carrinho</strong></h2>
                        <div className={styles.compra_card_info}>
                            <Image src={'/reddead_carrinho.png'} width={80} height={80}/>
                            <span>RED DEAD REDEMPITION 2</span>
                        </div>
                    </div>
                    <div className={styles.compra_card_bot}>
                        <div className={styles.compra_preco}>
                            <span>Total</span>
                            <span><strong>R$ 100,00</strong></span>
                        </div>
                        <button><strong>Finalizar</strong></button>
                    </div>
                </div>
            </div>
        </div>
    )
}