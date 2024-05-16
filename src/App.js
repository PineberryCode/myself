import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import './global.css';
import { Main } from './view/Main';
import { About } from './view/About';

function App() {
  return (
    <>
      <ThemeProvider
      defaultTheme="system"
      attribute="class"
      enableSystem
      disableTransitionOnChange>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>

  );
}

export default App;
