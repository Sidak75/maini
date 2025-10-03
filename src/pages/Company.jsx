import { useState } from 'react';
import MainiAutoAgenciesLogo from '../assets/Brands/MainiAutoAgenciesLogo.svg';
import HeritageExporstLogo from '../assets/Brands/HeritageExportsLogo.svg';
import MainiAutoIncorporationLogo from '../assets/Brands/MainiAutoIncorporationLogo.svg';
import LokEnterprisesLogo from '../assets/Brands/LokEnterprisesLogo.svg';

import MainiAutoPage from '../companypages/mainiauto.jsx';
import HeritageExportsPage from '../companypages/heritageexport.jsx';
import MainiAutoIncPage from '../companypages/mainiautoinc.jsx';
import LokEnterprisesPage from '../companypages/lok.jsx';

import '../design/Home.css';

import { useEffect } from "react";

const companies = [
    {
        name: 'Maini Auto',
        logo: MainiAutoAgenciesLogo,
        page: MainiAutoPage
    },
    {
        name: 'Heritage Exports',
        logo: HeritageExporstLogo,
        page: HeritageExportsPage
    },
    {
        name: 'Maini Auto Inc.',
        logo: MainiAutoIncorporationLogo,
        page: MainiAutoIncPage
    },
    {
        name: 'Lok Enterprises',
        logo: LokEnterprisesLogo,
        page: LokEnterprisesPage
    }
];

const Company = () => {
    const [selectedCompany, setSelectedCompany] = useState(companies[0]);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [selectedCompany]);
    
    return (
        <div className="container-fluid my-5 pt-5">
            <div className="row mt-5">
                <div className="col-md-2 mb-4 mb-md-0">
                    <h5 className="text-center text-primary mb-4 fw-bold">Our Companies</h5>
                    <div className="d-flex d-md-block overflow-auto">
                        {companies.map(({ name, logo, page }, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 text-center"
                                onClick={() => setSelectedCompany({ name, page })}
                                style={{ cursor: 'pointer' }}
                            >
                                <div
                                    className={`m-2 bg-white rounded-4 shadow-sm p-3 transition ${selectedCompany?.name === name ? 'border border-primary' : ''}`}
                                >
                                    <img
                                        src={logo}
                                        alt={name}
                                        className="img-fluid company-logo"
                                        style={{ objectFit: 'contain' }}
                                    />

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-md-10 d-flex justify-content-center bg-light border-start rounded-2 min-vh-50 p-4">
                    <selectedCompany.page />
                </div>
            </div>
        </div>
    );
};

export default Company;
