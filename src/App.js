import GlobalStyles from './styles/GlobalStyles';

import Header from './components/Header';
import Main from './components/Main';
import SectionModal from './components/SectionModal';
import SectionInfo from './components/SectionInfo';
import SectionAvaliations from './components/SectionAvaliations';

function App() {
  return (
    <>
        <GlobalStyles />

        <Header />
        <Main />
        <SectionModal />
        <SectionInfo />
        <SectionAvaliations />
    </>
  );
}

export default App;
