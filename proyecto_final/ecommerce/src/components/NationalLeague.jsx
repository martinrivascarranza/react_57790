import React from "react";

const teamLogos = [

  { src: "./public/nationallogos/arizona.png", alt: "arizona" },
  { src: "./public/nationallogos/braves.png", alt: "braves" },
  { src: "./public/nationallogos/brewers.png", alt: "brewers" },
  { src: "./public/nationallogos/cardinals.png", alt: "cardinals" },
  { src: "./public/nationallogos/cubs.png", alt: "cubs" },
  { src: "./public/nationallogos/dodgers.png", alt: "dodgers" },
  { src: "./public/nationallogos/giants.png", alt: "giants" },
  { src: "./public/nationallogos/marlins.png", alt: "marlins" },
  { src: "./public/nationallogos/mets.png", alt: "mets" },
  { src: "./public/nationallogos/nationals.png", alt: "nationals" },
  { src: "./public/nationallogos/padres.png", alt: "padres" },
  { src: "./public/nationallogos/phillies.png", alt: "phillies" },
  { src: "./public/nationallogos/pirates.png", alt: "pirates" },
  { src: "./public/nationallogos/reds.png", alt: "reds" }
  

]



function NationalLogos () {

const imgWidth = '55px'
const imgMargin = '10px'


  return (
   <div style={{textAlign: 'center'}}>
    <h3 style={{marginTop: '20px'}}>National League</h3>
    {teamLogos.map((team, index) => ( 
      <img key={index} src={team.src} alt={team.alt} width={imgWidth} style={{margin: imgMargin}}/>
    ))}

   </div>
  )
}


export default NationalLogos