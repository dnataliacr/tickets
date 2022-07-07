import Status from './Status'
import { BsChevronRight } from 'react-icons/bs'
function Ticket({ subject, date, from, status, body }) {
    return (
        <div className="ticketBox">
            <div className='ticketHeader'> <span> De:{' ' + from}</span><span> Enviado: {' ' + date}</span>
            </div>
            <div className='ticketBody'>
                <Status status={status} /> <strong>{subject}</strong>
                <span>{body}</span>
            </div>
            <div className='breadCrumbBox'>
                <span className='breadCrumbIcon'> <BsChevronRight /> </span>
            </div>
        </div>
    );
}

export default Ticket;
