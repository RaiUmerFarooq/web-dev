

export default function Capital(){

    function Cap(){
       
        let a = document.getElementById("capi");
        a.innerHTML=`<ul>
        <li>Lahore</li>
        <li>Karachi</li>
        <li>Islamabad</li>
        <li>Faisalabad</li>
        
    </ul>
    `
    
}
    return(
        <div className="btn-div">

            <button className="btn" onClick={Cap}>Capital</button>
        </div>
    )
}