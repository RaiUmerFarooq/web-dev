let ch1=0;
function calcu(){

}
let opra=['+','-','*','/','=']
let check=0
let ev=0;

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const fired_button = button.value;
        if(ch1==1){
            let disp2=document.getElementById("disp");
            disp2.innerText='0';
            ch1=0;
        }
        for(i = 0;i < 5; i ++){
    if(fired_button=="="){
        let disp=document.getElementById("disp").innerText;
        ev=eval(disp);
        check=1;
    }
    break;
        }
        if(check==0){
            
            let disp1=document.getElementById("disp");
            disp1.innerText+=fired_button;
        }
        else if(check==1){
            let disp1=document.getElementById("disp");
            disp1.innerText=ev;
            ch1=1;
            check=0;
        }
    });
});
// let v= eval("2+3");
// alert(v);