import React from 'react'
import Page from '../components/Page'
import Navbar from '../components/navbars/TopBar'
import Footer from '../components/footers/MainFooter'

const metas = {
  title: 'Jest to strona główna projektu',
  description: 'Jak kuż wpominałem to ejst pppp'
}


const Home = () => (
  <Page
    metas={metas}
    navbar={Navbar}
    footer={Footer}
  >
    <div>
      content
    </div>
  </Page>
)

export default Home
