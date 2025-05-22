"use client"

import React, { useEffect, useState } from 'react'
interface Usuarios {
  id: number;
    name: string;
    email: string;
}

function Contar() {
const [dulces, setDulces] = useState(0)
const [color, setColor] = useState("blue")
const [visible, setVisible] = useState(false)
const [texto, setTexto] = useState("")
const [usuarios, setUsuarios] = useState([])


useEffect(() => {
    fetch('https://backbeastmode.onrender.com/users')
     .then(response => response.json())
     .then(data => {
        setUsuarios(data) })
     .catch(error => console.error('Error al encontrar a los usuarios:', error));
}, [])

  // Cambiar el texto del input

function Cambiartexto(evento: React.ChangeEvent<HTMLInputElement>) {
    setTexto(evento.target.value)
}

function Cambiarvisivilidad(){
    setVisible(!visible)
}





function asignarsulces() {
    setDulces(dulces + 1);

}
function restarDulces() {
   setDulces (dulces - 1);

   if (dulces <= 0) {
    setDulces(0);
    alert("No puedes tener dulces negativos")
   }
}

function cambiarColor(){
    if (color === 'blue') {
        setColor('yellow');
      } else if (color === 'yellow') {
        setColor('red');
      } else {
        setColor('blue');
      }
    
}

  return (
    <div>

        <ul>
        {usuarios.map((usuario: Usuarios) => (
          <li key={usuario.id}>
            {usuario.name} - {usuario.email}
          </li>
        ))}
        </ul>

<div style={{ textAlign: 'center', marginTop: '40px' }}>
      <input
        type="text"
        placeholder="Escribe algo mágico aquí ✨"
        value={texto}
        onChange={Cambiartexto}
        style={{
          padding: '10px',
          fontSize: '16px',
          borderRadius: '8px',
          border: '1px solid gray'
        }}
      />
      <h2 style={{ marginTop: '20px' }}>Tú escribiste: {texto}</h2>
    </div>
      <h1>Cuantos {dulces} tengo asignados</h1>

      <button onClick={asignarsulces}> Asignar dulces</button> <br />

      <button onClick={restarDulces}>Restar dulces</button>

      <div
      style={{
        backgroundColor: color,
        height: '200px',
        width: '200px',
        borderRadius: '50%',
        border: '2px solid black',
        margin: '20px auto'
      }}
    >
      <button onClick={cambiarColor} style={{ marginTop: '20px' }}>
        Cambiar color
      </button>
    </div>

    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <button onClick={Cambiarvisivilidad}>
        {visible ? '¡Ocúltame! 🫥' : '¡Muéstrame! 🟦'}
      </button>

      {visible && (
        <div
          style={{
            width: '150px',
            height: '150px',
            backgroundColor: 'purple',
            margin: '20px auto',
            borderRadius: '10px',
          }}
        ></div>
        
      )}
    </div>
    

    </div>
  )
}

export default Contar
