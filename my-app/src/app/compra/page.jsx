'use client'

import Navbar from '../components/navbar';
import styles from './compra.module.css';

export default function Compra(){
    return(
        <div className={styles.compra_container}>
            <Navbar/>
            <div className={styles.compra_body}>
                <div className={styles.compra_info}>
                    <h1>Checkout</h1>
                    <h2>Pagamento</h2>
                    <form action="">
                        <div className={styles.compra_nome}>
                            <label>Nome Completo</label>
                            <input type="text" id="" />
                        </div>
                        <div className={styles.compra_endereco}>
                            <label>Endereço</label>
                            <input type="text" id="" />
                        </div>
                        <div className={styles.compra_cidade}>
                            <label>Cidade</label>
                            <input type="text" id="" />
                            <label>Estado</label>
                            <input type="text" id="" />
                        </div>
                        <div className={styles.compra_cartao}>
                            <label>Numero do cartão</label>
                            <input type="text" id="" />
                        </div>
                        <div className={styles.compra_validade}>
                            <label>Validade</label>
                            <input type="text" id="" />
                            <label>CVC</label>
                            <input type="text" id="" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}