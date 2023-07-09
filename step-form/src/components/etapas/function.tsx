export function generationNumberSteps() {

  const number = [
    {number: 1, msg: 'Seu perfil'},
    {number: 2, msg: 'Selecione seu plano'},
    {number: 3, msg: 'Add extras'},
    {number: 4, msg: 'Resumo'}
  ]

  const active = 1

  function generationColor(n:number){
    if(active === n){
      return 'black'
    }

    return 'white'
  }

  function generationBackgrund(n:number){
    if(active === n){
      return 'rgb(98, 195, 236)'
    }

    return 'transparent'
  }


  return number.map(({number, msg}) => {

    return (
      <li key={msg}>

       <div style={{backgroundColor: `${generationBackgrund(number)}`, color: `${generationColor(number)}` }}>

        <p >{number}</p>
       </div>

       <div>
        <p>Etapa {number}</p>
        <p>{msg}</p>
       </div>

      </li>
    )
  })
   
} 