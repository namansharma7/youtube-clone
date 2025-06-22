import axios from 'axios';
const api_key = import.meta.env.YOUTUBE_API_KEY;
const base_url = "https://youtube138.p.rapidapi.com"
const options = {
    headers: {
        'x-rapidapi-key': '96f1fe62f4mshdea12a14047ee5dp1a2c71jsne75f6ec35f82--',
        'x-rapidapi-host': 'youtube138.p.rapidapi.com'
    }
};

export const fetchData = async (url) => {
    try {
        const { data } = await axios.get(`${base_url}/${url}`, options);
        return data;
    } catch (error) {
        console.log("Error fetching api data: ", error);
        //throw error;
    }
}