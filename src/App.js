import './App.css';
import actions from "./components/data";
import Card from './components/Card/Card';
import Footer from './components/Footer';
function App() {

  return (
    <>

      <h1 className='text-5xl font-medium text-center drop-shadow-2xl shadow-black'>
        All you need is here
      </h1>
      <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-5 lg-gap-10 px-5 py-10 bg-white'>
        {
          actions?.shortcutdata.map((data, index) => <Card data={data} key={index} />)
        }
      </section>
      <Footer />
    </>
  );
}

export default App;
