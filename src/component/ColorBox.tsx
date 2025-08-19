import React from 'react'

const ColorBox = () => {
    const colors = ["red", "blue", "green"];

    return (
    <div style={{ display: "flex", justifyContent: "center", gap: "50px"    }}>
      {colors.map((color) => (
        <div key={color} style={{ textAlign: "center" }}>
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: color,
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: "18px"
            }}
          >
            Box
          </div>
        </div>
      ))}
    </div>
  )
}

export default ColorBox
