// Would You Rather Game - JavaScript Logic

class WouldYouRatherGame {
    constructor() {
        this.questions = [
            // Hilarious Food & Weird Situations
            {
                question: "Would you rather...",
                optionA: "Eat a sandwich made by a raccoon",
                optionB: "Drink coffee brewed by a pigeon"
            },
            {
                question: "Would you rather...",
                optionA: "Have your phone autocorrect everything to 'potato'",
                optionB: "Have your GPS only give directions in pirate speak"
            },
            {
                question: "Would you rather...",
                optionA: "Sneeze confetti every time you sneeze",
                optionB: "Fart rainbows (silent but colorful)"
            },
            {
                question: "Would you rather...",
                optionA: "Have your eyebrows constantly moving like caterpillars",
                optionB: "Have your nose whistle when you breathe"
            },
            {
                question: "Would you rather...",
                optionA: "Be able to talk to animals but they only speak in dad jokes",
                optionB: "Be able to understand plants but they're all very dramatic"
            },
            
            // Absurd Superpowers
            {
                question: "Would you rather...",
                optionA: "Be able to turn invisible but only when no one is looking",
                optionB: "Be able to fly but only 3 inches off the ground"
            },
            {
                question: "Would you rather...",
                optionA: "Have the ability to make any food taste like your favorite food",
                optionB: "Have the ability to make any song sound like your favorite song"
            },
            {
                question: "Would you rather...",
                optionA: "Be able to read minds but only when people are thinking about food",
                optionB: "Be able to see the future but only 30 seconds ahead"
            },
            {
                question: "Would you rather...",
                optionA: "Have the power to make anyone hiccup on command",
                optionB: "Have the power to make anyone's shoelaces untie instantly"
            },
            {
                question: "Would you rather...",
                optionA: "Be able to teleport but only to bathrooms",
                optionB: "Be able to time travel but only to awkward moments in your past"
            },
            
            // Ridiculous Life Choices
            {
                question: "Would you rather...",
                optionA: "Live in a house made entirely of cheese",
                optionB: "Live in a house where everything is slightly too small"
            },
            {
                question: "Would you rather...",
                optionA: "Have to end every sentence with '...said the wizard'",
                optionB: "Have to start every sentence with 'According to my sources...'"
            },
            {
                question: "Would you rather...",
                optionA: "Have your car only play elevator music",
                optionB: "Have your car only play baby shark on repeat"
            },
            {
                question: "Would you rather...",
                optionA: "Be famous for being the world's worst juggler",
                optionB: "Be famous for being the world's most enthusiastic nap taker"
            },
            {
                question: "Would you rather...",
                optionA: "Have to wear a chicken costume to every job interview",
                optionB: "Have to do a little dance every time you enter a room"
            },
            
            // Weird Social Situations
            {
                question: "Would you rather...",
                optionA: "Have to high-five everyone you meet",
                optionB: "Have to whisper everything you say"
            },
            {
                question: "Would you rather...",
                optionA: "Be able to understand what babies are thinking",
                optionB: "Be able to understand what dogs are thinking"
            },
            {
                question: "Would you rather...",
                optionA: "Have your laugh sound like a dolphin",
                optionB: "Have your laugh sound like a car engine starting"
            },
            {
                question: "Would you rather...",
                optionA: "Be able to make anyone instantly forget your name",
                optionB: "Be able to make anyone instantly remember your name"
            },
            {
                question: "Would you rather...",
                optionA: "Have to speak in rhyme for one day",
                optionB: "Have to speak only in questions for one day"
            },
            
            // Absurd Technology
            {
                question: "Would you rather...",
                optionA: "Have a phone that only works when you're dancing",
                optionB: "Have a computer that only works when you're singing"
            },
            {
                question: "Would you rather...",
                optionA: "Have WiFi that only works when you're upside down",
                optionB: "Have WiFi that only works when you're wearing a hat"
            },
            {
                question: "Would you rather...",
                optionA: "Have a GPS that gives directions like a very confused person",
                optionB: "Have a GPS that only gives directions in song lyrics"
            },
            {
                question: "Would you rather...",
                optionA: "Have your phone autocorrect to random emojis",
                optionB: "Have your phone autocorrect to random movie quotes"
            },
            {
                question: "Would you rather...",
                optionA: "Have a smart home that's passive-aggressive",
                optionB: "Have a smart home that's overly enthusiastic about everything"
            },
            
            // Completely Random & Silly
            {
                question: "Would you rather...",
                optionA: "Be able to make any object taste like chocolate",
                optionB: "Be able to make any sound smell like fresh cookies"
            },
            {
                question: "Would you rather...",
                optionA: "Have your shadow do the opposite of what you do",
                optionB: "Have your reflection wink at you randomly"
            },
            {
                question: "Would you rather...",
                optionA: "Be able to turn into a rubber duck",
                optionB: "Be able to turn into a very confused penguin"
            },
            {
                question: "Would you rather...",
                optionA: "Have to announce everything you're about to do",
                optionB: "Have to narrate everything you're currently doing"
            },
            {
                question: "Would you rather...",
                optionA: "Be able to make it rain tacos",
                optionB: "Be able to make it snow pizza"
            }
        ];
        
        this.currentQuestionIndex = 0;
        this.questionCount = 0;
        this.streak = 0;
        this.bestStreak = 0;
        this.usedQuestions = new Set();
        
        this.initializeElements();
        this.loadStats();
        this.showRandomQuestion();
        this.attachEventListeners();
    }
    
