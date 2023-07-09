import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import countries from '../lib/countries'

export const getServerSideProps = ({ query }) => ({
  props: query,
})

export default function CountryText({ country }) {
  return (
    <div>
      <main>
        <h1>Next.js Geolocation in Edge Functions</h1>
        <p>
          {country && country !== 'undefined' ? (
            <>
              <span>
                <Image
                  alt={`${country} flag`}
                  src={`https://flagcdn.com/96x72/${country.toLowerCase()}.png`}
                  width={32}
                  height={24}
                />
              </span>
              <span>
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
