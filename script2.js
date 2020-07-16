let buttons=document.getElementsByClassName('btn');
var display=document.getElementById('text');
var operand1;
var opearnd2;
var operator;
for(let i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener('click' ,function(){
        var value=this.getAttribute("value");
        this.classList.add('bg-color');
        setTimeout(()=>buttons[i].classList.remove('bg-color'),200);

        if(value=='+')
        {
            operand1=parseFloat(document.getElementById('text').textContent);
            operator="+";
            document.getElementById('text').innerHTML=" ";
        }
        else if(value=='-')
        {
            operand1=parseFloat(document.getElementById('text').textContent);
            operator="-";
            document.getElementById('text').innerHTML=" ";   
        }
        else if(value=='*')
        {
            operand1=parseFloat(document.getElementById('text').textContent);
            operator="*";
            document.getElementById('text').innerHTML=" ";
        }
        else if(value=='/')
        {
            operand1=parseFloat(document.getElementById('text').textContent);
            operator="/";
            document.getElementById('text').innerHTML=" ";
        }
        else if(value=='=')
        {
            opearnd2=parseFloat(document.getElementById('text').textContent);
            if(opearnd2==0 && operator=='/')
            {
                display.innerHTML="Error";
                return;
            }
            var ans=eval(operand1+" "+operator+" "+opearnd2);
            display.innerHTML=ans;
            operand1=undefined;
            opearnd2=undefined;
            operator=undefined;
        }
        else if(value==="empty")
        {
            document.getElementById('text').innerHTML=" ";
            operand1=undefined;
            opearnd2=undefined;
            operator=undefined;

        }
        
        else
        {
            document.getElementById('text').innerHTML+=value;
        }
    });
}