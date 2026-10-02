import Hero from '../components/home/Hero'
import SwapMarket from '../components/home/SwapMarket'
import SwapFlowDiagram from '../components/home/SwapFlowDiagram'
import ProtocolModes from '../components/home/ProtocolModes'
import RoleCards from '../components/home/RoleCards'
import QuickLinks from '../components/home/QuickLinks'

export default function Home() {
  return (
    <>
      <div className="home-page relative overflow-hidden">
        <div className="home-page__inner site-shell relative pb-20">
          <Hero />
          <SwapFlowDiagram />
          <ProtocolModes />
          <SwapMarket />
          <RoleCards />
          <QuickLinks />
        </div>
      </div>
    </>
  )
}
