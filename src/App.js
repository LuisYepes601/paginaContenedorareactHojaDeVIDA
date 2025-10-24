import React, { useState } from 'react';
import { Nav, Container, Card } from 'react-bootstrap';
import './App.css';

function App() {
  const [activeKey, setActiveKey] = useState('Lisandro');
  const [iframeSrc, setIframeSrc] = useState('https://hoja-de-vida-lisandro-reactt-gyoe.vercel.app');


  const portfolios = [
    { key: 'ramiro', label: 'Ramiro Barrios', src: 'https://hoja-de-vida-ramiro-react.vercel.app/' },
    { key: 'luis', label: 'Luis Yepes', src: 'https://hoja-dev-ida-luis-yepes-react-biwl.vercel.app/' },
   { key: 'lisandro', label: 'Lisandro Jose', src: 'https://hoja-de-vida-lisandro-reactt-gyoe.vercel.app' },
    { key: 'jesus', label: 'Jesus Ballesteros', src: 'https://hoja-de-vida-jesus-reactt-ivqk.vercel.app/' },
    { key: 'andres', label: 'Andres Fernando', src: 'https://hoja-de-vida-andres-react.vercel.app/' },
  ];
/**/ 
  const handleSelect = (selectedKey) => {
    setActiveKey(selectedKey);
    const selectedPortfolio = portfolios.find(p => p.key === selectedKey);
    setIframeSrc(selectedPortfolio.src);
  };

  return (
    <Container className="py-4 bg-light">
      {/* Encabezado */}
      <h1 className="text-center mb-4 text-primary">🌐 Portafolios en Iframe</h1>

      {/* Menú con enlaces */}
      <Nav variant="pills" className="justify-content-center flex-wrap mb-4" activeKey={activeKey} onSelect={handleSelect}>
        {portfolios.map(portfolio => (
          <Nav.Item key={portfolio.key}>
            <Nav.Link eventKey={portfolio.key}>{portfolio.label}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      {/* Contenedor del iframedd */}
      <Card className="shadow">
        <Card.Body>
          <iframe
            id="mi_iframe"
            name="mi_iframe"
            src={iframeSrc}
            className="responsive-iframe"
            title="Portfolio Iframe"
          />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
