const DATA = [
    {
        question: 'The closest planet to the Earth is',
        answers: [
            {
                id: '1',
                value: 'Mars',
                correct: false,
            },
            {
                id: '2',
                value: 'Jupiter',
                correct: false,
            },
            {
                id: '3',
                value: 'Mercury',
                correct: true,
            },
            {
                id: '4',
                value: 'Neptune',
                correct: false,
            }
        ]
    },
    {
        question: 'It is physically impossible for which animal to look up into the sky?',
        answers: [
            {
                id: '5',
                value: 'Dogs',
                correct: false,
            },
            {
                id: '6',
                value: 'Pigs',
                correct: true,
            },
            {
                id: '7',
                value: 'Tigers',
                correct: false,
            },
            {
                id: '8',
                value: 'Elephants',
                correct: false,
            }
        ]
    },
    {
        question: 'Which animal has not only striped fur, but also striped skin?',
        answers: [
            {
                id: '9',
                value: 'Tigers',
                correct: true,
            },
            {
                id: '10',
                value: 'Zebras',
                correct: false,
            },
            {
                id: '11',
                value: 'Cats',
                correct: false,
            },
            {
                id: '12',
                value: 'Hyenas',
                correct: false,
            }
        ]
    },
    {
        question: 'What is Sodium Chloride?',
        answers: [
            {
                id: '13',
                value: 'Oxygen',
                correct: false,
            },
            {
                id: '14',
                value: 'Salt',
                correct: true,
            },
            {
                id: '15',
                value: 'Chlorine',
                correct: false,
            },
            {
                id: '16',
                value: 'Sodium bicarbonate',
                correct: false,
            }
        ]
    },
    {
        question: 'Because of what protein blood looks red?',
        answers: [
            {
                id: '17',
                value: 'Albumin',
                correct: false,
            },
            {
                id: '18',
                value: 'Globulin',
                correct: false,
            },
            {
                id: '19',
                value: 'Enzymes',
                correct: false,
            },
            {
                id: '20',
                value: 'Hemoglobin',
                correct: true,
            }
        ]
    },
    {
        question: 'What is the capital of Ireland?',
        answers: [
            {
                id: '21',
                value: 'Ottawa',
                correct: false,
            },
            {
                id: '22',
                value: 'Dublin',
                correct: true,
            },
            {
                id: '23',
                value: 'Edinburgh',
                correct: false,
            },
            {
                id: '24',
                value: 'Cardiff',
                correct: false,
            }
        ]
    },
    {
        question: 'What is the most expensive spice in the world?',
        answers: [
            {
                id: '25',
                value: 'Black Cardamom',
                correct: false,
            },
            {
                id: '26',
                value: 'GlobuGreen Cardamomlin',
                correct: false,
            },
            {
                id: '27',
                value: 'Mahlab',
                correct: false,
            },
            {
                id: '28',
                value: 'Saffron',
                correct: true,
            }
        ]
    },
    {
        question: 'Who designed and built the Eiffel Tower?',
        answers: [
            {
                id: '29',
                value: 'Auguste Bartholdi',
                correct: false,
            },
            {
                id: '30',
                value: 'Gustave Eiffel',
                correct: true,
            },
            {
                id: '31',
                value: 'Giovanni di Simone',
                correct: false,
            },
            {
                id: '32',
                value: 'Augustus Pugin',
                correct: false,
            }
        ]
    },
    {
        question: 'In the Simpsons, which colour is Marge’s hair?',
        answers: [
            {
                id: '33',
                value: 'Blue',
                correct: true,
            },
            {
                id: '34',
                value: 'Pink',
                correct: false,
            },
            {
                id: '35',
                value: 'Yellow',
                correct: false,
            },
            {
                id: '36',
                value: 'Orange',
                correct: false,
            }
        ]
    },
    {
        question: 'In which country is the island of Tasmania?',
        answers: [
            {
                id: '37',
                value: 'Italy',
                correct: false,
            },
            {
                id: '38',
                value: 'Africa',
                correct: false,
            },
            {
                id: '39',
                value: 'Japan',
                correct: false,
            },
            {
                id: '40',
                value: 'Australia',
                correct: true,
            }
        ]
    },
    {
        question: 'In which country was Pablo Picasso born?',
        answers: [
            {
                id: '41',
                value: 'Barcelona',
                correct: false,
            },
            {
                id: '42',
                value: 'Madrid',
                correct: false,
            },
            {
                id: '43',
                value: 'Málaga',
                correct: true,
            },
            {
                id: '44',
                value: 'Granada',
                correct: false,
            }
        ]
    },
    {
        question: 'What is the name of Harry Potter’s owl?',
        answers: [
            {
                id: '45',
                value: 'Crookshanks',
                correct: false,
            },
            {
                id: '46',
                value: 'Hedwig',
                correct: true,
            },
            {
                id: '47',
                value: 'Ulysses',
                correct: false,
            },
            {
                id: '48',
                value: 'Pigwidgeon',
                correct: false,
            }
        ]
    },
    {
        question: 'What’s Garfield’s favourite food?',
        answers: [
            {
                id: '49',
                value: 'Lasagna',
                correct: true,
            },
            {
                id: '50',
                value: 'Donuts',
                correct: false,
            },
            {
                id: '51',
                value: 'Pizza',
                correct: false,
            },
            {
                id: '52',
                value: 'Ice Cream',
                correct: false,
            }
        ]
    },
    {
        question: 'In which museum can you find the Mona Lisa?',
        answers: [
            {
                id: '53',
                value: 'Museum of Modern Art',
                correct: false,
            },
            {
                id: '54',
                value: 'Tate Modern',
                correct: false,
            },
            {
                id: '55',
                value: 'The Louvre',
                correct: true,
            },
            {
                id: '56',
                value: 'The Metropolitan Museum of Art',
                correct: false,
            }
        ]
    },
    {
        question: 'What is the rarest blood type?',
        answers: [
            {
                id: '57',
                value: 'B-',
                correct: false,
            },
            {
                id: '58',
                value: 'AB+',
                correct: false,
            },
            {
                id: '59',
                value: 'AB-',
                correct: true,
            },
            {
                id: '60',
                value: 'B+',
                correct: false,
            }
        ]
    }
];
let localResults = {};

