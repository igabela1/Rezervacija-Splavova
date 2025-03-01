import React from "react";

function SplavoviLista() {
  const splavovi = [
    {
      naziv: "Splav 1",
      slika: "/images/splav1.jpg",
      key: "splav1",
    },
    {
      naziv: "Splav 2",
      slika: "/images/splav2.jpg",
      key: "splav2",
    },
    {
      naziv: "Splav 3",
      slika: "/images/splav3.jpg",
      key: "splav3",
    },
    {
      naziv: "Splav 4",
      slika: "/images/splav4.jpg",
      key: "splav4",
    },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {splavovi.map((splav) => (
        <div key={splav.key} style={{ margin: "10px" }}>
          <img src={splav.slika} alt={splav.naziv} style={{ maxWidth: "300px" }} />
          <p>{splav.naziv}</p>
        </div>
      ))}
    </div>
  );
}

export default SplavoviLista;