import axios from 'axios';

const baseURL = "http://localhost:1337/api/award-features";

const awards = () => {

    let _awards;
    axios.get(baseURL).then((res) => {
        
        _awards = res.data;
    });

    return [
        {
            "icon": "icofont-laboratory text-lg",
            "title": "Laboratory services",
            "teaser": "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
        },
        {
            "icon": "icofont-tooth text-lg",
            "title": "Dental Care",
            "teaser": "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
        },
        {
            "icon": "icofont-laboratory text-lg",
            "title": "Laboratory services",
            "teaser": "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
        }
    ];
}



export default {awards};