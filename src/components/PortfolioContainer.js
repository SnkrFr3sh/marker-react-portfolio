import React, {useState} from 'react';
import Home from '../pages/Home/Home.js'
import Header from '../pages/Header/Header'
import Landing from '../pages/Landing/index'
import AboutMe from '../pages/Aboutme/Aboutme.js';

const PortfolioContainer = () =>{
const [currentPage, setCurrentPage] = useState('Landing');

const renderPage =() => {
    if (currentPage === 'Landing') {
        return <Landing />
    } else if (currentPage === 'Home') {
            return <Home />
        }else return <AboutMe />
}

const handlePageChange = (page) => setCurrentPage(page)

return(
    <div>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
    </div>
)

}

export default PortfolioContainer