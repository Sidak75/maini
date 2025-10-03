import News from '../newsgallerypages/news.jsx';
import Gallery from '../newsgallerypages/gallery.jsx';

import { useState } from 'react';

const ngpages = [
    {
        name: "News",
        page: News
    },
    {
        name: "Gallery",
        page: Gallery
    }
];

const NewsGallery = () => {
    const [selectedPage, setSelectedPage] = useState(ngpages[0]);
    const SelectedComponent = selectedPage.page;


    return (
        <div className="container my-5 pt-5">
            <div className="d-flex justify-content-center mb-4 gap-3 flex-wrap mt-5">
                {ngpages.map(({ name }, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedPage(ngpages[index])}
                        className={`btn ${selectedPage.name === name ? 'btn-primary' : 'btn-outline-primary'}`}
                    >
                        {name}
                    </button>
                ))}
            </div>
            <div className="mx-auto d-flex justify-content-center bg-light border-start rounded-2 min-vh-50 p-3">
                <SelectedComponent />
            </div>
        </div>
    );
};

export default NewsGallery;
