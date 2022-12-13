import React, { useEffect, useState } from "react";
import { fetchDailyData } from "../../api";
import styles from "./Charts.module.css";
import { Line, Bar } from "react-chartjs-2";

import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

const Charts = ({ data, country }) => {
     console.log("under charts", country);
     const [dailyData, setDailyData] = useState({});
     let lineChart = null;
     let barChart = null;

     if (Object.keys(dailyData).length) {
          let { cases, recovered, deaths } = dailyData;
          let labelsArray = [];
          let casesArray = [];
          let recoverdArray = [];
          let deathsArray = [];
          for (const c in cases) {
               labelsArray.push(c);
               casesArray.push(cases[c]);
          }
          for (const r in recovered) {
               recoverdArray.push(recovered[r]);
          }
          for (const d in deaths) {
               deathsArray.push(deaths[d]);
          }
          lineChart = (
               <Line
                    data={{
                         labels: labelsArray.map((label) => label),
                         datasets: [
                              {
                                   data: casesArray.map((c) => c),
                                   label: "Cases",
                                   borderColor: "blue",
                                   fill: true,
                              },
                              {
                                   data: recoverdArray.map((r) => r),
                                   label: "Recovered",
                                   borderColor: "red",
                                   fill: true,
                              },
                              {
                                   data: deathsArray.map((d) => d),
                                   label: "Recovered",
                                   borderColor: "green",
                                   fill: true,
                              },
                         ],
                    }}
               />
          );
     }

     if (data && Object.keys(data).length) {
          let { cases, recovered, deaths } = data;
          console.log();
          barChart = (
               <Bar
                    data={{
                         labels: ["Infected", "Recovered", "Deaths"],
                         datasets: [
                              {
                                   label: "People",
                                   backgroundColor: ["blue", "red", "green"],
                                   data: [cases, recovered, deaths],
                              },
                         ],
                    }}
                    options={{
                         legend: { display: false },
                         title: {
                              display: true,
                              text: `Current state in ${country}`,
                         },
                    }}
               />
          );
     }

     useEffect(() => {
          const fetchAPI = async () => {
               setDailyData(await fetchDailyData());
          };
          fetchAPI();
     }, []);

     return (
          <div className={styles.container}>
               {country == "all" ? lineChart : barChart}
          </div>
     );
};

export default Charts;
