import { Cards, Charts, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import React from "react";
import covidImage from './images/covid.png'
class App extends React.Component {
     state = {
          date: {},
          country: "all",
     };
     async componentDidMount() {
          const fetchedData = await fetchData();
          this.setState({ ...this.state, data: fetchedData });
     }
     handleCountryChange = async (country) => {
          const fetchedData = await fetchData(country);
          this.setState({ country: country, data: fetchedData });
     };
     render() {
          const { data } = this.state;
          return (
               <div className={styles.container}>
                    <img className={styles.image} src={covidImage}/>
                    <Cards data={data} />
                    <CountryPicker
                         handleCountryChange={this.handleCountryChange}
                    />
                    <Charts
                         data={this.state.data}
                         country={this.state.country}
                    />
               </div>
          );
     }
}

export default App;
