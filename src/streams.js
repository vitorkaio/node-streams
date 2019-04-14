import { createReadStream, createWriteStream } from 'fs'
import { join } from 'path'

const fileIn = join(__dirname, '/../in.txt')
const pathOut = join(__dirname, '/../files')

// Retorna um array com todas os caracteres do arquivo in.txt
export const readFile = async () => {
  const file = createReadStream(fileIn, 'utf-8')
  return new Promise((resolve) => {
    file.on('data', (content) => {
      resolve(content.replace(/ /gi, '').split('')) // remove todos os espaços em brancos
    })
  })
}

// Cria um arquivo com o nome e com o conteúdo de cada elemento do array.
export const writeFiles = async (list) => {
  for (let i = 0; i < list.length; i++) {
    const file = createWriteStream(`${pathOut}/${i}-${list[i]}.txt`)
    file.write(list[i])
    file.end()
  }
}
