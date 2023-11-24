import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Welcome to Pokemonland</h1>
        <Link href="/pokemons">
          <p> click here   </p>
        </Link>
      </div>
        
            <Image
              src="/large.svg"
              alt="Poke Logo"
              className={styles.vercelLogo}
              width={1000}
              height={500}
              priority
            />
    </main>
  )
}
