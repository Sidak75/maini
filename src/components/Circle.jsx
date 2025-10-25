import { useEffect } from 'react';
import '../design/Home.css';
import compo from '../assets/Brands/compo.png';
import exide from '/Brandpage/Exide.png';
import ipower from '../assets/Brands/ipower.png';
import lucas from '../assets/Brands/lucas.png';
import setcolipe from '../assets/Brands/setcolipe.png';
import skf from '../assets/Brands/skf.png';
import spicer from '../assets/Brands/spicer.png';
import texspin from '../assets/Brands/texspin.png';
import unominda from '../assets/Brands/unominda.png';
import valeo from '../assets/Brands/valeo.png';
import zbehr from '../assets/Brands/zbehr.png';
import zendurance from '/Brandpage/endurance.png';
import zfenner from '../assets/Brands/zfenner.png';
import zjk from '../assets/Brands/zjk.png';
import zphilips from '../assets/Brands/zphilips.png';
import zrico from '../assets/Brands/zrico.png';
import zrolon from '../assets/Brands/zrolon.png';
import zsparkminda from '../assets/Brands/zsparkminda.png';
import ztalbros from '../assets/Brands/ztalbros.png';
import cummins from '/Brandpage/Cummins.png';
import wabco from '../assets/Brands/wabco.png';
import holset from '../assets/Brands/holset.png';


const Circle = () => {
    useEffect(() => {
        const items = document.querySelectorAll(".carousel-item");
        const itemCount = items.length;
        const angle = 360 / itemCount;
        const radius = 500;
        items.forEach((item, index) => {
            const rotation = angle * index;
            item.style.transform = `rotateY(${rotation}deg) translateZ(${radius}px)`;
        });
    }, []);
    return (
        <div>
            <div className='carousel-wrapper d-flex justify-content-center aligns-item-center'>
                <div className="carousel-track position-relative">
                    <div className="carousel-item">
                        <img src={compo} className="img-fluid rounded shadow z-3 p-4" alt="1" />
                    </div>
                    <div className="carousel-item">
                        <img src={exide} className="img-fluid rounded shadow z-3" alt="2" />
                    </div>
                    <div className="carousel-item">
                        <img src={ipower} className="img-fluid rounded shadow z-3 p-4" alt="3" />
                    </div>
                    <div className="carousel-item">
                        <img src={lucas} className="img-fluid rounded shadow z-3 p-4" alt="1" />
                    </div>
                    <div className="carousel-item">
                        <img src={setcolipe} className="img-fluid rounded shadow z-3 p-4" alt="2" />
                    </div>
                    <div className="carousel-item">
                        <img src={skf} className="img-fluid rounded shadow z-3 p-4" alt="3" />
                    </div>
                    <div className="carousel-item">
                        <img src={spicer} className="img-fluid rounded shadow z-3 p-4" alt="1" />
                    </div>
                    <div className="carousel-item">
                        <img src={texspin} className="img-fluid rounded shadow z-3" alt="2" />
                    </div>
                    <div className="carousel-item">
                        <img src={unominda} className="img-fluid rounded shadow z-3 p-4" alt="3" />
                    </div>
                    <div className="carousel-item">
                        <img src={valeo} className="img-fluid rounded shadow z-3 p-4" alt="1" />
                    </div>
                    <div className="carousel-item ">
                        <img src={zbehr} className="img-fluid rounded shadow z-3 p-4" alt="2" />
                    </div>
                    <div className="carousel-item ">
                        <img src={zendurance} className="img-fluid rounded shadow z-3 py-4" alt="3" />
                    </div>
                    <div className="carousel-item ">
                        <img src={zfenner} className="img-fluid rounded shadow z-3 p-4" alt="1" />
                    </div>
                    <div className="carousel-item">
                        <img src={zjk} className="img-fluid rounded shadow z-3 p-2" alt="2" />
                    </div>
                    <div className="carousel-item">
                        <img src={zphilips} className="img-fluid rounded shadow z-3" alt="3" />
                    </div>
                    <div className="carousel-item">
                        <img src={zrico} className="img-fluid rounded shadow z-3 p-4" alt="1" />
                    </div>
                    <div className="carousel-item">
                        <img src={zrolon} className="img-fluid rounded shadow z-3" alt="2" />
                    </div>
                    <div className="carousel-item">
                        <img src={zsparkminda} className="img-fluid rounded shadow z-3" alt="3" />
                    </div>
                    <div className="carousel-item">
                        <img src={ztalbros} className="img-fluid rounded shadow z-3" alt="1" />
                    </div>
                    <div className="carousel-item">
                        <img src={cummins} className="img-fluid rounded shadow z-3 p-4" alt="2" />
                    </div>
                    <div className="carousel-item">
                        <img src={wabco} className="img-fluid rounded shadow z-3 p-4" alt="3" />
                    </div>
                    <div className="carousel-item">
                        <img src={holset} className="img-fluid rounded shadow z-3 p-4" alt="1" />
                    </div>
            
                </div>
            </div>
        </div >
    )
}
export default Circle;
