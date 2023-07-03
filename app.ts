const num1Element=document.getElementById('num1') as HTMLInputElement;
const num2Element=document.getElementById('num2') as HTMLInputElement;
const buttonElement=document.querySelector('button')!;

const numResult:Array<number>=[];
const textResult:string[]=[];

type numOrString= number | string;
// type resultObj={ val: number; timestamp:Date;};

interface resultObj{
    val: number; 
    timestamp:Date;
}

//promise
const result=new Promise<string>((res,rej)=>{
    setTimeout(()=>res('it worked'),1000)
});

result.then(res=>{
    console.log(res);
    console.log(res.split(" "));
});

function add(num1:numOrString,num2:numOrString){
    if(typeof(num1)==='number' && typeof(num2)==='number'){
        return num1+num2;
    }else if(typeof(num1)==='string' && typeof(num2)==='string'){
        return num1+" "+num2;
    }
    return +num1 + +num2;
}

function printResult(resultObj: resultObj){
    console.log(resultObj.val);
}

buttonElement.addEventListener('click',()=>{
    const num1=num1Element.value;
    const num2=num2Element.value;
    const result=add(+num1,+num2);
    numResult.push(result as number);
    const stringResult=add(num1,num2);
    textResult.push(stringResult as string);
    console.log(numResult,textResult);
    printResult({val:20,timestamp:new Date()});
})