function demo2()
{   
    
   c=1;
    if(c%2==1)
    {
    b1=document.getElementById('b1');
    b1.value="O"
    }
    else
    {
    b1=document.getElementById('b1');
    b1.value="X"
    }
    c++;
}
function demo1()
{   
    document.getElementById('t3').innerHTML="ram";
}

c=1;
//function demo(index)
//{   
//    const d= document.getElementById(`b-${index}`);
//    if(c%2==1)
//    {
//    d.textContent="X";
//    }
//    else
//    {
//     d.textContent="O";
//    }
//     c++;
//     d.disabled=true;
//     
//}
let isButtonClicked = [false, false, false, false, false, false, false, false, false,false];
c=1;
function demo(index) 
{
    if (!isButtonClicked[index]) 
    {
        const button = document.getElementById(`b-${index}`);
        if(c%2===1)
        {
        button.value = "O"; 
        }
        else
        {
            button.value = "X";
        }
        c++;
//        button.disabled = true; 
        isButtonClicked[index] = true;
	button.style.background="black"
//	button.style.background="transparent;
    }
    if(checkwin())
    {
        for(i=1;i<=9;i++)
        {
          isButtonClicked[i] = true;
        }
    }
}

function checkwin()
{
    const arr =[];
    for(i=1;i<=9;i++)
    {
     arr[i] = document.getElementById(`b-${i}`);
    }
    for(a=1,b=1,i=0;i<=9;a+=3,b++)
    {
        if((arr[a].value=="X"&& arr[a+1].value=="X" && arr[a+2].value=="X")||(arr[a].value=="O"&& arr[a+1].value=="O" && arr[a+2].value=="O")||
           (arr[b].value=="X"&& arr[b+3].value=="X" && arr[b+6].value=="X")||(arr[b].value=="O"&& arr[b+3].value=="O" && arr[b+6].value=="O")||
           (arr[3].value=="X"&& arr[5].value=="X" && arr[7].value=="X")||(arr[3].value=="O"&& arr[5].value=="O" && arr[7].value=="O")||
           (arr[1].value=="X"&& arr[5].value=="X" && arr[9].value=="X")||(arr[1].value=="O"&& arr[5].value=="O" && arr[9].value=="O"))
        {
         document.getElementById('t3').innerHTML="winner";
         return true;
        }
    }
    return false;
}

