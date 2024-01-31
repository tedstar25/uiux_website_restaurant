import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, ContactForm } from '../container';
import { Navbar } from '../components';

const Home = () => {

  return (
    <div>
      <div className='app_navbar'>
        <Navbar />
      </div>
    {/** <ContactForm/>*/} 
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer /> 
    </div>
  );
};

export default Home;