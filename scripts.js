// script.js
const quotes = [  {
    text: "“Life is too short to waste your time on people who don’t respect, appreciate, and value you.”",
    author: "— Roy T. Bennett",
  },
  {
    text: "“Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.”",
    author: "— Bill Keane",
  },
  {
    text: "“I have not failed. I've just found 10,000 ways that won't work.”",
    author: "— Thomas A. Edison",
  },
  {
    text: "“Respect other people's feelings. It might mean nothing to you, but it could mean everything to them.”",
    author: "— Roy T. Bennett",
  },
  {
    text: "“It is never too late to be what you might have been.”",
    author: "— George Eliot",
  },
  {
    text: "“You can't live your life for other people. You've got to do what's right for you, even if it hurts some people you love.”",
    author: "— Nicholas Sparks",
  },
  {
    text: "“Nothing is impossible, the word itself says 'I'm possible'!”",
    author: "— Audrey Hepburn",
  },
  {
    text: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    author: "— Mahatma Gandhi",
  },
  {
    text: "“The future belongs to those who believe in the beauty of their dreams.”",
    author: "— Eleanor Roosevelt",
  },
  {
    text: "“Be the change that you wish to see in the world.”",
    author: "— Mahatma Gandhi",
  },
  {
    text: "“No amount of regretting can change the past, and no amount of worrying can change the future.”",
    author: "— Roy T. Bennett",
  },
  {
    text: "“Take responsibility of your own happiness, never put it in other people’s hands.”",
    author: "— Roy T. Bennett",
  },
  {
    text: "“Life is about accepting the challenges along the way, choosing to keep moving forward, and savoring the journey.”",
    author: "— Roy T. Bennett",
  },
  {
    text: "“A random act of kindness, no matter how small, can make a tremendous impact on someone else's life.”",
    author: "— Roy T. Bennett",
  },
  {
    text: "“Though nobody can go back and make a new beginning, Anyone can start over and make a new ending.”",
    author: "— Chico Xavier",
  },
  {
    text: "“You see things; you say, 'Why?' But I dream things that never were; and I say 'Why not?”",
    author: "— George Bernard Shaw",
  },
  {
    text: "“Happiness is only real when shared”",
    author: "— Jon Krakauer",
  },
  {
    text: "“You never change your life until you step out of your comfort zone; change begins at the end of your comfort zone.”",
    author: "— Roy T. Bennett",
  },
  {
    text: "“Stop comparing yourself to other people, just choose to be happy and live your own life.”",
    author: "— Roy T. Bennett",
  },
  {
    text: "“Wanting to be someone else is a waste of the person you are.”",
    author: "— Marilyn Monroe",
  },
  {
    text: "“Incredible change happens in your life when you decide to take control of what you do have power over instead of craving control over what you don't.”",
    author: "— Steve Maraboli",
  },
  {
    text: "“Courage isn't having the strength to go on - it is going on when you don't have strength.”",
    author: "— Napoleon Bonaparte",
  },
  {
    text: "“The unhappiest people in this world, are those who care the most about what other people think.”",
    author: "— C. JoyBell C.",
  },
  {
    text: "“I am a part of all that I have met.”",
    author: "— Alfred Tennyson",
  },
  {
    text: "“Earth provides enough to satisfy every man's needs, but not every man's greed.”",
    author: "— Mahatma Gandhi",
  },
  {
    text: "“It’s your life; you don’t need someone’s permission to live the life you want. Be brave to live from your heart.”",
    author: "— Roy T. Bennett",
  },
  {
    text: "“My only advice is to stay aware, listen carefully, and yell for help if you need it.”",
    author: "— Judy Blume",
  },
  {
    text: "“It's hard to beat a person who never gives up.”",
    author: "— George Herman Ruth",
  },
  {
    text: "“Do what you love, love what you do, and with all your heart give yourself to it.”",
    author: "— Roy T. Bennett",
  },
  {
    text: "“Just because you can doesn't mean you should.”",
    author: "— Sherrilyn Kenyon",
  },
  {
    text: "“When someone tells me 'no' it doesn't mean I can't do it, it simply means I can't do it with them.”",
    author: "— Karen E. Quinones Miller",
  },
  {
    text: "“why trying so hard to fit in, when you're born to stand out?”",
    author: "— Oliver James",
  },
  {
    text: "“I must be willing to give up what I am in order to become what I will be.”",
    author: "— Albert Einstein",
  },
  {
    text: "“The only person who can pull me down is myself, and I'm not going to let myself pull me down anymore.”",
    author: "— C. JoyBell C.",
  },
  {
    text: "“You only live once, but if you do it right, once is enough.”",
    author: "— Mae West",
  },
  {
    text: "“It is better to be hated for what you are than to be loved for what you are not.”",
    author: "— Andre Gide",
  },
  {
    text: "“Life is what happens to us while we are making other plans.”",
    author: "— Allen Saunders",
  },
  {
    text: "“Sometimes the questions are complicated and the answers are simple.”",
    author: "— Dr. Seuss",
  },
  {
    text: "“But better to get hurt by the truth than comforted with a lie.”",
    author: "— Khaled Hosseini",
  },
  {
    text: "“If you don't know where you're going, any road'll take you there”",
    author: "— George Harrison",
  },
  {
    text: "“Where there is love there is life.”",
    author: "— Mahatma Gandhi",
  },
  {
    text: "“Life can only be understood backwards; but it must be lived forwards.”",
    author: "— Søren Kierkegaard",
  },
  {
    text: "“A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.”",
    author: "— George Bernard Shaw",
  },
  {
    text: "“Nobody realizes that some people expend tremendous energy merely to be normal.”",
    author: "— Albert Camus",
  },
  {
    text: "“Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.”",
    author: "— Roy T. Bennett",
  },
  {
    text: "“Success is not how high you have climbed, but how you make a positive difference to the world.”",
    author: "— Roy T. Bennett",
  },

    {
      text: "Life isn’t about getting and having, it’s about giving and being.",
      author: "Kevin Kruse"
    },
    {
      text: "Whatever the mind of man can conceive and believe, it can achieve.",
      author: "Napoleon Hill"
    },
    {
      text: "Strive not to be a success, but rather to be of value.",
      author: "Albert Einstein"
    },
    {
      text: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
      author: "Robert Frost"
    },
    {
      text: "I attribute my success to this: I never gave or took any excuse.",
      author: "Florence Nightingale"
    },
    {
      text: "You miss 100% of the shots you don’t take.",
      author: "Wayne Gretzky"
    },
    {
      text: "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
      author: "Michael Jordan"
    },
    {
      text: "The most difficult thing is the decision to act, the rest is merely tenacity.",
      author: "Amelia Earhart"
    },
    {
      text: "Every strike brings me closer to the next home run.",
      author: "Babe Ruth"
    },
    {
      text: "Definiteness of purpose is the starting point of all achievement.",
      author: "W. Clement Stone"
    },
    {
      text: "We must balance conspicuous consumption with conscious capitalism.",
      author: "Kevin Kruse"
    },
    {
      text: "Life is what happens to you while you’re busy making other plans.",
      author: "John Lennon"
    },
    {
      text: "We become what we think about.",
      author: "Earl Nightingale"
    },
    {
      text: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",
      author: "Mark Twain"
    },
    {
      text: "Life is 10% what happens to me and 90% of how I react to it.",
      author: "Charles Swindoll"
    },
    {
      text: "The most common way people give up their power is by thinking they don’t have any.",
      author: "Alice Walker"
    },
    {
      text: "The mind is everything. What you think you become.",
      author: "Buddha"
    },
    {
      text: "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb"
    },
    {
      text: "An unexamined life is not worth living.",
      author: "Socrates"
    },
    {
      text: "Eighty percent of success is showing up.",
      author: "Woody Allen"
    },
    {
      text: "Your time is limited, so don’t waste it living someone else’s life.",
      author: "Steve Jobs"
    },
    {
      text: "Winning isn’t everything, but wanting to win is.",
      author: "Vince Lombardi"
    },
    {
      text: "I am not a product of my circumstances. I am a product of my decisions.",
      author: "Stephen Covey"
    },
    {
      text: "Every child is an artist. The problem is how to remain an artist once he grows up.",
      author: "Pablo Picasso"
    },
    {
      text: "You can never cross the ocean until you have the courage to lose sight of the shore.",
      author: "Christopher Columbus"
    },
    {
      text: "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
      author: "Maya Angelou"
    },
    {
      text: "Either you run the day, or the day runs you.",
      author: "Jim Rohn"
    },
    {
      text: "Whether you think you can or you think you can’t, you’re right.",
      author: "Henry Ford"
    },
    {
      text: "The two most important days in your life are the day you are born and the day you find out why.",
      author: "Mark Twain"
    },
    {
      text: "Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.",
      author: "Johann Wolfgang von Goethe"
    },
    {
      text: "The best revenge is massive success.",
      author: "Frank Sinatra"
    },
    {
      text: "People often say that motivation doesn’t last. Well, neither does bathing. That’s why we recommend it daily.",
      author: "Zig Ziglar"
    },
    {
      text: "Life shrinks or expands in proportion to one’s courage.",
      author: "Anais Nin"
    },
    {
      text: "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.",
      author: "Vincent Van Gogh"
    },
    {
      text: "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
      author: "Aristotle"
    },
    {
      text: "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
      author: "Jesus"
    },
    {
      text: "The only person you are destined to become is the person you decide to be.",
      author: "Ralph Waldo Emerson"
    },
    {
      text: "Go confidently in the direction of your dreams. Live the life you have imagined.",
      author: "Henry David Thoreau"
    },
    {
      text: "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.",
      author: "Erma Bombeck"
    },
    {
      text: "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",
      author: "Booker T. Washington"
    },
    {
      text: "Certain things catch your eye, but pursue only those that capture the heart.",
      author: "Ancient Indian Proverb"
    },
    {
      text: "Believe you can and you’re halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      text: "Everything you’ve ever wanted is on the other side of fear.",
      author: "George Addair"
    },
    {
      text: "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
      author: "Plato"
    },
    {
      text: "Teach thy tongue to say, “I do not know,” and thous shalt progress.",
      author: "Maimonides"
    },
    {
      text: "Start where you are. Use what you have. Do what you can.",
      author: "Arthur Ashe"
    },
    {
      text: "When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down ‘happy’. They told me I didn’t understand the assignment, and I told them they didn’t understand life.",
      author: "John Lennon"
    },
    {
      text: "Fall seven times and stand up eight.",
      author: "Japanese Proverb"
    },
    {
      text: "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",
      author: "Helen Keller"
    },
    {
      text: "Everything has beauty, but not everyone can see.",
      author: "Confucius"
    },
    {
      text: "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
      author: "Anne Frank"
    },
    {
      text: "When I let go of what I am, I become what I might be.",
      author: "Lao Tzu"
    },
    {
      text: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
      author: "Maya Angelou"
    },
    {
      text: "Happiness is not something readymade. It comes from your own actions.",
      author: "Dalai Lama"
    },
    {
      text: "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.",
      author: "Sheryl Sandberg"
    },
    {
      text: "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.",
      author: "Aristotle"
    },
    {
      text: "If the wind will not serve, take to the oars.",
      author: "Latin Proverb"
    },
    {
      text: "You can’t fall if you don’t climb. But there’s no joy in living your whole life on the ground.",
      author: "Unknown"
    },
    {
      text: "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
      author: "Marie Curie"
    },
    {
      text: "Too many of us are not living our dreams because we are living our fears.",
      author: "Les Brown"
    },
    {
      text: "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
      author: "Joshua J. Marine"
    },
    {
      text: "If you want to lift yourself up, lift up someone else.",
      author: "Booker T. Washington"
    },
    {
      text: "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
      author: "Leonardo da Vinci"
    },
    {
      text: "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.",
      author: "Jamie Paolinetti"
    },
    {
      text: "You take your life in your own hands, and what happens? A terrible thing, no one to blame.",
      author: "Erica Jong"
    },
    {
      text: "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
      author: "Bob Dylan"
    },
    {
      text: "I didn’t fail the test. I just found 100 ways to do it wrong.",
      author: "Benjamin Franklin"
    },
    {
      text: "In order to succeed, your desire for success should be greater than your fear of failure.",
      author: "Bill Cosby"
    },
    {
      text: "A person who never made a mistake never tried anything new.",
      author: "Albert Einstein"
    },
    {
      text: "The person who says it cannot be done should not interrupt the person who is doing it.",
      author: "Chinese Proverb"
    },
    {
      text: "There are no traffic jams along the extra mile.",
      author: "Roger Staubach"
    },
    {
      text: "It is never too late to be what you might have been.",
      author: "George Eliot"
    },
    {
      text: "You become what you believe.",
      author: "Oprah Winfrey"
    },
    {
      text: "I would rather die of passion than of boredom.",
      author: "Vincent van Gogh"
    },
    {
      text: "A truly rich man is one whose children run into his arms when his hands are empty.",
      author: "Unknown"
    },
    {
      text: "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.",
      author: "Ann Landers"
    },
    {
      text: "If you want your children to turn out well, spend twice as much time with them, and half as much money.",
      author: "Abigail Van Buren"
    },
    {
      text: "Build your own dreams, or someone else will hire you to build theirs.",
      author: "Farrah Gray"
    },
    {
      text: "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.",
      author: "Jesse Owens"
    },
    {
      text: "Education costs money. But then so does ignorance.",
      author: "Sir Claus Moser"
    },
    {
      text: "I have learned over the years that when one’s mind is made up, this diminishes fear.",
      author: "Rosa Parks"
    },
    {
      text: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius"
    },
    {
      text: "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
      author: "Oprah Winfrey"
    },
    {
      text: "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
      author: "Dalai Lama"
    },
    {
      text: "You can’t use up creativity. The more you use, the more you have.",
      author: "Maya Angelou"
    },
    {
      text: "Dream big and dare to fail.",
      author: "Norman Vaughan"
    },
    {
      text: "Our lives begin to end the day we become silent about things that matter.",
      author: "Martin Luther King Jr."
    },
    {
      text: "Do what you can, where you are, with what you have.",
      author: "Teddy Roosevelt"
    },
    {
      text: "If you do what you’ve always done, you’ll get what you’ve always gotten.",
      author: "Tony Robbins"
    },
    {
      text: "Dreaming, after all, is a form of planning.",
      author: "Gloria Steinem"
    },
    {
      text: "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.",
      author: "Mae Jemison"
    },
    {
      text: "You may be disappointed if you fail, but you are doomed if you don’t try.",
      author: "Beverly Sills"
    },
    {
      text: "Remember no one can make you feel inferior without your consent.",
      author: "Eleanor Roosevelt"
    },
    {
      text: "Life is what we make it, always has been, always will be.",
      author: "Grandma Moses"
    },
    {
      text: "The question isn’t who is going to let me; it’s who is going to stop me.",
      author: "Ayn Rand"
    },
    {
      text: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
      author: "Henry Ford"
    },
    {
      text: "It’s not the years in your life that count. It’s the life in your years.",
      author: "Abraham Lincoln"
    },
    {
      text: "Change your thoughts and you change your world.",
      author: "Norman Vincent Peale"
    },
    {
      text: "Either write something worth reading or do something worth writing.",
      author: "Benjamin Franklin"
    },
    {
      text: "Nothing is impossible, the word itself says, “I’m possible!”",
      author: "Audrey Hepburn"
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "If you can dream it, you can achieve it.",
      author: "Zig Ziglar"
    }
   
];
const getQuoteBtn = document.getElementById("getQuoteBtn");
const quoteText = document.getElementById("quoteText");
let previousIndex = -1;


document.addEventListener('DOMContentLoaded', () => {
    displayNewQuote();
});


getQuoteBtn.addEventListener("click", () => {
    getQuoteBtn.classList.add("loading");
    getQuoteBtn.textContent = "Loading...";
    displayNewQuote();
});

function displayNewQuote() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === previousIndex);
    
    previousIndex = newIndex;
    const selectedQuote = quotes[newIndex];
    
    
    quoteText.classList.remove('fade-in');
    void quoteText.offsetWidth; 

  
    quoteText.innerHTML = `${selectedQuote.text}<br><span class="author">${selectedQuote.author}</span>`;
    
    
    quoteText.classList.add('fade-in');
    
    
    getQuoteBtn.classList.remove("loading");
    getQuoteBtn.textContent = "New Quote";
}