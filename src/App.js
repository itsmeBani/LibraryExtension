import './App.css';
import React from "react";
import Header from "./components/header";
import Navigation from "./components/navigation";
import Section from "./components/section";
import Footer from "./components/footer";

function App() {


    return (
        <React.Fragment>
            <section className="flex flex-col">
                <Header/>
                <Navigation/>
                <Section/>
                <Footer/>
            </section>
        </React.Fragment>
    );
}

export default App;
