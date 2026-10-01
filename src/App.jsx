import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import Services from './components/Services.jsx';
import Coverage from './components/Coverage.jsx';
import About from './components/About.jsx';
import Insurance from './components/Insurance.jsx';
import QuoteForm from './components/QuoteForm.jsx';
import VanSpecs from './components/VanSpecs.jsx';
import Gallery from './components/Gallery.jsx';
import Steps from './components/Steps.jsx';
import CtaBand from './components/CtaBand.jsx';
import Blog from './components/Blog.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Coverage />
        <About />
        <Insurance />
        <QuoteForm />
        <VanSpecs />
        <Gallery />
        <Steps />
        <Blog />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}