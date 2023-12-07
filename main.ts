import { readFile, writeFile } from 'fs/promises';

async function lerEGravarArquivo() {
  try {
    let obj: any = {
        nome: "dskfhsdiuhfsdiuf",
        email: "odara_boladona@gmail.com",
        phone: 16266363738
    }
    let objstring= JSON.stringify(obj)
    const conteudo = await readFile('arquivo.txt', 'utf-8');
    console.log('Conteúdo lido:', conteudo);

    await writeFile('novo-arquivo.txt', objstring);
    console.log('Arquivo gravado com sucesso.');
  } catch (erro) {
    console.error('Erro ao ler/gravar arquivo:', erro);
  }
}

lerEGravarArquivo();
