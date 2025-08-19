import React from 'react'

const UserLayout = () => {
  return (
<div>
      <header style={{ background: "#cfd8dc", padding: "10px", textAlign: "center" }}>
        Header
      </header>

      <nav style={{ background: "#90a4ae", padding: "10px", textAlign: "center" }}>
        Navigation
      </nav>

      <div style={{ display: "flex" }}>
        <aside style={{ background: "green", flex: "1", textAlign: "center", padding: "20px" }}>
          Menu
        </aside>

        <main style={{ background: "#fff0f0", flex: "3", display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", padding: "20px" }}>
          <div style={{ background: "white", width: "120px", height: "80px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #ddd" }}>Cart</div>
          <div style={{ background: "white", width: "120px", height: "80px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #ddd" }}>Cart</div>
          <div style={{ background: "white", width: "120px", height: "80px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #ddd" }}>Cart</div>
          <div style={{ background: "white", width: "120px", height: "80px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #ddd" }}>Cart</div>
          <div style={{ background: "white", width: "120px", height: "80px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #ddd" }}>Cart</div>
          <div style={{ background: "white", width: "120px", height: "80px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #ddd" }}>Cart</div>
          <div style={{ background: "white", width: "120px", height: "80px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #ddd" }}>Cart</div>
          <div style={{ background: "white", width: "120px", height: "80px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #ddd" }}>Cart</div>
          <div style={{ background: "white", width: "120px", height: "80px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #ddd" }}>Cart</div>
          <div style={{ background: "white", width: "120px", height: "80px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #ddd" }}>Cart</div>
          <div style={{ background: "white", width: "120px", height: "80px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #ddd" }}>Cart</div>
          <div style={{ background: "white", width: "120px", height: "80px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #ddd" }}>Cart</div>
        </main>

        <article style={{ background: "lightblue", flex: "1", textAlign: "center", padding: "20px" }}>
          Article
        </article>
      </div>
    </div>
    )
}

export default UserLayout
