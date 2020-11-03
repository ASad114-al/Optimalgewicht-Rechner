function Rechner()
{
    let größe = document.getElementById("input1").value ;
    let alter = document.getElementById("input2").value ;
    let schmaleChecked=document.getElementById("Schmale");
    let res= document.getElementById("demo1")
     let ideal=0;

    console.log(größe)
    console.log(alter)

    if ( schmaleChecked.checked)
    {
       ideal = (größe -100 + alter / 10)* 0.9 * 0.9 
       res.innerHTML= ideal.toFixed(1) + "Kg"

        
    }else
    {
       
        ideal= (größe -100 + alter / 10)* 0.9 * 1.1 
        res.innerHTML= ideal.toFixed(1)+ " " + "Kg"
    }
}