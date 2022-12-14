import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios'
import CreateCountry from '../createcountry'

const Countries = () => {
    const [countries, setCountries] = useState([])

    const getCountries = async () => {
        try {
            // GET-request til /api/quiz
            const response = await axios.get('/api/countries')

            // response.data kommer fra axios
            // success er noe som jeg har laget i responsen
            if (response?.data?.success) {
                // oppdaterer state med data fra API
                setCountries(response.data.data)
            }
        } catch (error) {
            // console.log av feilen
            console.log(error?.response?.data)
        }
    }

    // trigger henting av data når komponenten lages
    useEffect(() => {
        getCountries()
    }, [countries])

    return (
        <div>
            <Head>
                <title>Countries</title>
            </Head>
            <h1 className="font-sans text-xl underline">List of countries</h1>
            <ul>
                {countries.map((country, index) => (
                    <li className="font-sans text-sm mb-1 mt-1" key={index}>
                        {country.name}
                    </li>
                ))}
            </ul>

            <CreateCountry />
        </div>
    )
}

export default Countries
