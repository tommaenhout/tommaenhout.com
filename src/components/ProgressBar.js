
function ProgressBar (props) {
    return (
    <div className="textfont1 opacity-75">
    {props.title}
    <div className="progress bg-grey">
        <div className={`progress-bar progress-bar-striped progress-bar-animated bg-success ${props.width}`} role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>
    
    )
}

export default ProgressBar