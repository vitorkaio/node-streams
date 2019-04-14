import { readFile, writeFiles } from './src/streams'

const main = async () => {
  const list = await readFile()
  writeFiles(list)
}

main()
