import Arcade from '../../../../public/images/icon-arcade.svg'
import Avançado from '../../../../public/images/icon-advanced.svg'
import pro from '../../../../public/images/icon-pro.svg'

function formataDinheiro(number:number){
 const valueformatado =  number.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
 return valueformatado
}

export const planos = [
 { id: 1, nome: "Arcade", imagem: Arcade, width:50, height:50, alt:'imagem do plano basico', mensal:formataDinheiro(43.10), anual: formataDinheiro(431.09)  },
 { id: 2, nome: "Avançado", imagem: Avançado, width:50, height:50, alt:'imagem do plano Avançado', mensal:formataDinheiro(57.48), anual: formataDinheiro(574.79) },
 { id: 3, nome: "pro", imagem: pro, width:50, height:50, alt:'imagem do plano pro', mensal:formataDinheiro(71.85), anual:formataDinheiro(718.48) },
]