    initializeElements() {
        this.questionText = document.getElementById('questionText');
        this.optionAText = document.getElementById('optionAText');
        this.optionBText = document.getElementById('optionBText');
        this.optionA = document.getElementById('optionA');
        this.optionB = document.getElementById('optionB');
        this.skipBtn = document.getElementById('skipBtn');
        this.newGameBtn = document.getElementById('newGameBtn');
        this.questionCountEl = document.getElementById('questionCount');
        this.streakEl = document.getElementById('streak');
        this.statsContainer = document.getElementById('statsContainer');
        this.totalQuestionsEl = document.getElementById('totalQuestions');
        this.currentStreakEl = document.getElementById('currentStreak');
        this.bestStreakEl = document.getElementById('bestStreak');
    }
    
    attachEventListeners() {
        this.optionA.addEventListener('click', () => this.selectOption('A'));
        this.optionB.addEventListener('click', () => this.selectOption('B'));
        this.skipBtn.addEventListener('click', () => this.skipQuestion());
        this.newGameBtn.addEventListener('click', () => this.newGame());
        
        // Keyboard support
        document.addEventListener('keydown', (e) => {
            if (e.key === '1' || e.key === 'a' || e.key === 'A') {
                this.selectOption('A');
            } else if (e.key === '2' || e.key === 'b' || e.key === 'B') {
                this.selectOption('B');
            } else if (e.key === 's' || e.key === 'S') {
                this.skipQuestion();
            } else if (e.key === 'n' || e.key === 'N') {
                this.newGame();
            }
        });
    }
    
    showRandomQuestion() {
        if (this.usedQuestions.size >= this.questions.length) {
            this.usedQuestions.clear();
        }
        
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * this.questions.length);
        } while (this.usedQuestions.has(randomIndex));
        
        this.usedQuestions.add(randomIndex);
        this.currentQuestionIndex = randomIndex;
        
        const question = this.questions[randomIndex];
        this.questionText.textContent = question.question;
        this.optionAText.textContent = question.optionA;
        this.optionBText.textContent = question.optionB;
        
        // Reset button styles
        this.optionA.style.transform = '';
        this.optionB.style.transform = '';
        this.optionA.disabled = false;
        this.optionB.disabled = false;
    }
    
    selectOption(option) {
        this.questionCount++;
        this.streak++;
        
        if (this.streak > this.bestStreak) {
            this.bestStreak = this.streak;
        }
        
        this.updateDisplay();
        this.saveStats();
        
        // Visual feedback
        const selectedBtn = option === 'A' ? this.optionA : this.optionB;
        const otherBtn = option === 'A' ? this.optionB : this.optionA;
        
        selectedBtn.style.transform = 'scale(1.05)';
        selectedBtn.style.background = 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)';
        otherBtn.style.opacity = '0.5';
        
        // Disable buttons temporarily
        this.optionA.disabled = true;
        this.optionB.disabled = true;
        
        // Show next question after a delay
        setTimeout(() => {
            this.showRandomQuestion();
        }, 1500);
    }
    
    skipQuestion() {
        this.streak = 0;
        this.updateDisplay();
        this.saveStats();
        this.showRandomQuestion();
    }
    
    newGame() {
        this.questionCount = 0;
        this.streak = 0;
        this.usedQuestions.clear();
        this.updateDisplay();
        this.saveStats();
        this.showRandomQuestion();
        this.statsContainer.style.display = 'none';
    }
    
    updateDisplay() {
        this.questionCountEl.textContent = this.questionCount;
        this.streakEl.textContent = this.streak;
        this.totalQuestionsEl.textContent = this.questionCount;
        this.currentStreakEl.textContent = this.streak;
        this.bestStreakEl.textContent = this.bestStreak;
        
        // Show stats after 5 questions
        if (this.questionCount >= 5) {
            this.statsContainer.style.display = 'block';
        }
    }
    
    saveStats() {
        const stats = {
            questionCount: this.questionCount,
            streak: this.streak,
            bestStreak: this.bestStreak
        };
        localStorage.setItem('wouldYouRatherStats', JSON.stringify(stats));
    }
    
    loadStats() {
        const savedStats = localStorage.getItem('wouldYouRatherStats');
        if (savedStats) {
            const stats = JSON.parse(savedStats);
            this.questionCount = stats.questionCount || 0;
            this.streak = stats.streak || 0;
            this.bestStreak = stats.bestStreak || 0;
            this.updateDisplay();
        }
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new WouldYouRatherGame();
});

// Add some fun animations and effects
document.addEventListener('DOMContentLoaded', () => {
    // Add click ripple effect
    const buttons = document.querySelectorAll('.option-btn, .btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add ripple effect CSS
const style = document.createElement('style');
style.textContent = `
    .option-btn, .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
