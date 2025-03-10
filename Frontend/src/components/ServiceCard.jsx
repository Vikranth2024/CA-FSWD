import React from "react"

const ServiceCard = ({serv}) => {


  return (
<>      

        {serv.map( 
          ser =>
          {
          // <ul key = {ser.id}>
          //   <li>{ser.id}</li>
          // <li > {ser.service}  </li>
          // <li>{ser.description}</li>

          // </ul>
          <p key={ser.id}>{ser.service} {ser.description}</p>
         
        })
      }
    </>
  )
}

export default ServiceCard