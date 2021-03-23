function debounce( func, wait, immediate ) {
    let timer;

    return ( ...args ) => {
        args = arguments;
        let context = this,
            later = () => {
                if( !immediate ) {
                    func.apply(context, args )
                }
            }
        
        clearTimeout( timer );
        timer = setTimeout( later, wait );

        let callNow = immediate && !timer;

        if( callNow ) {
            func.apply( context, args )
        }
    }
}

function init() {
    const quizData = [
        {
            question: "which language runs in a web browser?",
            a: "java",
            b: "c",
            c: "python",
            d: "javaScript",
            correct: "d"
        },
        {
            question: "what does CSS stand for?",
            a: "central style sheets",
            b: "cascading style sheets",
            c: "cascading simple sheets",
            d: "cars SUVs sailboats",
            correct: "b"
        },
        {
            question: "what does HTML stand for?",
            a: "hypertext markup language",
            b: "hypertext markdown language",
            c: "hyperlopp machine language",
            d: "helicopters terminals motorboats lamborgini",
            correct: "a"
        },
        {
            question: "what year was JavaScript launched?",
            a: "1996",
            b: "1995",
            c: "1994",
            d: "none of the above",
            correct: "b"
        }
    ];

    let currentQuiz = 0,
        score = 0;
    
    // HTML references
    const quiz = document.getElementById('quiz');
    const questions = document.getElementById('question');
    const answers = document.querySelectorAll('.answer');
    const a__text = document.getElementById('a--text');
    const b__text = document.getElementById('b--text');
    const c__text = document.getElementById('c--text');
    const d__text = document.getElementById('d--text');

    const submit = document.getElementById('submit');

    loadQuiz();

    function loadQuiz() {
        disabledAnswers();

        let currentQuizData = quizData[ currentQuiz ];

        questions.innerHTML = currentQuizData.question;
        a__text.innerHTML = currentQuizData.a;
        b__text.innerHTML = currentQuizData.b;
        c__text.innerHTML = currentQuizData.c;
        d__text.innerHTML = currentQuizData.d;
    }

    function disabledAnswers() {
        answers.forEach(answer => {
            answer.checked = false;
        });
    }

    function getAnswerSelected() {
        let getAnswer;

        answers.forEach( answer => {
            if( answer.checked ) {
                getAnswer = answer.id
            }
        });

        return getAnswer;
    }

    submit.addEventListener('click', debounce(() => {
        const answer = getAnswerSelected();

        if( answer ) {
            if( answer === quizData[ currentQuiz ].correct ){
                score++
            }

            currentQuiz++;

            if( currentQuiz < quizData.length ) {
                loadQuiz()
            }else {
                quiz.innerHTML = `
                    <h2>${ score } / ${ quizData.length } question correctly</h2>
                    <button onclick="location.reload()">reload</button>
                `
            }
        }
    }, 300 ))
}

document.addEventListener('DOMContentLoaded', init)