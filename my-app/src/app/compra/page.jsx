'use client'

import Image from 'next/image'; 
import styles from './compra.module.css';
import { useRouter } from 'next/navigation'

export default function Compra(){
    const router = useRouter();

    return(
        <><div className={styles.compra_pagamento}>
            <div className={styles.compra_pagamento_body}>
                <div className={styles.compra_pagamento_info}>
                    <h1>Checkout</h1>
                    <br />
                    <h2>Pagamento</h2>
                    <form className={styles.compra_pagamento_form}>
                    <div className={styles.nome}>
                            <span>Nome</span>
                            <input type="email" placeholder="Email" className={styles.info}/>
                        </div>
                        <div className={styles.email}>
                            <span>Email</span>
                            <input type="email" placeholder="Email" className={styles.info}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className={styles.compra_carrinho}>
            Finalizar
        </div></>
    )
}