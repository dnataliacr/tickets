
function Status({ status }) {
    const getStatus = status.toLowerCase()
    const showStatus = () => {
        switch (getStatus) {
            case "new": return <span> NUEVO </span>;
            case "solved": return <span>Respondido</span>;
            default: return <span> </span>
        }
    }
    return (
        <div className={getStatus}>{showStatus()}</div>
    );
}

export default Status;
