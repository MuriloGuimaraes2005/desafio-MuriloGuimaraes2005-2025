const animais = [
  { nome: "Fofo", tipo: "gato", brinquedos: ["BOLA", "RATO", "LASER"] },
  { nome: "Rex", tipo: "cao", brinquedos: ["RATO", "BOLA"] },
  { nome: "Mimi", tipo: "gato", brinquedos: ["BOLA", "LASER"] },
  { nome: "Zero", tipo: "gato", brinquedos: ["RATO", "BOLA"] },
  { nome: "Bola", tipo: "cao", brinquedos: ["CAIXA", "NOVELO"] },
  { nome: "Bebe", tipo: "cao", brinquedos: ["LASER", "RATO", "BOLA"] },
  { nome: "Loco", tipo: "jabuti", brinquedos: ["SKATE", "RATO"] }
];

const brinquedosValidos = ["RATO", "BOLA", "LASER", "CAIXA", "NOVELO", "SKATE"];

class AbrigoAnimais {

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {

    let erro = ""
    const brinquedosPessoa1Array = brinquedosPessoa1.split(',');
    const brinquedosPessoa2Array = brinquedosPessoa2.split(',');
    const ordemAnimaisArray = ordemAnimais.split(',').sort();
    const lista = []
    const selecionados = []

    ordemAnimaisArray.map(ordem => {
      const animal = animais.find(x => x.nome == ordem)

      if (!animal) {
        erro = "Animal invalido";
      } else {

        let pessoa1 = true;
        let pessoa2 = true;

        const brinquedosPessoa1filtrado = brinquedosPessoa1Array.filter(x => animal.brinquedos.find(y => x == y))
        const brinquedosPessoa2filtrado = brinquedosPessoa2Array.filter(x => animal.brinquedos.find(y => x == y))

        if (brinquedosPessoa1filtrado.length <= 0)
          pessoa1 = false

        for (let x = 0; x < animal.brinquedos.length; x++) {

          if ((brinquedosPessoa1filtrado.length) > x)
            if (animal.brinquedos[x] != brinquedosPessoa1filtrado[x])
              pessoa1 = false

          if ((brinquedosPessoa2filtrado.length) > x)
            if (animal.brinquedos[x] != brinquedosPessoa2filtrado[x])
              pessoa2 = false
        }
        if (pessoa1) {
          lista.push(`${animal.nome} - pessoa 1`)
        } else if (pessoa2) {
          lista.push(`${animal.nome} - pessoa 2`)
        } else {
          lista.push(`${animal.nome} - abrigo`)
        }

      }

    })

    const brinquedosPessoas = brinquedosPessoa1Array.concat(brinquedosPessoa2Array)
    const validarBrinquedo = brinquedosPessoas.every(x => brinquedosValidos.includes( x ))

    if (!validarBrinquedo) {
      erro = "Brinquedo invalido"
    }

    if (erro != "")
      return { erro }
    else
      return { lista }

  };
};
export { AbrigoAnimais as AbrigoAnimais };
