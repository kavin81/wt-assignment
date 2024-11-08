import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const data = [
    {
        "id": 1,
        "name": "John Doe",
        "reason": "Routine Checkup",
        "date": "2024-08-05",
        "status": "scheduled"
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "reason": "Consultation",
        "date": "2024-08-06",
        "status": "scheduled"
    },
    {
        "id": 3,
        "name": "Mary Johnson",
        "reason": "Follow-up",
        "date": "2024-08-07",
        "status": "scheduled"
    }
]



createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App data={data} />
    </StrictMode>,
)
