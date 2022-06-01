

const Input = (props) => {

    const { ipSelector, setIpSelector } = props

    return (
        <div className='background'>
            <h1>IP Adress Tracker</h1>
            <div className="inputContainer">
                <input 
                onChange={(e)=>setIpSelector(e.target.value)}
                type="text" />
                <button>&gt;</button>
            </div>
        </div>
    )
}

export default Input