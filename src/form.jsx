function handleFormsubmit(){
      console.log("form was submited");
}
export default function Form(){
      return(
            <form action="">
                  <input type="text" name="" id="" />
                  <button onClick={handleFormsubmit}>submit</button>
            </form>
      )
}