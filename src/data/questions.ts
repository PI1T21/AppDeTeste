import { QuestionCategory, QuizQuestion } from "../types";

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    enunciado: "Uma loja oferece um desconto de 15% em um produto que custa R$ 80,00. Qual o valor do produto com o desconto?",
    opcoes: ["R$ 65,00", "R$ 68,00", "R$ 70,00", "R$ 72,00", "R$ 75,00"],
    resposta: "B",
    nivel: "Fácil",
    categoria: "Aritmética"
  },
  {
    id: 2,
    enunciado: "João leu 3/5 de um livro. Se o livro tem 200 páginas, quantas páginas João ainda precisa ler para terminar o livro?",
    opcoes: ["40", "60", "80", "100", "120"],
    resposta: "C",
    nivel: "Fácil",
    categoria: "Aritmética"
  },
  {
    id: 3,
    enunciado: "Três torneiras idênticas, abertas ao mesmo tempo, enchem um tanque em 5 horas. Se apenas duas dessas torneiras forem abertas, em quanto tempo elas encherão o mesmo tanque?",
    opcoes: ["6 horas e 30 minutos", "7 horas", "7 horas e 30 minutos", "8 horas", "10 horas"],
    resposta: "C",
    nivel: "Médio",
    categoria: "Aritmética"
  },
  {
    id: 4,
    enunciado: "Um capital de R$ 1.200,00 foi aplicado a juros simples com uma taxa de 2% ao mês. Qual o montante obtido após 6 meses?",
    opcoes: ["R$ 1.272,00", "R$ 1.300,00", "R$ 1.344,00", "R$ 1.360,40", "R$ 144,00"],
    resposta: "C",
    nivel: "Médio",
    categoria: "Aritmética"
  },
  {
    id: 19,
    enunciado: "Uma pessoa gasta 25% de seu salário com aluguel e 30% do restante com alimentação. Qual a porcentagem do salário gasta com alimentação?",
    opcoes: ["15%", "22,5%", "25%", "30%", "45%"],
    resposta: "B",
    nivel: "Médio",
    categoria: "Aritmética"
  },
  {
    id: 20,
    enunciado: "Um carro percorre 210 km com 15 litros de combustível. Quantos litros serão necessários para percorrer 392 km?",
    opcoes: ["25 litros", "28 litros", "30 litros", "32 litros", "35 litros"],
    resposta: "B",
    nivel: "Médio",
    categoria: "Aritmética"
  },
  {
    id: 21,
    enunciado: "Um produto custa R$ 120,00 e recebe um desconto de 30%. Posteriormente, há uma promoção adicional de 20% sobre o valor já com desconto. Qual o valor final do produto?",
    opcoes: ["R$ 50,40", "R$ 67,20", "R$ 72,00", "R$ 84,00", "R$ 96,00"],
    resposta: "B",
    nivel: "Difícil",
    categoria: "Aritmética"
  },
  {
    id: 22,
    enunciado: "Um ciclista percorre 20 km em 45 minutos. Mantendo a mesma velocidade, quanto tempo ele levará para percorrer 60 km?",
    opcoes: ["1 hora e 15 minutos", "1 hora e 30 minutos", "2 horas e 15 minutos", "2 horas e 30 minutos", "3 horas"],
    resposta: "C",
    nivel: "Fácil",
    categoria: "Aritmética"
  },
  {
    id: 23,
    enunciado: "Um funcionário ganha R$ 2.000,00 por mês e recebe um aumento de 15%. Qual será seu novo salário?",
    opcoes: ["R$ 2.150,00", "R$ 2.250,00", "R$ 2.300,00", "R$ 2.350,00", "R$ 2.400,00"],
    resposta: "C",
    nivel: "Fácil",
    categoria: "Aritmética"
  },
  {
    id: 24,
    enunciado: "Uma empresa dividiu R$ 30.000,00 entre seus funcionários. Cada um recebeu R$ 1.500,00. Quantos são os funcionários?",
    opcoes: ["15", "18", "20", "22", "25"],
    resposta: "C",
    nivel: "Fácil",
    categoria: "Aritmética"
  },
  {
    id: 5,
    enunciado: "Qual o valor de x na equação 3x - 7 = 11?",
    opcoes: ["3", "4", "5", "6", "18/3"],
    resposta: "D",
    nivel: "Fácil",
    categoria: "Álgebra"
  },
  {
    id: 6,
    enunciado: "A soma de dois números é 30 e a diferença entre eles é 6. Quais são esses números?",
    opcoes: ["10 e 20", "12 e 18", "14 e 16", "11 e 19", "13 e 17"],
    resposta: "B",
    nivel: "Médio",
    categoria: "Álgebra"
  },
  {
    id: 7,
    enunciado: "Qual o conjunto solução da inequação 2x + 5 > 15?",
    opcoes: ["x < 5", "x > 5", "x < 10", "x > 10", "x = 5"],
    resposta: "B",
    nivel: "Fácil",
    categoria: "Álgebra"
  },
  {
    id: 8,
    enunciado: "O dobro de um número, somado com 5, é igual a 25. Que número é esse?",
    opcoes: ["5", "10", "15", "20", "12.5"],
    resposta: "B",
    nivel: "Fácil",
    categoria: "Álgebra"
  },
  {
    id: 25,
    enunciado: "Resolva a equação: 2(x + 3) - 5 = 3x - 4",
    opcoes: ["x = 1", "x = 2", "x = 3", "x = 4", "x = 5"],
    resposta: "A",
    nivel: "Médio",
    categoria: "Álgebra"
  },
  {
    id: 26,
    enunciado: "Qual o valor de y na equação y = 3x + 2, quando x = 4?",
    opcoes: ["10", "12", "14", "16", "18"],
    resposta: "C",
    nivel: "Fácil",
    categoria: "Álgebra"
  },
  {
    id: 27,
    enunciado: "Se f(x) = 2x² - 3x + 1, calcule f(2).",
    opcoes: ["3", "5", "7", "9", "11"],
    resposta: "B",
    nivel: "Médio",
    categoria: "Álgebra"
  },
  {
    id: 28,
    enunciado: "Qual é o valor de x que satisfaz a equação x²- 5x + 6 = 0?",
    opcoes: ["x = 2 e x = 3", "x = -2 e x = 3", "x = 2 e x = -3", "x = -2 e x = -3", "x = 1 e x = 6"],
    resposta: "A",
    nivel: "Médio",
    categoria: "Álgebra"
  },
  {
    id: 29,
    enunciado: "Se log₂(x) = 3, qual é o valor de x?",
    opcoes: ["2", "4", "6", "8", "16"],
    resposta: "E",
    nivel: "Difícil",
    categoria: "Álgebra"
  },
  {
    id: 30,
    enunciado: "Qual é o valor de m para que a reta y = mx + 2 passe pelo ponto (3, 5)?",
    opcoes: ["0", "1", "2", "3", "1/3"],
    resposta: "B",
    nivel: "Médio",
    categoria: "Álgebra"
  },
  {
    id: 9,
    enunciado: "Um terreno retangular tem 25 metros de comprimento e 12 metros de largura. Qual a área total desse terreno?",
    opcoes: ["74 m²", "150 m²", "300 m²", "37 m²", "600 m²"],
    resposta: "C",
    nivel: "Fácil",
    categoria: "Geometria"
  },
  {
    id: 10,
    enunciado: "Qual o perímetro de um quadrado cujo lado mede 7 cm?",
    opcoes: ["14 cm", "21 cm", "28 cm", "49 cm", "7 cm"],
    resposta: "C",
    nivel: "Fácil",
    categoria: "Geometria"
  },
  {
    id: 11,
    enunciado: "Um triângulo retângulo tem catetos medindo 6 cm e 8 cm. Qual a medida da hipotenusa?",
    opcoes: ["14 cm", "48 cm", "100 cm", "10 cm", "12 cm"],
    resposta: "D",
    nivel: "Médio",
    categoria: "Geometria"
  },
  {
    id: 12,
    enunciado: "Qual o volume de um cubo com aresta medindo 4 cm?",
    opcoes: ["12 cm³", "16 cm³", "48 cm³", "64 cm³", "24 cm³"],
    resposta: "D",
    nivel: "Médio",
    categoria: "Geometria"
  },
  {
    id: 31,
    enunciado: "Qual é a área de um círculo com raio de 6 cm? (Use π = 3,14)",
    opcoes: ["36π cm²", "36 cm²", "12π cm²", "113,04 cm²", "36,14 cm²"],
    resposta: "D",
    nivel: "Médio",
    categoria: "Geometria"
  },
  {
    id: 32,
    enunciado: "Em um triângulo equilátero de lado 8 cm, qual é a altura?",
    opcoes: ["4 cm", "4√3 cm", "6 cm", "6,93 cm", "8√3 cm"],
    resposta: "B",
    nivel: "Difícil",
    categoria: "Geometria"
  },
  {
    id: 33,
    enunciado: "Qual é o volume de uma esfera de raio 3 cm? (Use π = 3,14)",
    opcoes: ["36π cm³", "36 cm³", "4π cm³", "113,04 cm³", "36,14 cm³"],
    resposta: "A",
    nivel: "Difícil",
    categoria: "Geometria"
  },
  {
    id: 34,
    enunciado: "Um trapézio tem bases de 8 cm e 12 cm e altura de 5 cm. Qual é sua área?",
    opcoes: ["40 cm²", "50 cm²", "60 cm²", "70 cm²", "80 cm²"],
    resposta: "B",
    nivel: "Médio",
    categoria: "Geometria"
  },
  {
    id: 35,
    enunciado: "Qual é a distância entre os pontos A(1,3) e B(4,7) no plano cartesiano?",
    opcoes: ["3", "4", "5", "6", "7"],
    resposta: "C",
    nivel: "Médio",
    categoria: "Geometria"
  },
  {
    id: 36,
    enunciado: "A diagonal de um retângulo mede 13 cm e um dos lados mede 5 cm. Quanto mede o outro lado?",
    opcoes: ["8 cm", "10 cm", "12 cm", "15 cm", "18 cm"],
    resposta: "C",
    nivel: "Médio",
    categoria: "Geometria"
  },
  {
    id: 13,
    enunciado: "Observe a sequência: 2, 5, 10, 17, 26, ... Qual o próximo número dessa sequência?",
    opcoes: ["35", "36", "37", "38", "39"],
    resposta: "C",
    nivel: "Médio",
    categoria: "Raciocínio Lógico-Quantitativo"
  },
  {
    id: 14,
    enunciado: "Em uma urna há 5 bolas vermelhas, 3 bolas azuis e 2 bolas verdes. Qual a probabilidade de, ao retirar uma bola ao acaso, ela ser azul?",
    opcoes: ["1/10", "2/10 (ou 1/5)", "3/10", "5/10 (ou 1/2)", "3/7"],
    resposta: "C",
    nivel: "Fácil",
    categoria: "Raciocínio Lógico-Quantitativo"
  },
  {
    id: 15,
    enunciado: "Se todo A é B, e algum C é A, então podemos concluir que:",
    opcoes: ["Todo C é B.", "Nenhum C é B.", "Algum C é B.", "Todo B é C.", "Nenhum A é C."],
    resposta: "C",
    nivel: "Médio",
    categoria: "Raciocínio Lógico-Quantitativo"
  },
  {
    id: 16,
    enunciado: "De quantas maneiras diferentes 3 amigos podem sentar-se em um banco com 3 lugares?",
    opcoes: ["3", "6", "9", "1", "27"],
    resposta: "B",
    nivel: "Médio",
    categoria: "Raciocínio Lógico-Quantitativo"
  },
  {
    id: 37,
    enunciado: "Em uma sequência lógica, o próximo número após 1, 4, 9, 16, 25 é:",
    opcoes: ["30", "36", "45", "49", "64"],
    resposta: "B",
    nivel: "Médio",
    categoria: "Raciocínio Lógico-Quantitativo"
  },
  {
    id: 38,
    enunciado: "Pedro é mais alto que João. Maria é mais baixa que João. Quem é o mais alto dos três?",
    opcoes: ["Pedro", "João", "Maria", "Pedro e João têm a mesma altura", "Não é possível determinar"],
    resposta: "A",
    nivel: "Fácil",
    categoria: "Raciocínio Lógico-Quantitativo"
  },
  {
    id: 39,
    enunciado: "Um dado é lançado duas vezes. Qual a probabilidade de se obter soma 7 nos dois lançamentos?",
    opcoes: ["1/6", "1/9", "1/12", "5/36", "6/36"],
    resposta: "E",
    nivel: "Difícil",
    categoria: "Raciocínio Lógico-Quantitativo"
  },
  {
    id: 40,
    enunciado: "Se João é irmão de Maria, Maria é mãe de Pedro, e Pedro é pai de Ana, qual é o grau de parentesco entre João e Ana?",
    opcoes: ["Tio", "Tio-avô", "Avô", "Primo", "Sobrinho"],
    resposta: "B",
    nivel: "Médio",
    categoria: "Raciocínio Lógico-Quantitativo"
  },
  {
    id: 41,
    enunciado: "Qual número completa a sequência: 1, 8, 27, 64, ?",
    opcoes: ["100", "125", "128", "216", "250"],
    resposta: "B",
    nivel: "Médio",
    categoria: "Raciocínio Lógico-Quantitativo"
  },
  {
    id: 42,
    enunciado: "Em um baralho de 52 cartas, qual a probabilidade de se retirar um rei ou uma carta de ouros?",
    opcoes: ["4/13", "1/4", "4/52", "16/52", "19/52"],
    resposta: "E",
    nivel: "Difícil",
    categoria: "Raciocínio Lógico-Quantitativo"
  },
  {
    id: 17,
    enunciado: "Um produto teve um aumento de 10% e, em seguida, um desconto de 10% sobre o novo preço. Em relação ao preço original, o preço final é:",
    opcoes: ["O mesmo", "1% maior", "1% menor", "10% menor", "10% maior"],
    resposta: "C",
    nivel: "Difícil",
    categoria: "Matemática Financeira"
  },
  {
    id: 18,
    enunciado: "Qual o montante de uma aplicação de R$ 5.000,00 a juros compostos de 1% ao mês, durante 2 meses?",
    opcoes: ["R$ 5.100,00", "R$ 5.100,50", "R$ 5.101,00", "R$ 5.200,00", "R$ 5.050,00"],
    resposta: "B",
    nivel: "Médio",
    categoria: "Matemática Financeira"
  },
  {
    id: 43,
    enunciado: "Uma aplicação de R$ 2.000,00 rendeu R$ 160,00 de juros simples em 8 meses. Qual foi a taxa mensal de juros?",
    opcoes: ["0,8%", "1%", "1,2%", "1,5%", "2%"],
    resposta: "B",
    nivel: "Médio",
    categoria: "Matemática Financeira"
  },
  {
    id: 44,
    enunciado: "Um capital de R$ 3.000,00 foi aplicado a juros compostos de 2% ao mês por 3 meses. Qual o montante final?",
    opcoes: ["R$ 3.180,00", "R$ 3.183,60", "R$ 3.184,80", "R$ 3.185,40", "R$ 3.186,05"],
    resposta: "E",
    nivel: "Médio",
    categoria: "Matemática Financeira"
  },
  {
    id: 45,
    enunciado: "Em quanto tempo um capital de R$ 4.000,00, a juros simples de 1,5% ao mês, renderá R$ 600,00 de juros?",
    opcoes: ["6 meses", "8 meses", "10 meses", "12 meses", "15 meses"],
    resposta: "C",
    nivel: "Médio",
    categoria: "Matemática Financeira"
  },
  {
    id: 46,
    enunciado: "Um empréstimo de R$ 10.000,00 será pago em 5 parcelas iguais, à taxa de juros de 2% ao mês, no sistema de amortização constante (SAC). Qual o valor da primeira parcela?",
    opcoes: ["R$ 2.000,00", "R$ 2.200,00", "R$ 2.400,00", "R$ 2.500,00", "R$ 2.800,00"],
    resposta: "B",
    nivel: "Difícil",
    categoria: "Matemática Financeira"
  },
  {
    id: 47,
    enunciado: "Uma dívida de R$ 5.000,00 deve ser paga após 8 meses, com juros simples de 2% ao mês. Qual o valor total a ser pago?",
    opcoes: ["R$ 5.400,00", "R$ 5.600,00", "R$ 5.800,00", "R$ 6.000,00", "R$ 6.200,00"],
    resposta: "C",
    nivel: "Fácil",
    categoria: "Matemática Financeira"
  },
  {
    id: 48,
    enunciado: "Qual a taxa efetiva anual correspondente a uma taxa de 1,5% ao mês?",
    opcoes: ["18%", "18,9%", "19,56%", "20%", "21,55%"],
    resposta: "C",
    nivel: "Difícil",
    categoria: "Matemática Financeira"
  }
];

export const getQuestionsByCategory = (category: QuestionCategory): QuizQuestion[] => {
  return quizQuestions.filter(question => question.categoria === category);
};

export const getRandomQuestions = (count: number = 5): QuizQuestion[] => {
  // Create a copy of questions and shuffle
  const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
  // Return the requested number of questions
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

export const getAllCategories = (): QuestionCategory[] => {
  const categories = new Set(quizQuestions.map(q => q.categoria));
  return Array.from(categories) as QuestionCategory[];
};

export const getCategoryCount = (): Record<QuestionCategory, number> => {
  const counts: Partial<Record<QuestionCategory, number>> = {};
  
  quizQuestions.forEach(question => {
    if (!counts[question.categoria]) {
      counts[question.categoria] = 1;
    } else {
      counts[question.categoria]!++;
    }
  });
  
  return counts as Record<QuestionCategory, number>;
};
