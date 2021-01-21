import GlobalStyles from './styles/GlobalStyles';

import Header from './components/Header';
import Main from './components/Main';
import SectionModal from './components/SectionModal';
import SectionInfo from './components/SectionInfo';
import SectionAvaliations from './components/SectionAvaliations';
import BannerHelp from './components/BannerHelp';
import Footer from './components/Footer';

function App() {
  return (
    <>
        <GlobalStyles />

        <Header />
        <Main />
        <SectionModal />
        <SectionInfo />
        <SectionAvaliations />
        <BannerHelp />
        <Footer />
    </>
  );
}

export default App;
