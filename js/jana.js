function hov(){
let a = document.getElementById("t1");

a.style= "z-index: 100; opacity: 1; transition: opacity 0.15s;";
}
function hov1(){
    let a = document.getElementById("t1");
    
    a.style= "z-index: -1; opacity: 0; transition: opacity 1s;";
    }
    

    function hovC(){
        let a = document.getElementById("t2");
        
        a.style= "z-index: 100; opacity: 1; transition: opacity 0.15s;";
        }
        function hovC1(){
            let a = document.getElementById("t2");
            
            a.style= "z-index: -1; opacity: 0; transition: opacity 1s;";
            }
            function hovB(){
                let a = document.getElementById("t3");
                
                a.style= "z-index: 100; opacity: 1; transition: opacity 0.15s;";
                }
                function hovB1(){
                    let a = document.getElementById("t3");
                    
                    a.style= "z-index: -1; opacity: 0; transition: opacity 1s;";
                    }
                    
                    function addClass() {
                        document.body.classList.add("sent");
                      }
                      
                      sendLetter.addEventListener("click", addClass);