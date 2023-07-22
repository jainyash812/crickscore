import axios from 'axios';
export const liveURL = `https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live`;
export const upcomingURL = `https://cricbuzz-cricket.p.rapidapi.com/matches/v1/upcoming`;
export const recentURL = `https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent`;

export const config = {
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_KEY,
    'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
  }
};

export const fetchLiveMatches = async() =>{
    try {
        const response = await axios.get(liveURL,config);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }

}
export const fetchUpcomingMatches = async() =>{
    try {
        const response = await axios.get(upcomingURL,config);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }

}
export const fetchRecentMatches = async() =>{
    try {
        const response = await axios.get(recentURL,config);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }

}