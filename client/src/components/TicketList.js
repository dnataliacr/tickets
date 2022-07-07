import { useState, useEffect } from 'react';

import Ticket from './Ticket'

function Tickets() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("/tickets").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
            }
        )
    }, [])
    return (
        <div className="tickets">
            <h1>Tickets</h1>
            {
              (typeof data.tickets === 'undefined' ? (
                <p>Loading...</p> 
              ) :  <div>
              {data.tickets.map((i) => (
                  <Ticket key={i.ticketId} subject={i.subject} date={i.date} from={i.from} status={i.status} body={i.body} />
              ))}
          </div>)
            }

        </div>
    );
}

export default Tickets;
