import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import countries from '../lib/countries'

export const getServerSideProps = ({ query }) => ({
  props: query,
})

export default function CountryText({ country }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Next.js Geolocation in Edge Functions</h1>
        <p className={styles.description}>
          {country && country !== 'undefined' ? (
            <>
              <span className={styles.flag}>
                <Image
                  alt={`${country} flag`}
                  src={`https://flagcdn.com/96x72/${country.toLowerCase()}.png`}
                  width={32}
                  height={24}
                />
              </span>
              <span className={styles.welcome}>
                Welcome from {countries.find((c) => c.code === country).name}
              </span>
            </>
          ) : (
            `We're unable to find you!`
          )}
        </p>
      </main>
    </div>
  )
}
