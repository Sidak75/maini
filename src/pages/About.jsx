import aboutimage from '../assets/Brands/aboutimage.png';
import mainiauto from '../assets/Brands/MainiAutoAgenciesLogo.svg';
import HeritageExporstLogo from '../assets/Brands/HeritageExportsLogo.svg';
import MainiAutoIncorporationLogo from '../assets/Brands/MainiAutoIncorporationLogo.svg';
import LokEnterprisesLogo from '../assets/Brands/LokEnterprisesLogo.svg';
import parts from '../assets/Icon/parts.png';
import group from '../assets/Icon/group.png';
import customer from '../assets/Icon/customer.png';
import work from '../assets/Icon/work.png';
import '../design/Home.css';


const About = () => {
    return (
        <div>
            <div className="container my-5 pt-5">
                <div className="row align-items-center justify-content-center mt-5 pt-3">
                    <div className=' col-md-6 mb-4'>
                        <h2 className="fw-bold text-center"><span className='text-danger'>A</span>bout <span className='text-danger'>M</span>aini <span className='text-danger'>G</span>roup</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center">
                            Helping businesses <span className="bg-green-200 px-1">succeed</span> through the power .
                        </h3>
                        <p className='fw-semibold' style={{ textAlign: 'justify' }}>
                            Maini Auto Agencies Pvt. Ltd. led by Mr. Virmeet (Bobby) Singh Maini & Jaspreet (Mintu) Singh Maini decided to break-away from the traditional mindset of doing business where companies have engaged in head-to-head competition in search of sustained, profitable growth. We realized that these hallmarks of competitive strategy were not the way to create profitable growth in the future.
                        </p>
                        <p className='fw-semibold' style={{ textAlign: 'justify' }}>
                            Maini Group, a symbol of excellence in the distribution of automobile spares. With an enduring spirit of "Better Everyday," our businesses have transcended traditional market strategies, consistently steering towards quality and customer satisfaction.
                        </p>
                        <p className='fw-semibold' style={{ textAlign: 'justify' }}>
                            Founded in 1992, we've grown through market fluctuations with resilience and passion, emerging as a leading force in the automotive after parts market in and around Pune district. Our vision is clear: To be at the forefront of the automotive parts industry's modern evolution, setting benchmarks and redefining distribution standards along the way.
                        </p>
                    </div>

                    <div className="col-md-6 mb-4">
                        <img
                            src={aboutimage}
                            alt="About Maini Group"
                            className="rounded-xl shadow-lg img-fluid"
                            style={{maxHeight:"600px",}}
                        />
                    </div>

                    <div className='mt-3'>
                        <p className='fw-semibold' style={{ textAlign: 'justify' }}>
                            Our unique business model emphasizes not just efficient delivery systems but also adds significant value to each product. It's not just about reaching our customers; it's about reaching them with the utmost standards of promptness, reliability, and excellence.
                        </p>
                        <p className='fw-semibold' style={{ textAlign: 'justify' }}>
                            With a strong team of over 180 dedicated employees, a fleet of 14 self-owned delivery vehicles, and an impressive annual revenue exceeding 100 crores, we proudly stand as a testament to the remarkable results achievable through meticulous execution of simple ideas.
                            Join us on this journey, where we continue to make significant strides in providing unparalleled value to our customers through our pursuit of differentiation and being "Better Everyday", all reflected in our robust financial performance.
                        </p>
                    </div>

                    
                    <h3 className="text-center fw-bold mt-4">Our Achivement</h3>
                    <div className="achievement-section py-5">
                        <div className="container">
                            <div className="row justify-content-center text-center g-4">
                                <div className="col-6 col-md-3 mb-3">
                                    <div className="achievement-box">
                                        <div className="icon-circle">
                                            <img src={parts} alt="Parts Icon" className="icon-img img-fluid" />
                                        </div>
                                        <h5 className="stat-number">30,000+</h5>
                                        <p className="stat-label">Parts</p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3 mb-3">
                                    <div className="achievement-box">
                                        <div className="icon-circle">
                                            <img src={customer} alt="Customers Icon" className="icon-img img-fluid" />
                                        </div>
                                        <h5 className="stat-number">1500+</h5>
                                        <p className="stat-label">Happy Customers</p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3 mb-3">
                                    <div className="achievement-box">
                                        <div className="icon-circle">
                                            <img src={group} alt="Companies Icon" className="icon-img img-fluid" />
                                        </div>
                                        <h5 className="stat-number">4</h5>
                                        <p className="stat-label">Group Companies</p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3 mb-3">
                                    <div className="achievement-box">
                                        <div className="icon-circle">
                                            <img src={work} alt="Workforce Icon" className="icon-img img-fluid" />
                                        </div>
                                        <h5 className="stat-number">240+</h5>
                                        <p className="stat-label">Strong Workforce</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container my-5">
                        <h3 className="text-center fw-bold mb-4">Our Group of Companies</h3>

                        <div className="row g-4 justify-content-center mt-5">
                            <div className="col-6 col-md-3">
                                <div className="card shadow-sm h-150 border-1 text-center p-3 rounded-4 hover-shadow">
                                    <img src={mainiauto} className="img-fluid rounded" alt="Maini Auto" />
                                    <h6 className="mt-3 fw-semibold"> Maini Auto Agencies Pvt. Ltd.</h6>
                                </div>
                            </div>

                            <div className="col-6 col-md-3">
                                <div className="card shadow-sm h-150 border-1 text-center p-3 rounded-4 hover-shadow">
                                    <img src={HeritageExporstLogo} className="img-fluid rounded" alt="Heritage Exports" />
                                    <h6 className="mt-3 fw-semibold">Heritage Exports</h6>
                                </div>
                            </div>

                            <div className="col-6 col-md-3">
                                <div className="card shadow-sm h-150 border-1 text-center p-3 rounded-4 hover-shadow">
                                    <img src={MainiAutoIncorporationLogo} className="img-fluid rounded" alt="Maini Auto Inc." />
                                    <h6 className="mt-3 fw-semibold">Maini Auto Incorporation</h6>
                                </div>
                            </div>

                            <div className="col-6 col-md-3">
                                <div className="card shadow-sm h-150 border-1 text-center p-3 rounded-4 hover-shadow">
                                    <img src={LokEnterprisesLogo} className="img-fluid rounded" alt="Lok Enterprises" />
                                    <h6 className="mt-3 fw-semibold">LOK Enterprises</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </div>
    );
};
export default About;
