import axios from 'axios';
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/navbar";

export default function MarketPlace() {
    const RANGE = "B1:D";
    const SHEET_ID = "1_m1r4uqhlNMosyy5GQBg0XgqqKGCqfJWyydwnIARAxg";
    const API_KEY = "AIzaSyAujRd62kDheKBWAGbydc1YglJE6KDD8v8";

    const [list, setList] = useState([])

    useEffect(() => {
        getMarketPlaceData()
    }, [])

    const getMarketPlaceData = async () => {
        const response = await axios.get(
            `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`
        );
        setList(response.data.values.slice(2));
    }


    return (
        <div>
            <Navbar />

            <img src="https://images.olx.com.pk/thumbnails/437508562-800x600.webp" alt="" className="w-full h-44 object-contain" />

            <div className="flex flex-wrap mb-32">

                {list.map((item, index) => (
                    <Card key={index} category={item[1]} title={item[0]} img={item[2]} />
                ))}
            </div>

        </div>
    )
}