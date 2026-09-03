import { Cabecalho } from './components/Cabecalho'
import { ContatoFlutuante } from './components/ContatoFlutuante'
import { Rodape } from './components/Rodape'
import { AccessBars } from './sections/AccessBars'
import { ComoFunciona } from './sections/ComoFunciona'
import { Cristina } from './sections/Cristina'
import { CTAFinal } from './sections/CTAFinal'
import { FAQ } from './sections/FAQ'
import { Hero } from './sections/Hero'
import { ParaVoce } from './sections/ParaVoce'
import { Reencontro } from './sections/Reencontro'
import { SetembroAmarelo } from './sections/SetembroAmarelo'

export default function App() {
  return (
    <>
      <Cabecalho />
      <main id="conteudo">
        <Hero />
        <SetembroAmarelo />
        <Reencontro />
        <ComoFunciona />
        <ParaVoce />
        <Cristina />
        <AccessBars />
        <FAQ />
        <CTAFinal />
      </main>
      <Rodape />
      <ContatoFlutuante />
    </>
  )
}
