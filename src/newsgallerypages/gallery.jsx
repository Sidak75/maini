import galleryone from '../assets/newsgalleryimg/gallery1.1.png';
import gallerytwo from '../assets/newsgalleryimg/gallery1.2.png';
import gallerythree from '../assets/newsgalleryimg/gallery1.3.png';
import galleryfour from '../assets/newsgalleryimg/gallery2.1.png';
import galleryfive from '../assets/newsgalleryimg/gallery2.2.png';
import gallerysix from '../assets/newsgalleryimg/gallery2.3.png';
import galleryseven from '../assets/newsgalleryimg/gallery3.1.png';
import galleryeight from '../assets/newsgalleryimg/gallery3.2.png';
import gallerynine from '../assets/newsgalleryimg/gallery3.3.png';
import galleryten from '../assets/newsgalleryimg/gallery4.1.png';
import galleryeleven from '../assets/newsgalleryimg/gallery4.2.png';
import gallerytwelve from '../assets/newsgalleryimg/gallery4.3.png';
import gallerythirteen from '../assets/newsgalleryimg/gallery5.1.png';
import galleryfourteen from '../assets/newsgalleryimg/gallery5.2.png';
import galleryfifteen from '../assets/newsgalleryimg/gallery5.3.png';
import gallerysixteen from '../assets/newsgalleryimg/gallery6.1.png';
import galleryseventeen from '../assets/newsgalleryimg/gallery6.2.png';

import { useState,useEffect } from 'react';


const Gallery = () => {
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() =>{
        window.scrollTo(0,0);
    }, [currentPage]);

    const allPages = [
        [galleryone, gallerytwo, gallerythree],   
        [galleryfour, galleryfive, gallerysix],   
        [galleryseven, galleryeight, gallerynine],    
        [galleryten, galleryeleven, gallerytwelve],  
        [gallerythirteen, galleryfourteen, galleryfifteen], 
        [gallerysixteen,galleryseventeen]  
    ];

    return (
        <div className="container text-center">
            <div className="row justify-content-center my-3">
                {allPages[currentPage - 1].map((img, idx) => (
                    <div key={idx} className="row-3 d-flex justify-content-center">
                        <img src={img} className="img-fluid" alt={`Gallery ${idx + 1}`} />
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-center gap-2 mt-3 flex-wrap">
                {allPages.map((_, index) => (
                    <button
                        key={index}
                        className={`btn ${currentPage === index + 1 ? 'btn-danger' : 'btn-outline-danger'}`}
                        onClick={() => setCurrentPage(index + 1)}
                        style={{ width: 42 }}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Gallery;