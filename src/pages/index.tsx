import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { OptionsList } from '../components/OptionsList'
import { ProfileBanner } from '../components/ProfileBanner'

const Home: NextPage = () => {
  return (
    <>
      <Header/>
      <ProfileBanner/>
      <OptionsList/>
    </>
  )
}

export default Home
