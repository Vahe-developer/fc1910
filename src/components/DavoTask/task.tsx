import * as React from 'react'
import {useState} from 'react'

function Task() {


    const [name, setName] = useState<string>('');
    const [countName, setCountName] = useState<string[]>([])
    const [size,setSize]=useState<number>(0)
    var [hh,setH]=useState<number>(0);



    const arr: string[]=[];
    const getOnChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {

        setName(event.target.value)
    }

    const getValue = () => {
        for (let i = 0; i < Number(name); i++) {
            arr.push("Vahe")
        }
        setCountName(arr)

    }


    function getInpValue(event : React.ChangeEvent<HTMLInputElement>){
                setSize(Number(event.target.value))
    }
  function start() {
        let y:number = 100 - size;
        let z:number = y / 10;
      setH(hh + size);
      let v:number=size
    let time10=setInterval(function(){
        if (v<100){
            setH(v+=z)
            console.log("second")
        }else{
            clearInterval(time10)
            alert("The Progress Fineshed!!!")
        }
    }, 1000);




        // 1 in task
      //   setH(hh  + size)
      //
      // if(hh>100){
      //     alert("FINISH!")
      //     setH(0)
      // }


  }

    return (

        <div style={{marginTop:"100px"}}>
            <h1>TASK</h1>
            <input type="number" onChange={getOnChangeValue} name={'inp'}/>
            <button onClick={getValue} id={'btn'}>ok</button>
            {
                countName.map((item)=>(
                    <p>{item}</p>
                ))
            }
            <div>
                <input onChange={getInpValue} type="number"/>
                <progress value={hh} max="100">
                </progress>
                <button onClick={start}>Start</button>
            </div>

        </div>
    )


}


export default Task