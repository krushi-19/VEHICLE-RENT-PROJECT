import React, { useEffect } from 'react';
import CarouselComponent from './CarouselComponent';
import { Header } from './Header';
import { API_URL } from './service/apiService';


export const Home =() =>{

    const fetchData = async () => {
      let res = await fetch(`${API_URL}/h`).then(res => res.json());
      console.log("--res:", res);
    };

    useEffect(()=>{
        fetchData();
    }, []);
    return (
        <div>
             <Header title="Welcome to Vehicle Renting System" description="" />
        <CarouselComponent />

        </div>
       
    );
}
