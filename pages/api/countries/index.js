const countries = [
    {
        name: 'Norway',
    },
    {
        name: 'Sweden',
    },
    {
        name: 'Denmark',
    },
]

export default function handler(req, res) {
    if (req.method === 'POST') {
        // tar i mot data som sendes med forespørselen
        const data = req.body

        // undersøke om request body har key = question
        if (!data?.name) {
            // hvis ikke returner 400 Bad Request
            // sender med feilmelding som vi kan bruke (error: ...)
            res.status(400).json({
                success: false,
                error: 'Fyll ut navnet på et land',
            })
        } else {
            // legger til data i quiz listen vår
            countries.push(data)

            // sender status 201 (Created) og den nye oppdaterte listen
            res.status(201).json({ success: true, data: countries })
        }
    } else if (req.method === 'PUT') {
        // sender status 405 => metoden er ikke lov
        res.status(405).end()
    } else {
        // håndterer alle andre responser
        res.status(200).json({ success: true, data: countries })
    }
}
