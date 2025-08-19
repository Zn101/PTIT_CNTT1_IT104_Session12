import React from 'react'
const user = {
    firstName: "Nguyen Van",
    lastName: "A",
}


const FormatName = () => {
    return (
    <div>
        {user.firstName} {user.lastName};
    </div>
  )
}

export default FormatName
