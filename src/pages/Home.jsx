import Circle from '../components/Circle.jsx';
import '../design/Home.css';
import { IoPricetags } from "react-icons/io5";
import { FaBoxOpen, FaTools } from "react-icons/fa";
import { MdGroups, MdStarRate, MdHistory, MdTrendingUp } from 'react-icons/md';
import twowheeler from '../assets/twowheeler.png';
import car from '../assets/car.png';
import truck from '../assets/truck.png';
import tractor from '../assets/tractor.png';
import mainiauto from '../assets/Brands/MainiAutoAgenciesLogo.svg';
import HeritageExporstLogo from '../assets/Brands/HeritageExportsLogo.svg';
import MainiAutoIncorporationLogo from '../assets/Brands/MainiAutoIncorporationLogo.svg';
import LokEnterprisesLogo from '../assets/Brands/LokEnterprisesLogo.svg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero">
        <div className="hero-content">
          <h4 className='mb-2 welcome-line'>
            <span className="word animate-delay-1">Welcome</span>
            <span className="word animate-delay-2">to</span>
            <span className="word animate-delay-3">
              <b>
                <span className='text-danger'>M</span>aini <span className='text-danger'>G</span>roup 
              </b>
            </span>
          </h4>

          <h1 className='mb-4'>Trusted Wholesaler of <br /> Genuine Vehicle Spare Parts</h1>
          <a href="https://store.mainiauto.com/" target="_blank" rel="noopener norefferrrer" className="p-2 mx-auto text-decoration-none text-dark btn btn-warning rounded fw-semibold">Explore Products</a>
        </div>
      </div>

      <div className="homepage">
        <section className="about-section py-5 bg-white text-dark">
          <div className="container">
            <div className="row align-items-center">

              <div className="col-md-6">
                <h3 className="text-2xl font-bold text-gray-800 flex items-center mt-2">
                  <FaTools className="text-warning" /> About  <strong><span className="text-danger">M</span>aini <span className='text-danger'>G</span>roup</strong>
                </h3>

                <p className="text-gray-700 gap-2 mt-3" style={{textAlign:'justify'}}>
                  <MdStarRate size={20} className="text-warning me-2" />
                  <span>
                    <strong><span className='text-danger'>M</span>aini <span className='text-danger'>G</span>roup</strong> is a symbol of excellence in the distribution of automobile spares.
                    With a commitment to <em>"Better Everyday"</em>, we consistently deliver quality and customer satisfaction.
                  </span>
                </p>

                <p className="text-gray-700 gap-2" style={{textAlign:'justify'}}>
                  <MdHistory size={20} className="text-warning me-2" />
                  <span>
                    <strong>Founded in 1992</strong>, we have grown through market changes with resilience and passion,
                    becoming a leading name in Pune's automotive aftermarket.
                  </span>
                </p>

                <p className="text-gray-700 gap-2" style={{textAlign: 'justify'}}>
                  <MdTrendingUp size={20} className="text-warning me-2" />
                  <strong>Our Vision</strong> is to lead the modern evolution of the automotive parts industry by setting
                  new standards in <strong>Innovation</strong> and <strong>Distribution</strong>.
                </p>

                <Link to='/about' className="btn btn-warning mt-2 mb-3 hover:shadow-lg transition-all duration-300 mx-auto">
                  Learn More
                </Link>

              </div>

              <div className="col-md-6">
                <iframe
                  width="100%"
                  height="300"
                  src="https://www.youtube.com/embed/rJhKYhcI3Cg?autoplay=1&mute=1&loop=1&playlist=rJhKYhcI3Cg&rel=0"
                  title="Maini Group"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="rounded tv-show"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="features-section text-dark py-5">
          <div className="container">
            <h3 className='text-center mt-5'>Your Premier Choice for Automotive Excellence</h3>
            <div className="row text-center mt-5">
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow">
                  <div className="card-body">
                    <MdGroups size={40} className="text-danger mb-2" />
                    <h5 className="card-title">Quality Service</h5>
                    <p className="card-text" style={{textAlign:'justify'}}>Our comprehensive service extends beyond sales to include good availability of spares & fixed day fixed route, free of cost deliveries.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow">
                  <div className="card-body">
                    <FaBoxOpen size={35} className="text-danger mb-3" />
                    <h5 className="card-title">Genuine Spares Parts</h5>
                    <p className="card-text" style={{textAlign:'justify'}}>We proudly distribute a vast array of genuine spares for over 25+ brands across various vehicle categories.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow">
                  <div className="card-body">
                    <IoPricetags size={30} className="text-danger mb-3" />
                    <h5 className="card-title">Reasonable Pricing</h5>
                    <p className="card-text" style={{textAlign:'justify'}}>We guarantee competitive pricing on a wide range of products and services without compromising quality.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 position-relative service-section text-white">
          <div className="overlay"></div>
          <div className="container position-relative">
            <h2 className="text-center mb-2 fw-bold">Our Group Of Companies</h2>
            <p className="text-center mb-5">Building Excellence Together.....</p>

            <div className="row mx-1">
              {[
                { icon: <img src={mainiauto} className="img-fluid" alt="MainiAuto Agencies Logo" style={{ maxHeight: "120px" }} /> },
                { icon: <img src={HeritageExporstLogo} className="img-fluid" alt="Heritage Export Logo" style={{ maxHeight: "120px"}} /> },
                { icon: <img src={MainiAutoIncorporationLogo} className="img-fluid" alt="Maini Auto Incorporation Logo" style={{ maxHeight: "120px" }} /> },
                { icon: <img src={LokEnterprisesLogo} className="img-fluid" alt="LOK Enterprises Logo" style={{ maxHeight: "120px" }} /> },
              ].map((service, idx) => (
                <div className="col-6 col-md-6 border service-box d-flex justify-content-center align-items-center" key={idx}>
                  {service.icon}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section py-5 bg-white text-dark">
          <div className="container">
            <h3 className="text-center fw-bold mb-5">Leading Automotive Spare Parts</h3>
            <div className="row text-center g-4">

              <div className="col-6 col-md-3">
                <div className="p-4 border rounded-3 shadow-sm hover-lift">
                  <img src={twowheeler} alt="Two Wheelers" className="img-fluid mb-3" style={{ maxHeight: '150px' }} />
                  <h6 className="fw-bold">Two Wheelers</h6>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="p-4 border rounded-3 shadow-sm hover-lift">
                  <img src={car} alt="Car, Jeep & Utility" className="img-fluid mb-3" style={{ maxHeight: '150px' }} />
                  <h6 className="fw-bold">Car,Jeep & Utility</h6>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="p-4 border rounded-3 shadow-sm hover-lift">
                  <img src={truck} alt="LCV/HCV Vehicles" className="img-fluid mb-3" style={{ maxHeight: '140px' }} />
                  <h6 className="fw-bold">LCV/HCV Vehicles</h6>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="p-4 border rounded-3 shadow-sm hover-lift">
                  <img src={tractor} alt="Tractors" className="img-fluid mb-3" style={{ maxHeight: '150px' }} />
                  <h6 className="fw-bold">Tractors</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="facility-section py-5 text-white text-center">
          <div className="container">
            <h2>Authorized Distributors</h2>
            <h4 >Passenger Cars, Jeep, Truck, Tractor, Two Wheeler Spares and Accessories</h4>
            <Circle />
            
            <div className="text-end mt-2">
              <Link to="/brands" className="btn btn-warning">View All <b>→</b></Link>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;