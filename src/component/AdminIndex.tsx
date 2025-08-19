import React from 'react'

const AdminIndex = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <header style={{ background: "#d3d7dc", padding: "10px", textAlign: "center" }}>
        Header
      </header>

      <div style={{ display: "flex", flex: 1 }}>
        <aside style={{ background: "#183c85", color: "white", width: "200px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          Menu
        </aside>

        <main style={{ flex: 1, background: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>
          Main
        </main>
      </div>

      <footer style={{ background: "#c6cfd9", padding: "10px", textAlign: "center" }}>
        Footer
      </footer>
    </div>
  )
}

export default AdminIndex
