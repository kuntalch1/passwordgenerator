import { useState } from "react";


const Passwordgeneratorfunction = () => {

    const [password, setPassword] = useState('');

    const GeneratorPassword = () => {

       

        let pass = "";
        let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + 
        "abcdefghijklmnopqrstuvwxyz0123456789@#$";
        for (let index = 1; index <=8; index++){
            let char = Math.floor(Math.random() * string.length + 1);
            pass += string.charAt(char);
          let ranpass = pass += string.charAt(char);
          setPassword(ranpass);
        }
        console.log(pass);
    };
 
        const cpy = () => {
                navigator.clipboard.writeText(password);
        }

    return (
        <>
               <div className="function">
                    <input type="text" readOnly disabled name="" id="" value={password}/>
                    <div className="btns">
                    <button className="generate" onClick={GeneratorPassword}>Generate Password</button>
                    <button onClick={cpy} className="copy">Copy Password</button>

                    </div>
               </div>

        </>

    )

}

export default Passwordgeneratorfunction;