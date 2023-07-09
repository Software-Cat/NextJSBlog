import Image from 'next/image'
import countries from '../lib/countries'

export default function CountryText({ country }) {
  return (
    <div>
      <main>
        <h1>Next.js Geolocation in Edge Functions</h1>
        <p>
          {country && country !== 'undefined' ? (
            <code>
              Welcome from {countries.find((c) => c.code === country).name}
            </code>
          ) : (
            `We're unable to find you!`
          )}
        </p>
      </main>
    </div>
  )
}
