import React from 'react';

const teamLogos = [
  { src: "./public/americanlogos/angels.png", alt: "angels" },
  { src: "./public/americanlogos/astros.png", alt: "astros" },
  { src: "./public/americanlogos/athletics.png", alt: "athletics" },
  { src: "./public/americanlogos/bluejays.png", alt: "bluejays" },
  { src: "./public/americanlogos/guardians.png", alt: "guardians" },
  { src: "./public/americanlogos/mariners.png", alt: "mariners" },
  { src: "./public/americanlogos/orioles.png", alt: "orioles" },
  { src: "./public/americanlogos/rangers.png", alt: "rangers" },
  { src: "./public/americanlogos/rays.png", alt: "rays" },
  { src: "./public/americanlogos/redsox.png", alt: "redsox" },
  { src: "./public/americanlogos/royals.png", alt: "royals" },
  { src: "./public/americanlogos/tigers.png", alt: "tigers" },
  { src: "./public/americanlogos/twins.png", alt: "twins" },
  { src: "./public/americanlogos/whitesox.png", alt: "whitesox" },
  { src: "./public/americanlogos/yankees.png", alt: "yankees" },
];

function LogosAmerican() {
  const imgWidth = '55px'
  const imgMargin = '10px'



  return (
    <div style={{textAlign : 'center'}}>
      <h3 style={{marginTop: '20px'}}>American League</h3>
      {teamLogos.map((team, index) => (
        <img key={index} src={team.src} alt={team.alt} width={imgWidth} style={{margin: imgMargin}}/>
      ))}
    </div>
  );
}

export default LogosAmerican;
