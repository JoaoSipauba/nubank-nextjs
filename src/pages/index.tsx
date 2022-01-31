import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { ProfileBanner } from '../components/ProfileBanner'

const Home: NextPage = () => {
  return (
    <>
      <Header/>
      <ProfileBanner/>
    </>
  )
}

export default Home
