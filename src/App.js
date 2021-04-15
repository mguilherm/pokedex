import React from "react";
import "./App.css";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";

const App = () => {
    return (
        <div>
            <Cards />
            <div className="general-container">
                <Pagination />
            </div>
            <Footer />
        </div>
    );
};
export default App;
