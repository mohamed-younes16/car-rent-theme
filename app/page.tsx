import { getCarsdata } from "@/utils";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import CarCard from "./components/CarCard";
import Filter from "./components/Filter";
import { fuels, yearsOfProduction } from "@/constants";
import Show from "./components/Show";




export default async function Home({searchParams}) {
  
  const cars = await getCarsdata({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  })
  
  
  const isDataEmpty = !Array.isArray(cars) || cars.length < 1 || !cars;
 
  
  return (
    <main className="dark:bg-slate-900 padding-x dark:text-white overflow-x-hidden">
      <Hero/>
      
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container dark:text-white'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
          <Filter title={"fuel"} opts={fuels}/>
          <Filter title={"year"} opts={yearsOfProduction}/>
          
          </div>

        </div>
        </div>
        
        {!isDataEmpty ? (
          <>
            <div className='home__cars-wrapper max-width'>
              {cars?.map((car) => (
                <CarCard key={car} car={car} />
              ))}
            </div>
            <Show pageNumber={searchParams.limit || 10} isNext={searchParams.limit|| 10 <= cars.length  } />
          </>
        
          
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
          
          </div>
        )}
        
      <Footer />
    </main>
  )
}
