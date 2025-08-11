// function printHello(){
//       console.log("click");
// }
function handleHover(){
      console.log("hover");
}
export default function Button(){
      return(
            <div>
                  <button onMouseOver={handleHover}>hover</button>
            </div>
      );
}
// export default function Button(){
//       return(
//             <div>
//                   <button onClick={printHello}>Click me!</button>
//             </div>
//       );
// }
