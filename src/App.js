import { useState } from 'react';
import './App.css';

function App() {
  const imagess = [
    {src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8sUNqUftlTuRN03uxo1EJnc9PP138Qi5t2Q&usqp=CAU"},
    {src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1sQxj6Mb9cpu8ZSUcXtOpOZwA-6THDn-YjQ&usqp=CAU"},
    {src: "https://cdn.segmentnextimages.com/wp-content/uploads/2016/07/gow-newomega-final-1-1-e1501073884549.jpg"}
  ]


  const [deyisgen, setchanges] = useState(imagess[0])
  const pictureschanges = (index)=>{
    const deyisgen = imagess[index]
    setchanges(deyisgen)
    console.log(index);
  }


  return (

    <>
    <img src={deyisgen.src}/>
    <div>
      {

        imagess.map((picture, pic)=>{

          return (
             <img src={picture.src} onClick={() => pictureschanges(pic)} style={{width:"200px", height:"200px"}}/>
             )
        })
      }
    </div>
    </>

  );
}

export default App;
