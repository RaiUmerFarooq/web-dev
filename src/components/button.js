export default function Button(){

    function provin(){
       
            let a = document.getElementById("province");
            a.innerHTML=`<ul>
            <li>punjab</li>
            <li>Sindh</li>
            <li>Balochistan</li>
            <li>KPK</li>
            
        </ul>
        `
        
    }
return(

    <div className="btn-div">

        <button className="btn" onClick={provin}>provinces</button>
    </div>    
)
}