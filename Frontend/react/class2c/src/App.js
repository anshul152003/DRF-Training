import Card from './components/Card';
import React, { useState } from 'react';
import './components/Card.css';

function App() {

  const [cardData, setCardData] = useState([
    {
      imgUrl: "https://imgs.search.brave.com/3_eo-n9l1P9c_CZQDBE-DfXG34maoM9D0u7R6AKTzJM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ5/NTg4ODk3Mi9waG90/by9sb25kb24tZW5n/bGFuZC12aXJhdC1r/b2hsaS1vZi1pbmRp/YS1wb3Nlcy1mb3It/YS1wb3J0cmFpdC1w/cmlvci10by10aGUt/aWNjLXdvcmxkLXRl/c3QuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPV9ZY0hCVWQx/amZWU2ZRWXFKRW5t/NnFPYWdQcUd0RE5t/SmFZVzFjakMtb0E9",
      imgName: "Virat Kohli",
      imgAbout: "Virat Kohli is one of India most celebrated cricketers, known for his aggressive batting style and leadership. He has captained India across all formats and holds numerous international records.",
    },
    {
      imgUrl: "https://imgs.search.brave.com/KaLCfuvz3AljLqAboq0ZXGzAmlqfCyqrpkKPGSS7vXI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTEy/NzA4MDc0Ny9waG90/by93ZWxsaW5ndG9u/LW5ldy16ZWFsYW5k/LW1zLWRob25pLW9m/LWluZGlhLWxvb2tz/LW9uLWR1cmluZy1n/YW1lLWZpdmUtaW4t/dGhlLW9uZS1kYXku/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWY3ejFMMFhuTm9T/LWwxaU40MjR6Um9U/SFFXZXhGeXhpWTFV/S0FRNERoaEU9",
      imgName: "MS Dhoni",
      imgAbout: "MS Dhoni, the former captain of the Indian cricket team, is renowned for his calm demeanor and exceptional finishing skills. He led India to numerous victories, including the 2007 T20 World Cup and the 2011 ODI World Cup.",
    },
    {
      imgUrl: "https://imgs.search.brave.com/ZpyST3VKbYH9KWpqHxJg6j1ah3eIiAwne7hQWwhsd98/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjkz/NzI4NzIwL3Bob3Rv/L2xvbmRvbi1lbmds/YW5kLXNoaWtoYXIt/ZGhhd2FuLW9mLWlu/ZGlhLWJsb3dzLWEt/a2lzcy10by10aGUt/Y3Jvd2QtYXMtaGUt/bGVhdmVzLXRoZS1m/aWVsZC1hZnRlci5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/eUhOQ2xJeHdnV1FN/ZTBvRm5TOXB5dVl5/dlNQRzdIdVdJalIw/ZkhXTjVTaz0",
      imgName: "Sachin Tendulkar",
      imgAbout: "Sachin Tendulkar, often referred to as the 'God of Cricket', is one of the greatest batsmen in the history of the game. His records and achievements have set benchmarks for future generations."
    }
  ]);

  const newData = [
    {
      imgUrl: "https://imgs.search.brave.com/obVvS2FpNwnNZJQb6Ecgga1TGqondS7xVPsZcmh0_LA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTYx/MDYxNzM3NC9waG90/by90b3BzaG90LWJy/YXppbGlhbi1zdXBl/cnN0YXItbmV5bWFy/LWVudGVycy10aGUt/cGl0Y2gtZHVyaW5n/LWhpcy11bnZlaWxp/bmctY2VyZW1vbnkt/YXQtYWwtaGlsYWwu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVY1aEZrbmhBMXpD/VTVIVl9lTVM5X2lX/emp3ck9Pd081Sk13/VTZSdFM5UmM9",
      imgName: "Nemar Jr.",
      imgAbout: "Neymar Jr. is a Brazilian professional footballer known for his incredible dribbling skills, speed, and goal-scoring ability. He has played for top clubs like Barcelona and Paris Saint-Germain, and is considered one of the best players in the world."
    },
    {
      imgUrl: "https://imgs.search.brave.com/Vpm8EA-iBH8FIMJYRGAZVMt3vSzEEgSHGpqAfrMugLk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI0/NTcxMjc3Ny9waG90/by9hcmdlbnRpbmFz/LWZvcndhcmQtbGlv/bmVsLW1lc3NpLXBv/c2VzLW9uLXN0YWdl/LXdpdGgtdGhlLWdv/bGRlbi1iYWxsLWF3/YXJkLWZvci1iZXN0/LXBsYXllci5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9QU0z/Sm4xUzZxTTlTRkV5/SWtFT2FhODVaVENQ/REV2Q1F2U1V6a3hK/YjFQbz0",
      imgName: "Lionel Messi",
      imgAbout: "Lionel Messi, often regarded as one of the greatest footballers of all time, has won multiple Ballon d'Or awards and holds numerous records for goals scored in a calendar year. His vision, passing, and dribbling skills are unparalleled."
    },
    {
      imgUrl: "https://imgs.search.brave.com/e3gXlNy8klyQnTw_rhMw1gdf1w5Lil_GGHmbw_nsuG8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by91ZWZhLWNo/YW1waW9ucy1sZWFn/dWUtZmluYWwtcmVh/bC0yNjBudy0xODc1/ODE4ODQyLmpwZw",
      imgName: "Cristiano Ronaldo",
      imgAbout: "Cristiano Ronaldo is a Portuguese professional footballer known for his incredible athleticism, goal-scoring ability, and work ethic. He has played for top clubs like Manchester United, Real Madrid, and Juventus, and has won numerous individual awards."
    }
  ]

  const cardChange = (index) => {
  setCardData(prevData => {
    const updatedData = [...prevData];
    updatedData[index] = newData[index]; // Replace the card at that index
    return updatedData;
  });
};



  // const URL = {
  //   one: "https://imgs.search.brave.com/3_eo-n9l1P9c_CZQDBE-DfXG34maoM9D0u7R6AKTzJM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ5/NTg4ODk3Mi9waG90/by9sb25kb24tZW5n/bGFuZC12aXJhdC1r/b2hsaS1vZi1pbmRp/YS1wb3Nlcy1mb3It/YS1wb3J0cmFpdC1w/cmlvci10by10aGUt/aWNjLXdvcmxkLXRl/c3QuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPV9ZY0hCVWQx/amZWU2ZRWXFKRW5t/NnFPYWdQcUd0RE5t/SmFZVzFjakMtb0E9",
  //   two: "https://imgs.search.brave.com/KaLCfuvz3AljLqAboq0ZXGzAmlqfCyqrpkKPGSS7vXI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTEy/NzA4MDc0Ny9waG90/by93ZWxsaW5ndG9u/LW5ldy16ZWFsYW5k/LW1zLWRob25pLW9m/LWluZGlhLWxvb2tz/LW9uLWR1cmluZy1n/YW1lLWZpdmUtaW4t/dGhlLW9uZS1kYXku/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWY3ejFMMFhuTm9T/LWwxaU40MjR6Um9U/SFFXZXhGeXhpWTFV/S0FRNERoaEU9",
  //   three: "https://imgs.search.brave.com/ZpyST3VKbYH9KWpqHxJg6j1ah3eIiAwne7hQWwhsd98/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjkz/NzI4NzIwL3Bob3Rv/L2xvbmRvbi1lbmds/YW5kLXNoaWtoYXIt/ZGhhd2FuLW9mLWlu/ZGlhLWJsb3dzLWEt/a2lzcy10by10aGUt/Y3Jvd2QtYXMtaGUt/bGVhdmVzLXRoZS1m/aWVsZC1hZnRlci5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/eUhOQ2xJeHdnV1FN/ZTBvRm5TOXB5dVl5/dlNQRzdIdVdJalIw/ZkhXTjVTaz0"
  // }
 
  // // const imgUrl = [URL.one, URL.two, URL.three];
  // const [imgUrl, setImgUrl] = useState(URL.one);
  // const [name, setName] = useState("Virat Kohli");
  // const [about, setAbout] = useState("Virat Kohli is one of India most celebrated cricketers, known for his aggressive batting style and leadership. He has captained India across all formats and holds numerous international records.");



  return (
    <div className="App-container">
      {cardData.map((card, index) => (
  <Card
    imgURL={card.imgUrl}
    cardName={card.imgName}
    cardAbout={card.imgAbout}
    buttonLabel="Replace"
    onButtonClick={() => cardChange(index)}
  />
))}
    </div>
  )}
    export default App;
    /* 
       <Card imgURL={imgUrl[0]} setImg={() => setImgUrl(URL.two)} cardName={name} setName={() => setName("King Kohli")} cardAbout={about}
      setAbout={() => setAbout("Virat Kohli is often referred to as the run-machine of India.")}/>

      <Card imgURL={imgUrl[1]} cardName={name} cardsetName={setName} cardAbout={about} cardsetAbout={setAbout} />
      <Card imgURL={imgUrl[2]} cardName={name} cardsetName={setName} cardAbout={about} cardsetAbout={setAbout} />      
    </div> 
  );
}
*/
