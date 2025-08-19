import React from 'react'

const TableLayout = () => {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
      <thead>
        <tr style={{ background: "#f5f6f7" }}>
          <th>STT</th>
          <th>Họ và tên</th>
          <th>Ngày sinh</th>
          <th>Giới tính</th>
          <th>Địa chỉ</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Malcolm Lockyer</td>
          <td>21/03/1961</td>
          <td>Nam</td>
          <td>New York</td>
          <td>
            <button style={{ marginRight: "5px" }}>Sửa</button>
            <button style={{ background: "red", color: "white" }}>Xóa</button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Maria</td>
          <td>11/02/1990</td>
          <td>Nữ</td>
          <td>London</td>
          <td>
            <button style={{ marginRight: "5px" }}>Sửa</button>
            <button style={{ background: "red", color: "white" }}>Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default TableLayout
