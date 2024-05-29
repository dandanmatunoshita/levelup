'use client'
import styles from './carrinho.module.css';
import Navbar from '../components/navbar';
import Image from 'next/image';
import { useRouter } from 'next/navigation'

export default function Carrinho(){
    
    const router = useRouter();

    return(
        <div className={styles.carrinho_container}>
            <Navbar/>
            <div className={styles.carrinho_body}>
                <div className={styles.carrinho_info}>
                    <div className={styles.carrinho_titulo}>
                        <h1>Carrinho</h1>
                    </div>
                    <div className={styles.carrinho_itens}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Produto</th>
                                    <th>Contador</th>
                                    <th>Preço</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className={styles.table_img}><Image src={"/reddead_carrinho.png"} width={96} height={96}/></th>
                                    <th>1</th>
                                    <th>R$100,00</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={styles.carrinho_compra}>
                    <div className={styles.carrinho_compratitulo}>
                        <h2>Promoção</h2>
                    </div>
                    <div className={styles.carrinho_cupom}>
                        <input type="text" placeholder='Digite o cumpom'/>
                        <button>Aplicar</button>
                    </div>
                    <div className={styles.carrinho_tabelacompra}>
                        <table>
                            <tbody>
                                <tr>
                                    <th scope='row'>Preço dos itens</th>
                                    <th>R$100,00</th>
                                </tr>
                                <tr>
                                    <th scope='row'>Desconto</th>
                                    <th>R$00,00</th>
                                </tr>
                                <tr>
                                    <th scope='row'>Total</th>
                                    <th>R$100,00</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.carrinho_botao}>
                        <button onClick={()=>router.push('/compra')}>Prosseguir</button>
                    </div>
                </div>
            </div>
        </div>
    )
}