import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import styles from "./Cards.module.css";
import cx from "classnames";

const Cards = ({ data }) => {
     if (!data) {
          return "Loading";
     }
     const { cases, recovered, deaths, updated } = data;
     return (
          <div className={styles.container}>
               <Grid container spacing={3} justifyContent="center">
                    <Grid
                         item
                         component={Card}
                         xs={12}
                         md={3}
                         className={cx(styles.card, styles.infected)}
                    >
                         <CardContent>
                              <Typography color="textSecondary" gutterBottom>
                                   Infected
                              </Typography>
                              <Typography varient="h5" gutterBottom>
                                   <CountUp
                                        start={0}
                                        end={cases}
                                        duration="1"
                                        separator=","
                                   />
                              </Typography>
                              <Typography color="textSecondary" gutterBottom>
                                   {new Date(updated).toDateString()}
                              </Typography>
                              <Typography varient="body2" gutterBottom>
                                   Number of active cases of covid 19
                              </Typography>
                         </CardContent>
                    </Grid>
                    <Grid
                         item
                         component={Card}
                         xs={12}
                         md={3}
                         className={cx(styles.card, styles.recovered)}
                    >
                         <CardContent>
                              <Typography color="textSecondary" gutterBottom>
                                   Recovered
                              </Typography>
                              <Typography varient="h5" gutterBottom>
                                   <CountUp
                                        start={0}
                                        end={recovered}
                                        duration="1"
                                        separator=","
                                   />
                              </Typography>
                              <Typography color="textSecondary" gutterBottom>
                                   {new Date(updated).toDateString()}
                              </Typography>
                              <Typography varient="body2" gutterBottom>
                                   Number of recoveries from covid 19
                              </Typography>
                         </CardContent>
                    </Grid>
                    <Grid
                         item
                         component={Card}
                         xs={12}
                         md={3}
                         className={cx(styles.card, styles.deaths)}
                    >
                         <CardContent>
                              <Typography color="textSecondary" gutterBottom>
                                   Deaths
                              </Typography>
                              <Typography varient="h5" gutterBottom>
                                   <CountUp
                                        start={0}
                                        end={deaths}
                                        duration="1"
                                        separator=","
                                   />
                              </Typography>
                              <Typography color="textSecondary" gutterBottom>
                                   {new Date(updated).toDateString()}
                              </Typography>
                              <Typography varient="body2" gutterBottom>
                                   Number of deaths caused by covid 19
                              </Typography>
                         </CardContent>
                    </Grid>
               </Grid>
          </div>
     );
};

export default Cards;
