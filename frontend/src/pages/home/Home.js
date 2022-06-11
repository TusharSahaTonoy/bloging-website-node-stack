import Header from "../../components/template/header/header";
import Footer from "../../components/template/footer/footer";
import Awards from "../../components/Home/Awards";

const Home = () => {
    return (
        <>
            <Header />

            <section className="section service gray-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 text-center">
                            <div className="section-title">
                                <h2>Award winning patient care</h2>
                                <div className="divider mx-auto my-4"></div>
                                <p>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <Awards />
                    </div>
                </div>
            </section>


            <Footer />
        </>
    );
}

export default Home;