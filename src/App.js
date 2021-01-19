import GlobalStyles from './styles/GlobalStyles';

import Header from './components/Header';
import Main from './components/Main';
import SectionModal from './components/SectionModal';

function App() {
  return (
    <>
        <GlobalStyles />

        <Header />
        <Main />
        <SectionModal />
    </>
  );
}

export default App;
