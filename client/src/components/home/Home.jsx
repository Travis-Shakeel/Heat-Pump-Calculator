import React, { useEffect, useState } from "react"
import axios from "axios"

import "../../style/main.scss"
import "./Home.css"

export const Home = () => {

    // const [backendTest, setBackendTest] = useState(null);

    // useEffect(() => {
    //     axios.get('/api', { })
    //     .then(res => {
    //         setBackendTest(res.data)
    //     })
    //     .catch(err => console.error(err));

    // }, []);

    return (
        <>
            {/* <h1>{backendTest}</h1> */}
            <div className="home">
                This is the home page
            </div>
        </>
    )
}