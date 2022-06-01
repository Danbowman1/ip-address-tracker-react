import axios from "axios"


const Input = (props) => {

    const { ipSelector, setIpSelector, submitHandler } = props


    return (
        <div className='background'>
            <h1>IP Adress Tracker</h1>
            <form onSubmit={submitHandler}>
                <div className="inputContainer">
                <input 
                    onChange={(e)=>setIpSelector(e.target.value)}
                    type="text" />
                    <button>&gt;</button>
                </div>
            </form>
        </div>
    )
}

export default Input