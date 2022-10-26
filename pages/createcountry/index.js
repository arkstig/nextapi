import { useState } from 'react'
import axios from 'axios'

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
        setName('')
        // trigge funksjonen som sender data til API
        await createCountry()
    }

    // Hvis feil gi beskjed om dette til brukeren
    // Vi skal håndtere denne bedre i fremtidig leksjoner

    return (
        <div className="flex flex-col">
            <form className="bg-gray-300 p-5 flex-none" onSubmit={handleSubmit}>
                <label
                    className="text-md text-black  py-1 pr-4"
                    htmlFor="countries"
                >
                    Legg til nytt land
                </label>
                <input
                    id="country"
                    type="text"
                    name="country"
                    value={name}
                    onChange={handleNameChange}
                    className="py-1 px-4 bg-slate-50 rounded-sm text-black"
                />
                <button
                    className="ml-2 py-1 px-4 bg-gray-100 text-gray-900 rounded-sm hover:bg-gray-200 hover:text-black"
                    type="submit"
                >
                    Send
                </button>
            </form>
            {error && <div>{error}</div>}
        </div>
    )
}

export default CreateCountry
