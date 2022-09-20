import './App.css';
import { Divider } from '@chakra-ui/react'
import { Layout } from './components/Layout/layout';
import { Hero } from './components/Hero'
import { Gallery } from './components/Gallery'
import { About } from './components/About'

function App() {
  return (
    <Layout className="App">
      <Hero/>
      <Divider w='95%' m='80px auto'/>
      <Gallery/>
      <Divider w='95%' m='80px auto'/>
      <About/>
      <Divider w='95%' m='80px auto'/>
    </Layout>
  );
}

export default App;
