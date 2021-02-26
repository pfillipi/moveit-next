import '../styles/global.css'

import { ChallengesProvider } from '../contexts/ChallengesContext'
import { CountdownProvider } from '../contexts/CountdownContext'

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
