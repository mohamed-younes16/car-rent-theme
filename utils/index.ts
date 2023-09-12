import {  CarProps, FilterProps } from "@/types";

export const getCarsdata = async (filters: FilterProps)=>{
  const { manufacturer, year, model, limit, fuel } = filters;
const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1b91d8ccd6msh7ddf81fa1fcbf72p14ead4jsn2dcd7c7c316a',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};

	const response = await fetch(url, {...options ,cache:"no-cache"});
	const result = await response.json();

    return result


}




export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };
  
  export const updateSearchParams = (type: string, value: string) => {
    
    const searchParams = new URLSearchParams(window.location.search);
    
    searchParams.set(type, value);

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  
    return newPathname;
  };

export  function getcars(car:CarProps , angle:number) {
    const url = new URL(` https://cdn.imagin.studio/getimage`)
    url.searchParams.append("customer","hrjavascript-mastery")
    url.searchParams.append("make",car.make)
    url.searchParams.append("zoomType","fullscreen")
    url.searchParams.append("modelFamily",car.model.split(" ")[0])
    url.searchParams.append("modelYear",`${car.year}`)
    url.searchParams.append("angle",`${angle}`)

    return `${url}`
}
