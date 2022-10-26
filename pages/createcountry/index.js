import { useState } from 'react'

import axios from 'axios'
import { setLazyProp } from 'next/dist/server/api-utils'

const CreateCountry = () => {
    const [country, setCountry] = useState([])
    const [error, setError] = useState(null)
    const [name, setName] = useState('')

    // håndtere endringer i input
    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    // trigger sending av data til API
    const createCountry = async () => {
        try {
            // sender POST-request via axios.post
            // sender til /api/quiz
            // sender med data { question }
            const response = await axios.post('/api/countries', { name })

            if (response?.data?.success) {
                setCountry(response.data.data)
                setError(null)
            }
        } catch (err) {
            // hvis feil oppdatere error staten
            // err?.response?.data? kommer fra axios
            // .error har vi laget selv i API
            setError(err?.response?.data?.error)
        }
    }

    // håndtere sending av skjema
    const handleSubmit = async (event) => {
        // forhindre default adferd
        event.preventDefault()

        // trigge funksjonen som sender data til API
        await createCountry()
    }

    // Hvis feil gi beskjed om dette til brukeren
    // Vi skal håndtere denne bedre i fremtidig leksjoner

    return (
        <div>
            <form style={{ marginBottom: '2rem' }} onSubmit={handleSubmit}>
                <label htmlFor="countries">Legg til nytt land</label>
                <input
                    id="country"
                    type="text"
                    name="contry"
                    value={name}
                    onChange={handleNameChange}
                />
                <button type="submit">Send</button>
            </form>
            <section>{JSON.stringify(country)}</section>
            {error && <div>{error}</div>}
        </div>
    )
}

export default CreateCountry
