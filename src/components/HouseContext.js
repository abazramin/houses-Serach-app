// main import react & import hooks 
import React, { useState, useEffect, createContext } from 'react';
// import data from local files project
import { housesData } from '../data';
// export context api for shering all file project
export const HouseContext = createContext()

const HouseContextProvider = ({ children }) => {
  // state for get data from file data to all files project
  const [house, setHouse] = useState(housesData);
  // state for Country Dropdown
  const [country, setCountry] = useState('loction(any)');
  // state for countries using in map method
  const [countries, setCountries] = useState([]);
  // state for property Property Dropdown
  const [property, setProperty] = useState('Property (any)');
  // state for properties using in map method
  const [properties, setPropeties] = useState([]);
  // state for pricing
  const [price, setPrice] = useState('price range (any)');
  // state for loading 
  const [loading, setLoading] = useState(false);
  // get data from house and upload in setCounteies
  useEffect(() => {
    const allCountries = house.map((house) => {
      return house.country
    })
    // remove dublicate
    const uniqueCountries = ['location (any)', ...new Set(allCountries)]
    setCountries(uniqueCountries);
  }, []);
  // get data from house and upload in setProperies
  useEffect(() => {
    const allProperties = house.map((property) => {
      return property.type
    })
    const uniqueProperties = ["Property (any)", ...new Set(allProperties)]
    setPropeties(uniqueProperties)
  }, []);
  // todo Function Handle Click
  const handleClick = () => {
    // set loading
    setLoading(true)
    // 
    const isDefult = (str) => {
      return str.split(' ').includes('(any)')
    };
    // get first value of price and parse it to numbers
    const minParse = parseInt(price.split(' ')[0]);
    // get secound value of price and parse it to numbers
    const maxParse = parseInt(price.split(' ')[2]);
    // function  is filter houses
    const newHouse = housesData.filter((house) => {
      // 
      const hosuePrice = parseInt(house.price);
      // check if all value are selected 
      if (house.country === country &&
        house.type === property &&
        hosuePrice >= minParse &&
        hosuePrice <= maxParse) {
        return house;
      }
      // ckeck if all value in defult
      if (isDefult(country) && isDefult(property) && isDefult(price)) { return house; }
      // check if country is not defult 
      if (!isDefult(country) && isDefult(property) && isDefult(price)) { return house.country === country }
      // check if property is not defult
      if (!isDefult(property) && isDefult(country) && isDefult(price)) { return house.type === property }
      //  check if price is not defult
      if (!isDefult(price) && isDefult(country) && isDefult(property)) {
        if (hosuePrice >= minParse && hosuePrice <= maxParse) {
          return house;
        }
      }
      // if country & property is not defult
      if (!isDefult(country) && !isDefult(property) && isDefult(price)) { return house.country === country && house.type === property }
      // if country and price is not defult
      if (!isDefult(country) && isDefult(property) && !isDefult(price)) {
        if (hosuePrice >= minParse && hosuePrice <= maxParse) {
          return house.country === country;
        }
      }
      // if property and price is not defult
      if (!isDefult(country) && !isDefult(property) && !isDefult(price)) {
        if (hosuePrice >= minParse && hosuePrice <= maxParse) {
          return house.type === property;
        }
      }
    });
    // 
    setTimeout(() => {
      return (
        newHouse.length < 1 ? setHouse([]) :
          setHouse(newHouse),
        setLoading(false)
      )
    }, 1000);
  }
  return <HouseContext.Provider value={
    {
      house,
      country,
      setCountry,
      countries,
      property,
      setProperty,
      properties,
      price,
      setPrice,
      loading,
      handleClick,
    }
  }>
    {/*  */}
    {children}
  </HouseContext.Provider >;
};

export default HouseContextProvider;
