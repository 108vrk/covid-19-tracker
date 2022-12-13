import React, { useEffect, useState } from "react";
import { FormControl, NativeSelect } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
     const [fetchedCountries, setFetchedCountries] = useState([]);

     useEffect(() => {
          const fetchAllCountries = async () => {
               setFetchedCountries(await fetchCountries());
          };
          fetchAllCountries();
     }, []);

     return (
          <FormControl className={styles.formControl}>
               <NativeSelect
                    defaultValue=""
                    onChange={(e) => handleCountryChange(e.target.value)}
               >
                    <option value="all">All Countries</option>
                    {fetchedCountries.map((fetchedCountry, i) => {
                         return (
                              <option key={i} value={fetchedCountry.country}>
                                   {fetchedCountry.country}
                              </option>
                         );
                    })}
               </NativeSelect>
          </FormControl>
     );
};

export default CountryPicker;
