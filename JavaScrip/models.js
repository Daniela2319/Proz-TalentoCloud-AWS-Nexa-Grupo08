let modelsJson = [
  {
    id: 1,
    name: "Pão Francês",
    img: "/img/Produto-pães/pão-frances.png",
    price: [9.0, 15.0, 20.0],
    sizes: ["100g", "400g", "1kg"],
    description:
      "Pão frances e a sua textura é bem macia e sua casca crocante. Um pão piú gustoso!",
  },
  {
    id: 2,
    name: "Pão Doce Tradicional",
    img: "/img/Produto-pães/pão-doce (1).png",
    price: [5.0, 15.0, 50.0],
    sizes: ["100g", "400g", "1kg"],
    description:
      "A massa macia e fofa, delicadamente amanteigada, derrete na boca com a suavidade de uma nuvem.",
  },
  {
    id: 3,
    name: "Pão Integral Tradicional",
    img: "/img/Produto-pães/pão-integral.png",
    price: [5.0, 15.0, 50.0],
    sizes: ["100g", "400g", "1kg"],
    description:
      "No coração da tradição saudável, apresento a você o Pão Integral Nutritivo, uma deliciosa opção que une o prazer do pão ao compromisso com a saúde.",
  },
  {
    id: 4,
    name: "Pão Italiano",
    img: "/img/Produto-pães/pão-italiano.png",
    price: [5.0, 30.0, 70.0],
    sizes: ["100g", "400g", "1kg"],
    description:
      "Sua casca fina e crocante contrasta com o miolo extremamente macio e é sucesso garantido quando combinado com sopas, saladas e fondue.",
  },
  {
    id: 5,
    name: "Baquette Tradicional",
    img: "/img/Produto-pães/baguette.png",
    price: [5.0, 10.0, 50.0],
    sizes: ["100g", "400g", "1kg"],
    description:
      "Por dentro, alvéolos grandes, textura leve e saborosa. Por fora, crosta caramelizada e uma crocância irresistível",
  },
  {
    id: 6,
    name: "Pão Australiano",
    img: "/img/Produto-pães/pao-australiano.png",
    price: [5.0, 20.0, 50.0],
    sizes: ["100g", "400g", "1kg"],
    description:
      "Em cada fatia do Pão Australiano, desfrute de uma experiência única que transporta seu paladar para as vastas paisagens da Austrália. Este pão extraordinário é uma celebração da tradição e da riqueza dos ingredientes, combinando sabor intenso e textura sublime.",
  },
  {
    id: 7,
    name: "Croissant",
    img: "/img/Produto-pães/croasaint 1.png",
    price: [5.0, 10.0, 60.0],
    sizes: ["100g", "400g", "1kg"],
    description:
      "Cada camada fina e aerada se desfaz em uma explosão de sabor, revelando a riqueza irresistível da manteiga de alta qualidade. ",
  },
  {
    id: 8,
    name: "Pão de Queijo",
    img: "/img/Produto-pães/pao-queijo.png",
    price: [5.0, 10.0, 40.0],
    sizes: ["100g", "400g", "1kg"],
    description:
      "Suas pequenas porções redondas revelam uma combinação única de queijo derretido e uma textura externa crocante que envolve um interior macio e elástico.",
  },
  {
    id: 9,
    name: "Brioche",
    img: "/img/Produto-pães/brioche.png",
    price: [5.0, 10.0, 45.0],
    sizes: ["100g", "400g", "1kg"],
    description:
      "Com sua massa dourada e delicadamente enriquecida, este pão doce é uma festa para os sentidos. A textura leve e aerada, resultado da generosa adição de ovos e manteiga, proporciona uma indulgência única.",
  },
  {
    id: 10,
    name: "Pão de Cacau",
    img: "/img/Produto-pães/pão-cacau.png",
    price: [5.0, 30.0, 90.0],
    sizes: ["100g", "400g", "1kg"],
    description:
      "Com uma cor profunda e aromas envolventes, este pão exala o irresistível perfume do cacau de qualidade. Cada mordida revela uma textura macia, enriquecida pela presença sutil de chocolate, enquanto a doçura equilibrada ressalta os matizes do cacau.",
  },
  {
    id: 11,
    name: "Pão de Caixa Tradicional",
    img: "/img/Produto-pães/pao-de-caixa- tradicional 1.png",
    price: [5.0, 10.0, 20.0],
    sizes: ["100g", "400g", "1kg"],
    description:
      "Ao saborear uma fatia do pão de caixa afetuoso, você é transportado para um lugar onde o tempo parece desacelerar. O sabor suave é complementado pela nostalgia da tradição, proporcionando uma sensação de calor e segurança que só um pão de caixa pode oferecer. ",
  },
  {
    id: 12,
    name: "Pão de Caixa Integral",
    img: "/img/Produto-pães/pão de caixa integral 1.png",
    price: [5.0, 10.0, 25.0],
    sizes: ["100g", "400g", "1kg"],
    description:
      "A base deste pão é uma mistura equilibrada de farinhas integrais, que não apenas acrescenta uma profundidade de sabor nutrido, mas também oferece uma carga vital de fibras essenciais.",
  },
  {
    id: 13,
    name: "Congelado Pão de Queijo",
    img: "/img/Produto-congelado/congelado pão de queijo 1.png",
    price: [0.0, 40.0, 90.0],
    sizes: ["100g", "400g", "1kg"],
    description:
      "O aroma envolvente do queijo assado é um convite para uma experiência gustativa que equilibra a simplicidade com a complexidade de sabores.",
  },
  {
    id: 14,
    name: "Congelado Croissant",
    img: "/img/Produto-congelado/congelado croassait 1.png",
    price: [0.0, 50.0, 100.0],
    sizes: ["100g", "400g", "1kg"],
    description:
      "O Croissant é a essência da elegância matinal, proporcionando uma experiência crocante por fora e macia por dentro que cativa os sentidos.",
  },
  {
    id: 15,
    name: "Congelado Pão Francês",
    img: "/img/Produto-congelado/congelado francês 1.png",
    price: [0.0, 50.0, 100.0],
    sizes: ["100g", "400g", "1kg"],
    description:
      "Pão frances e a sua textura é bem macia e sua casca crocante. Um pão piú gustoso",
  },
  {
    id: 16,
    name: "Congelado Pão Integral",
    img: "/img/Produto-congelado/congelado integral 1.png",
    price: [0.0, 50.0, 100.0],
    sizes: ["100g", "400g", "1kg"],
    description:
      "A base deste pão é uma mistura equilibrada de farinhas integrais, que não apenas acrescenta uma profundidade de sabor nutrido, mas também oferece uma carga vital de fibras essenciais.",
  },
  {
    id: 17,
    name: "Quero Pão na Semana",
    img: "/img/entregador_mini_banner_3.png",
    price: [60.0, 120.0, 180.0, 300.0],
    sizes: ["1x semana", "2x semana", "3x semana", "5x semana"],
    description:
      "Escolha a opção de entrega que melhor atenda às suas necessidades: Faça o pagamento correspondente ao plano escolhido. Confirme seu endereço de entrega para garantir uma entrega eficiente. Pagamento Único: O valor deve ser pago antecipadamente no início de cada semana. Cancelamento: Você pode cancelar ou alterar seu plano a qualquer momento antes do início da próxima semana.",
  },
];
