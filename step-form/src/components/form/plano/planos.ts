import Arcade from '../../../../public/images/icon-arcade.svg'
import Avançado from '../../../../public/images/icon-advanced.svg'
import pro from '../../../../public/images/icon-pro.svg'

export function formataDinheiro(number:number){
 const valueformatado =  number.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
 return valueformatado
}

export const planos = [
 { id: 1, nome: "Arcade", imagem: Arcade, width:50, height:50, alt:'imagem do plano basico', mensal:43.10, anual: 431.09  },
 { id: 2, nome: "Avançado", imagem: Avançado, width:50, height:50, alt:'imagem do plano Avançado', mensal:57.48, anual: 574.79 },
 { id: 3, nome: "pro", imagem: pro, width:50, height:50, alt:'imagem do plano pro', mensal:71.85, anual:718.48 }
]