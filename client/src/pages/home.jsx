import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, ContactForm } from '../container';
import { Navbar } from '../components';

const Home = () => {

  const domain = process.env.REACT_APP_EXPRESS_DOMAIN;
  console.log(domain)

  return (
    <div>
      <div className='app_navbar'>
        <Navbar href={true} />
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
      <Footer newsletter={true} /> 
    </div>
  );
};

export default Home;