// Perguntas do quiz
const questions = [
    // Perguntas da essência "Caos"
    { text: "Você acha que mudanças drásticas são necessárias para o progresso?", essence: "caos" },
    { text: "Prefere seguir o fluxo em vez de planejar cuidadosamente?", essence: "caos" },
    { text: "Você acredita que conflitos podem gerar transformações positivas?", essence: "caos" },
    { text: "A imprevisibilidade torna a vida mais interessante?", essence: "caos" },
    { text: "Você sente que situações caóticas testam seu verdadeiro potencial?", essence: "caos" },
    { text: "Desafiar tradições é essencial para inovar?", essence: "caos" },

    // Perguntas da essência "Ilusão"
    { text: "Você acha que a percepção dos outros define sua realidade?", essence: "ilusao" },
    { text: "Acredita que às vezes é melhor manter as aparências?", essence: "ilusao" },
    { text: "Você se sente confortável em moldar histórias para influenciar as pessoas?", essence: "ilusao" },
    { text: "A ilusão pode ser uma forma de proteger quem você ama?", essence: "ilusao" },
    { text: "Você acredita que nem tudo precisa ser como parece?", essence: "ilusao" },
    { text: "É natural usar a criatividade para mudar perspectivas?", essence: "ilusao" },

    // Perguntas da essência "Justiça"
    { text: "Você se sente responsável por corrigir erros, mesmo quando não é sua obrigação?", essence: "justica" },
    { text: "Prefere que regras sejam seguidas, independentemente da situação?", essence: "justica" },
    { text: "Você acredita que as ações devem sempre ter consequências claras e justas?", essence: "justica" },
    { text: "Você prioriza a equidade em todas as situações?", essence: "justica" },
    { text: "Você defende os que não podem se defender sozinhos?", essence: "justica" },
    { text: "A imparcialidade é um princípio fundamental para você?", essence: "justica" },

    // Perguntas da essência "Vida"
    { text: "Você se sente energizado por ajudar algo ou alguém a crescer?", essence: "vida" },
    { text: "Acha que novos começos são mais importantes do que finais?", essence: "vida" },
    { text: "Você prefere encontrar soluções que preservem o máximo possível?", essence: "vida" },
    { text: "O ciclo de nascimento e renascimento é fundamental para você?", essence: "vida" },
    { text: "Você sente conexão com a natureza e a energia vital ao seu redor?", essence: "vida" },
    { text: "Sua felicidade está ligada ao crescimento e florescimento das pessoas?", essence: "vida" },

    // Perguntas da essência "Barganha"
    { text: "Está disposto a trocar algo valioso por um benefício maior?", essence: "barganha" },
    { text: "Acredita que acordos equilibrados são a base de qualquer relação?", essence: "barganha" },
    { text: "Você vê cada interação como uma oportunidade de ganho mútuo?", essence: "barganha" },
    { text: "Negociações fazem parte do progresso?", essence: "barganha" },
    { text: "Você valoriza a troca justa em todas as situações?", essence: "barganha" },
    { text: "Está disposto a arriscar para garantir recompensas maiores?", essence: "barganha" }
];


// Descrições e imagens das essências
const descriptions = {
    caos: "Você é a personificação da mudança e do imprevisível, sempre pronto(a) para encarar desafios.",
    ilusao: "Você domina o mundo das aparências e imaginações, criando realidades alternativas.",
    barganha: "Você compreende que toda conquista exige sacrifícios e trocas.",
    justica: "Você valoriza regras claras e consequências justas para todas as ações.",
    vida: "Você é movido(a) pela energia vital, sempre em busca de crescimento e aprendizado."
};

const images = {
    caos: "images/caos.png",
    ilusao: "images/ilusao.png",
    barganha: "images/barganha.png",
    justica: "images/justica.png",
    vida: "images/vida.png"
};

// Variáveis de controle
let currentQuestionIndex = 0;
let scores = {
    caos: 0,
    ilusao: 0,
    barganha: 0,
    medo: 0,
    penumbra: 0,
    almas: 0,
    justica: 0,
    vida: 0,
    morte: 0,
};

// Função para atualizar o progresso
function updateProgress() {
    const progressElement = document.getElementById("progress");
    progressElement.innerText = `${currentQuestionIndex + 1}/${questions.length}`;
}

// Função para carregar uma nova pergunta
function loadQuestion() {
    const questionData = questions[currentQuestionIndex];
    document.getElementById("question").innerText = questionData.text;
    updateProgress(); // Atualiza o progresso sempre que a pergunta mudar
}

// Função para selecionar uma opção
function selectOption(value) {
    const effects = questions[currentQuestionIndex].effect;
    for (let essence in effects) {
        scores[essence] += effects[essence] * value;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Função para iniciar o quiz
function startQuiz() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    loadQuestion(); // Inicia carregando a primeira pergunta
}

// Função para mostrar o resultado
function showResult() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result-container").style.display = "block";

    const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const topEssence = sortedScores[0][0];

    document.getElementById("result").innerText =
        topEssence.charAt(0).toUpperCase() + topEssence.slice(1);
    document.getElementById("element-description").innerText =
        descriptions[topEssence];
    document.getElementById("element-image").src = images[topEssence];
}

// Função para reiniciar o quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    scores = {
        caos: 0,
        ilusao: 0,
        barganha: 0,
        medo: 0,
        penumbra: 0,
        almas: 0,
        justica: 0,
        vida: 0,
        morte: 0,
    };
    document.getElementById("quiz").style.display = "block";
    document.getElementById("result-container").style.display = "none";
    loadQuestion();
}

// Função para compartilhar no WhatsApp
function shareOnWhatsApp() {
    const essence = document.getElementById("result").innerText;
    const description = document.getElementById("element-description").innerText;
    const message = `Descobri minha essência no Quiz das Essências! 🌟\n\nMinha essência é: *${essence}*\n${description}`;
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
}

// Atualizar a exibição inicial
window.onload = function () {
    loadQuestion();  // Carregar a primeira pergunta
    updateProgress(); // Atualizar o progresso na página inicial
};