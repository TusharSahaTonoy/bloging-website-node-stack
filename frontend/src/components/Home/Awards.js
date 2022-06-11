import axios from "axios";
import {useState, useEffect} from 'react';


const baseURL = process.env.REACT_APP_BACKEND_URL+"/api/award-features";

const Awards = () => {

    const [awards, setAwards] = useState([]);
    useEffect(() => {
        const getAwrds = async () => {

            const result = await axios.get(baseURL);

            setAwards(awards => {
                return result.data.data;
            });
        };

        getAwrds();

    }, []);

    return (
        <>
            {awards.map(item => {
                return (
                    <div key={item.id} className="col-lg-4 col-md-6 col-sm-6">
                        <div className="service-item mb-4">
                            <div className="icon d-flex align-items-center">
                                <i className={item.attributes.icon}></i>
                                <h4 className="mt-3 mb-3">{item.attributes.title}</h4>
                            </div>
                            <div className="content">
                                <p className="mb-4">{item.attributes.teaser}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Awards;