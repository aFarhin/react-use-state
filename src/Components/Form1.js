
const Form1 = ({ updateText }) => {

    function changeText(e) {

        updateText(getAsciiValues(e.target.value));

        function getAsciiValues(text) {
            var asciiValues = "";
            for (var i = 0; i < text.length; i++) {
                asciiValues += text.charCodeAt(i) + ",  ";
            }
            return asciiValues.trim();
        }

    }

    return (
        <div className="form1">
            <form>
                <label>Change your input into its Ascii Value</label>
                <br />
                <br />
                <input type="text" placeholder=" Write here to see live" onChange={changeText} />
            </form>
        </div>
    )
}
export default Form1