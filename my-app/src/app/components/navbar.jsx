import Image from 'next/image';
import Link from 'next/link';
import styles from './navbar.module.css';

export default function Navbar({page}){
    return(
        <nav className={styles.navbar}>
            <ul className={styles.navlist}>
                <li className={styles.navitem}>
                    <Link href={"/inicio"}>
                        <Image
                            src="/logo_levelup.svg"
                            width={60}
                            height={60}
                        />
                    </Link>
                </li>
                <li className={styles.navitem}>
                    <input type="text" className={styles.search} placeholder='Pesquisa' />
                </li>
                <li className={styles.navitem}>
                    <Image src={"/carrinho.svg"} 
                            width={60}
                            height={60}/>
                    <Image src={"/perfil (2).svg"}
                            width={60}
                            height={60}/>
                </li>
            </ul>
            <ul className={styles.subnavlist}>
                <li className={(styles.subnavitem, styles.select)}><a href="">Inicio</a></li>
                <li className={styles.subnavitem}><a href="">Jogos</a></li>
                <li className={styles.subnavitem}><a href="">Cartões-Presentes</a></li>
                <li className={styles.subnavitem}><a href="">Xbox</a></li>
                <li className={styles.subnavitem}><a href="">Playstation</a></li>
                <li className={styles.subnavitem}><a href="">Nintendo</a></li>
            </ul>

        </nav>
    )
}