const quiz = document.getElementById('quiz');
const questions = document.getElementById('questions');
const indicator = document.getElementById('indicator');
const results = document.getElementById('results');
const btnNext = document.getElementById('btn-next');
const btnFinish = document.getElementById('btn-finish');
const btnRestart = document.getElementById('btn-restart');

const renderQuestions = (index) => {
    renderIndicator(index + 1);
    questions.dataset.currentStep = index;
    const renderAnswers = () => DATA[index].answers
        .map((answer) => `
            <li>
                <label>
                    <input class="answer-input" type="radio" name=${index} value=${answer.id}>
                    ${answer.value}
                </label>
            </li>            
        `)
        .join('');
    
    questions.innerHTML = `
        <div class="quiz-questions-item">
            <div class="quiz-questions-item__question">${DATA[index].question}</div>
            <ul class="quiz-questions-item__answers">${renderAnswers()}</ul>
        </div>
    `;
};
const renderResults = () => {
    let content = '';

    const getClassname = (answer, questionIndex) => {
        let classname = '';
        if (!answer.correct && answer.id === localResults[questionIndex]) {
            classname = 'answer--invalid';
        } else if (answer.correct) {
            classname = 'answer--valid';
        }


        return classname;
    };

    const getAnswers = (questionIndex) => DATA[questionIndex].answers
        .map((answer) => `<li class=${getClassname(answer,questionIndex)}>${answer.value}</li>`)
        .join('');

    DATA.forEach((question, index) => {
        content += `
        <div class="quiz-results-item">
            <div class="quiz-results-item__question">${question.question}</div>
            <ul class="quiz-results-item__answers">${getAnswers(index)}</ul>
        </div>
        `;
    });
    results.innerHTML = content;
};
const renderIndicator = (currentStep) => {
    indicator.innerHTML = `${currentStep}/${DATA.length}`;
};

quiz.addEventListener('change', (event) => {
    if (event.target.classList.contains('answer-input')) {
        localResults[event.target.name] = event.target.value;
        btnNext.disabled = false;
    }
});
quiz.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-next')) {
        const nextQuestionIndex = Number(questions.dataset.currentStep) + 1;
        
        if (DATA.length === nextQuestionIndex) {
            questions.classList.add('questions--hidden');
            indicator.classList.add('indicator--hidden');
            results.classList.add('indicator--visible');
            btnNext.classList.add('bet-next--hidden');
            btnFinish.classList.add('btn-finish--visible');
            btnRestart.classList.add('btn-restart--visible');
            
            renderResults();
        } else {
            renderQuestions(nextQuestionIndex);
        }
        btnNext.disabled = true;
    }
    if (event.target.classList.contains('btn-finish')) {
        console.log('Finish');
    }
    if (event.target.classList.contains('btn-restart')) {
        localResults = {};
        results.innerHTML = '';

        questions.classList.remove('questions--hidden');
        indicator.classList.remove('indicator--hidden');
        results.classList.remove('indicator--visible');
        btnNext.classList.remove('bet-next--hidden');
        btnFinish.classList.remove('btn-finish--visible');
        btnRestart.classList.remove('btn-restart--visible');

        renderQuestions(0);
}
});
renderQuestions(0);
