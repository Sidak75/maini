import '../design/Brandpage.css';

const Brands = {
  'All Brands': [
    ['Cummins', 'Cummins.png', <i className="fa-solid fa-truck"></i>],
    ['Wheels India', 'Wheels-India-Limited.png', [<i className="fa-solid fa-car"></i>, <i className="fa-solid fa-truck"></i>]],
    ['Holset', 'Holset.png', <i className="fa-solid fa-truck"></i>],
    ['Setco Lipe', 'Setco_logo.png', <i className="fa-solid fa-truck"></i>],
    ['Bosch', 'bosch.png', [<i className="fa-solid fa-motorcycle"></i>, <i className="fa-solid fa-car"></i>, <i className="fa-solid fa-truck"></i>]],
    ['Exide Battery', 'exide.png', null],
    ['Wabco', 'wabco.png', <i className="fa-solid fa-truck"></i>],
    ['Gates', 'gates.png', [<i className="fa-solid fa-car"></i>, <i className="fa-solid fa-truck"></i>]],
    ['Fenner', 'fenner.png', [<i className="fa-solid fa-motorcycle"></i>, <i className="fa-solid fa-car"></i>, <i className="fa-solid fa-truck"></i>]],
    ['Spicer SVL Dana', 'SpicerSVL_Dana_logo.png', <i className="fa-solid fa-truck"></i>],
    ['SKF', 'SKF.png', [<i className="fa-solid fa-motorcycle"></i>, <i className="fa-solid fa-car"></i>, <i className="fa-solid fa-truck"></i>]],
    ['Texspin', 'texspin.png', <i className="fa-solid fa-truck"></i>],
    ['Compo Advics', 'compoadvics.png',[ <i className="fa-solid fa-car"></i>, <i className="fa-solid fa-truck"></i>]],
    ['Mahle Behr', 'Ucal.png', <i className="fa-solid fa-car"></i>],
    ['Knorr-Bremse', 'Knorr_Bremse_logo.png', <i className="fa-solid fa-truck"></i>],
    ['Harita', 'harita.png', <i className="fa-solid fa-truck"></i>],
    ['Pidilite', 'pidilites.png', null],
    ['Ashok Leyland', 'ashok.png', <i className="fa-solid fa-truck"></i>],
    ['LIS', 'Lis.png', <i className="fa-solid fa-motorcycle"></i>],
    ['Rane', 'rane.png', [<i className="fa-solid fa-motorcycle"></i>, <i className="fa-solid fa-car"></i>, <i className="fa-solid fa-truck"></i>]],
    ['Talbros', 'Talbros_logo.png', [<i className="fa-solid fa-car"></i>, <i className="fa-solid fa-truck"></i>]],  
    ['Dyna Seal', 'dyna.png', <i className="fa-solid fa-truck"></i>],
    ['Anand I Power', 'anad_1.png', <i className="fa-solid fa-car"></i>],
    ['Truck Cam ', 'truckcam.png', <i className="fa-solid fa-truck"></i>],
    ['Lucus TVS', 'Lucus_TVS.png', <i className="fa-solid fa-motorcycle"></i>],
    ['Philips', 'Philips_logo.png', [<i className="fa-solid fa-car"></i>, <i className="fa-solid fa-truck"></i>]],
    ['Delphi TVS', 'DelphiTVS_logo.png', <i className="fa-solid fa-car"></i>],
    ['Uno Minda', 'uno_minda_logo.png', [<i className="fa-solid fa-motorcycle"></i>, <i className="fa-solid fa-car"></i>, <i className="fa-solid fa-truck"></i>]],
    ['Valeo', 'Valeo_logo.png', [<i className="fa-solid fa-car"></i>, <i className="fa-solid fa-truck"></i>]],
    ['Spark Minda', 'sparkmindaaCC.png', [<i className="fa-solid fa-motorcycle"></i>, <i className="fa-solid fa-car"></i>, <i className="fa-solid fa-truck"></i>]],
    ['JK Pioneer', 'jkpioneer.png', [<i className="fa-solid fa-motorcycle"></i>, <i className="fa-solid fa-car"></i>, <i className="fa-solid fa-truck"></i>]],
    ['Sagar Gold', 'Sagar_Gold.png', [<i className="fa-solid fa-car"></i>, <i className="fa-solid fa-truck"></i>]],
    ['Fitwell', 'FitWell_logo.png', [<i className="fa-solid fa-car"></i>, <i className="fa-solid fa-truck"></i>]],
    ['Mk Gold', 'mkgold.png', [<i className="fa-solid fa-car"></i>, <i className="fa-solid fa-truck"></i>]],
    ['Meko', 'Meko.png', [<i className="fa-solid fa-car"></i>, <i className="fa-solid fa-truck"></i>]],
    ['Calex ', 'calex.png', <i className="fa-solid fa-truck"></i>],
    ['Rico', 'Rico_logo.png', <i className="fa-solid fa-motorcycle"></i>], 
    ['Indian Nippon', 'Indian_Nippon.png', <i className="fa-solid fa-motorcycle"></i>],
    ['Pricol Speed Governer ', 'pri.png', [<i className="fa-solid fa-motorcycle"></i>, <i className="fa-solid fa-car"></i>, <i className="fa-solid fa-truck"></i>]],
    ['Pricol', 'Pricol_logo.png', <i className="fa-solid fa-motorcycle"></i>],
    ['Endurance', 'endurance.png', <i className="fa-solid fa-motorcycle"></i>],
    ['Rolon', 'rolon.png', <i className="fa-solid fa-motorcycle"></i>],
    ['Ucal', 'Ucal.png', <i className="fa-solid fa-motorcycle"></i>],
    ['Zodix', 'Zodix.png', <i className="fa-solid fa-motorcycle"></i>],   
  ]
};

const TotalBrands = () => {
  const visibleBrands = Brands['All Brands'];
  return (
    <div className="container my-5 pt-5">
      <div className='mt-4' style={{
        display: 'inline-block',
        padding: '10px 50px 10px 10px',
        backgroundColor: '#e20102',
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'left',
        clipPath: 'polygon(2% 0%, 80% 0%, 100% 98%, 100% 100%, 0% 100%)'
      }}>
        All brands..
      </div>
      <hr className="my-3" style={{ borderWidth: '2px' }} />
      <div className="row">
        {visibleBrands.map(([name, logo, icons], idx) => (
          <div key={idx} className="col-6 col-sm-4 col-md-3 mb-4">
            <div className="card h-100 border-1 shadow-sm text-center py-4 px-1 rounded-4">
              <img
                src={`${import.meta.env.BASE_URL}Brandpage/${logo}`}
                alt={name}
                className="img-fluid mx-auto"
                style={{ maxHeight: '60px', objectFit: 'contain' }}
              />
              <div className="card-body p-2 d-flex justify-content-center align-items-center">
                <h6 className="card-title text-dark small fw-semibold mb-0 justify-content-center">{name}</h6>
              </div>
              <div className="d-flex justify-content-end fs-5 gap-2" style={{ marginRight: '5px'}}>
                {icons}
              </div>


            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalBrands;
