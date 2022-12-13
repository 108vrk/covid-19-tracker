import axios from "axios";

const allURL = "https://disease.sh/v3/covid-19/all";
const countryWiseURL = "https://disease.sh/v3/covid-19/countries/";
const dailyURL = "https://disease.sh/v3/covid-19/historical/all?lastdays=all";
const countriesURL = "https://disease.sh/v3/covid-19/countries";

export const fetchData = async (country = "all") => {
     try {
          let url;
          if (country == "all") {
               url = allURL;
          } else {
               url = `${countryWiseURL}${country}`;
          }
          const { data } = await axios.get(url);
          return data;
     } catch (error) {
          console.log(error);
     }
};

export const fetchDailyData = async () => {
     try {
          const { data } = await axios.get(dailyURL);
          return data;
     } catch (error) {
          console.log(error);
     }
};

export const fetchCountries = async () => {
     try {
          const { data } = await axios.get(countriesURL);
          let countries = data.map((d) => d.country);
          return data;
     } catch (error) {
          console.log(error);
     }
};
