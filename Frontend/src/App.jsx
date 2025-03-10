import ServiceCard from "./components/ServiceCard"


function App() {

  const service = [
    {
      id : 1,
      service : "Web Development",
      description : "I know Html, css, javascript, react"
    },
    {
      id : 2,
      service : "Designing",
      description : " I know Figma"
    }
  ]

  return (
    <>
    Services 
    
      <ul>
        <li>Web Developer</li>
        <li>I know Html, css, javascript, react</li>
      </ul>

      <ul>
        <li>Designing</li>
        <li>I know Figma</li>
      </ul>

    <ServiceCard serv = {service} />

     
    </>
  )
}

export default App
