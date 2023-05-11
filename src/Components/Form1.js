
const Form1 =({updateText})=>{

    function changeText(e){
        updateText(e.target.value);
    }

    return(
        <div className="form1">
            <form>
                <input type="text" placeholder="Change text to lowercase" onChange={changeText} />
                <button>See live</button>
            </form>
        </div>
    )
}
export default Form1