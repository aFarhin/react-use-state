
const Form1 = ({ updateText,updateMod, texts}) => {

    function changeText(e) {

        updateText(getAsciiValues(e.target.value));
       

        function getAsciiValues(data) {
            var asciiValues = "";
            for (var i = 0; i < data.length; i++) {
                asciiValues += data.charCodeAt(i) + ", ";
                if(i==data.length-1){
                    asciiValues += data.charCodeAt(i);
                }
            }
            return asciiValues.trim();
        }

    }

    function getOutput(e){
        e.preventDefault();
     if(updateText){
            updateMod(addAscii(texts));
            function addAscii(data){
                let sum =0;
                let char = data.split(", ")
                console.log(char);
                for(let i=0; i<char.length; i++){
                    sum += parseInt(char[i]);
                }
                return sum;
            }
     }
     if(getOutput){
        updateText('')
     }
}

    return (
        <div className="form1">
            <form onSubmit={getOutput} >
                <label>Change your input into its Ascii Value</label>
                <br />
                <br />
                <input type="text" placeholder=" Write here to see live" onChange={changeText} />
                <br /> <br/>
                <button>Add Ascii  values</button>
            </form>
        </div>
    )
}
export default Form1