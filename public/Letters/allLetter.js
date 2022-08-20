const allLetters = [
    {
        section: 7,
        advice: 'GET URSELF OUT THERE WHEN THERE ARE (RELATIVELY) FEWER RESPONSIBILITIES YOU CAN MAKE MONEY BACK BUT WILL YOU EVER GET YOUR TIME BACK ',
        year: 4
    },
    {
        section: 1,
        advice: 'Go to lectures, tutorials, and office hours! Profs will help you.',
        year: 3
    },
    {
        section: 2,
        advice: 'SLC has great food',
        year: 3
    },
    {
        section: 7,
        advice: 'Make a strong effort to talk to lots of new people. At UW, a huge majority of people are friendly, but also generally bad at approaching others first. If you\'re friendly, you show interest in people, and you sincerely care about them, it\'ll be easy to get to know others. I wrote a mathnews orientation issue article titled "Anyone can make friends. Especially you!", which has some more detailed advice.',
        year: 4
    },
    {
        section: 3,
        advice: 'Take notes in class, use LaTeX',
        year: 3
    },
    {
        section: 4,
        advice: 'Go to mock interviews (Tech+, CSC Bootcamp, MathSoc)',
        year: 3
    },
    {
        section: 5,
        advice: 'Sleep early and enough',
        year: 3
    },
    {
        section: 7,
        advice: 'Find good friends to live, study, and play with',
        year: 3
    },
    {
        section: 6,
        advice: 'Talk to your family, they are your number 1 supporters',
        year: 4
    },
    {
        section: 7,
        advice: 'Do not spend 24/7 studying, go out and have fun!',
        year: 4
    },
    {
        section: 1,
        advice: 'Keep a list of questions, confusing concepts, or problems you couldn\'t solve for each course. Add to it throughout the semester and cross things off \
                if you figure them out. This list gives you an easy way to remember what to ask about during office hours or tutoring, and helps you reflect on your understanding \
                of the course content.',
        year: 2
    },
    {
        section: 2,
        advice: 'Make use of the yummy food in SLC while it is still on your meal plan!!',
        year: 2
    },
    {
        section: 7,
        advice: 'If you aren\'t comfortable drinking/using drugs for any reason, it\'s still ok to go to parties! I have lots of friends who stay fully sober who still attend and have fun at parties. Never feel the need to explain why you aren\'t drinking, if someone offers you alcohol it\'s ok to just say "no", and not elaborate on why.',
        year: 4
    },
    {
        section: 3, 
        advice: 'Find a system that works for you, personally brainstorming on a whiteboard was awesome because I felt like I could jot down ideas without wasting paper. \
                If I came up with something worthwhile to keep I would take a picture. Do lots and lots of practice problems, don\'t just read your notes while studying!!',
        year: 2
    },
    {
        section: 5,
        advice: 'Make time for yourself everyday. You may not have time for all of the things you did in high school, but pick a few things that bring you joy and stay consistent with them!',
        year: 2
    },
    {
        section: 6,
        advice: 'Talk to your don, they can point you in the direction of so many resources.',
        year: 2
    },
    {
        section: 7, 
        advice: 'Talk to the person next to you in your lecture, introduce yourself to the people on your floor if you are in residence, eat with new people in the cafeteria. You never know who you might have things in common with!!',
        year: 2
    },
    {
        section: 1,
        advice: 'It\'s not the end of the world if you fail your midterms',
        year: 4
    },
    {
        section: 7,
        advice: 'Get involved with clubs and MathSoc!',
        year: 4
    },
    {
        section: 1,
        advice: 'Always make a detailed plan for your course selection!! I regret not doing this when I was in my first year.' ,  
        year: 3
    },
    {
        section: 2,
        advice: 'My favorite study spots are empty classrooms in MC and any study desks that has a power socket. \
        I usually go and grab a small dinner or box of sushi in International News, there are cheap foods you can get when you don\'t have time to cook a meal. ',
        year: 3
    },
    {
        section: 6,
        advice: 'If your mental health is impacting your ability to do coursework, talk to AccessAbility services and your professors. Most professors care, and will give you reasonable accommodations if you need them - this is harder in first year courses, but I know people who have gotten mental health related extensions/exemptions in courses at all levels. ',
        year: 4
    },
    {
        section: 3,
        advice: 'Do not try to remember everything on your course notes, make sure you know how to do every single practice \
        problem instead. ',
        year: 3
    },
    {
        section: 4,
        advice: 'Do a lot of practice before you actually speak to an interviewer. Don\'t panic, you only need one job. \
        Networking is also needed, especially when you would like to work in some finance-related companies.',
        year: 3
    },
    {
        section: 7,
        advice: 'Don\'t have a relationship with someone much older - it\'s very likely they\'re manipulating you, and that the relationship won\'t be balanced. Upper year friends are great, but don\'t date a fourth year the week after you start. ',
        year: 4
    },
    {
        section: 1,
        advice: 'WD-ing a course is not the end of the world, neither is failing a course. You\'re going to make it through, maybe this means you have to reexamine what went wrong and try again. There is also nothing wrong with taking a reduced course load in order to better understand the content and navigate university life - four courses per term is completely valid. Make sure to look at specializations early on so you can target the prerequisites and find room for those courses.',
        year: 3
    },
    {
        section: 5,
        advice: 'Go to the gym everyday when you feel stressed for studying. Take cold water showers. Trust me, it is really good for you.',
        year: 3
    },
    {
        section: 6,
        advice: 'Try to make friends that really want to hear from you. Call them or parents when you feel uncomfortable.',
        year: 3
    },
    {
        section: 2,
        advice: 'Campus seems daunting, but the moment you get here and walk around, you\'ll get the hang of it! Also DC Bytes\' poke, please try it (this post was not sponsored by DC Bytes). Keep a list of all the food recommendations your friends give you/food places you\'ve been. On days where you can\'t decide what you want to eat, scrolling through that list can help you narrow down choices or remember that one place you *swore* you\'d remember.',
        year: 3
    },
    {
        section: 7,
        advice: 'Be nice to others and talk to people, you can make Waterloo a super fun place by yourself!',
        year: 3
    },
    {
        section: 3,
        advice: 'Try teaching the concept you just learned to yourself. It\'ll help you identify gaps in your knowledge and help strengthen your retention of the material. Your first few classes will be adjusting to how the prof takes notes and how the course is going to be set up. Write down due dates somewhere so they don\'t sneak up on you. Read the syllabus.',
        year: 3
    },
    {
        section: 1,
        advice: 'For MATH135, understanding theorems will get you much farther than memorization. \
                For any MATH course, practice is key. Especially if you aren\'t naturally gifted.',
        year: 2
    },
    {
        section: 2,
        advice: 'Drop in sports made most of my friends. Easier to start things over shared interests outside of school. Always stuff happening at PAC or CIF',
        year: 2
    },
    {
        section: 4,
        advice: 'Don\'t stress, you won\'t get a career-defining job as your first. We all start somewhere, it\'s about how far you will get. Each job is a stepping stone to the next. ',
        year: 2
    },
    {
        section: 6,
        advice: 'Take breaks. I burnt out at one point, but rather than taking a break, I continued pressuring myself to feel like I needed to keep working. This led to me not doing any work at all.',
        year: 2
    },
    {
        section: 7,
        advice: 'People come and go. Don\'t settle for less. But also realize that sometimes, it\'s not always their fault. Also, realize that not everything has to work out. It is completely fine to not want to be friends with someone as long as you maintain respect.',
        year: 2
    },
    {
        section: 3,
        advice: 'Use office hours, but do not solely rely on them for assignments. Assignments are important, but not nearly as important as understanding, which is the only thing that will help you in exams and count in the long run.',
        year: 3
    },
    {
        section: 5,
        advice: 'Eventually you will have to make up for lost sleep and you do not function at your best without a proper nights sleep. Sleep on time and get 8h! ',
        year: 3
    },
    {
        section: 4,
        advice: 'Take advantage of resume roasts and interview practices - lots of clubs host them (CSC, WiCS, MathSoc). Work on your resume before the term starts so you aren\'t overwhelmed during the term while making your resume. Practice interview questions/code questions with your friends.',
        year: 3
    },
    {
        section: 1,
        advice: 'learn to manage your time effectively, you can\'t do everything so you need to prioritize',
        year: 2
    },
    {
        section: 2,
        advice: 'take the time to explore the campus and find the tunnels, they\'re useful in the winter',
        year: 2
    },
    {
        section: 3,
        advice: 'read the pre-lecture notes',
        year: 2
    },
    {
        section: 4,
        advice: 'Apply to more jobs than what you think you need to',
        year: 2
    },
    {
        section: 6,
        advice: 'take breaks, you deserve them',
        year: 2
    },
    {
        section: 7,
        advice: 'be open to meeting new people, everyone\'s nice especially at the beginning because everyone\'s in the same boat',
        year: 2
    },
    {
        section: 1,
        advice: 'Not sure if this is for everyone but don\'t be intimidated by the advanced courses. It may be hard, but truth is every course is kind of hard no matter what you take (at least for me). If you have an inkling to try them, I heard they were incredibly rewarding and to some, their favourite courses in first year.',
        year: 3
    },
    {
        section: 2,
        advice: 'I stand by subway being the most bang for your buck on campus. Also, studying in empty lecture halls is my personal favourite. \
        You can use the map in the portal app to check room availability. But mealplan is a robbery, save your money and go to the uni plaza instead. Much better quality food there. Or, the laurier strip too.',
        year: 3
    },
    {
        section: 3,
        advice: 'Practice makes permanent. Do those practice tests! That\'s what helped me the most.',
        year: 3
    },
    {
        section: 4,
        advice: 'Ask your friends to help edit your resume, and also ask them to help interview prep you! Also referrals are king, ask for them as often as you can!',
        year: 3
    },
    {
        section: 5,
        advice: 'If you gotta wake up early, there\'s no shortcut. Gotta go to sleep earlier. Trust me, a good night\'s sleep is a game changer, and I would prioritize it.',
        year: 3
    },
    {
        section: 6,
        advice: 'I think the biggest thing for mental well-being is having balance. There are times where you need to hunker down and study, but you need to be able to balance that with time to socialize and hang out with your friends, or family, or just be by yourself and relax. Otherwise, you\'ll be burnout prone (like I was). Honestly, if I were to do it all again, I would care a little less about marks and a little more about having fun because 10 years down the line, I\'m not gonna be like \"Damn I\'m really thankful I spent that evening studying instead of going out to that frat party my roommate invited me to\". But again, all about balance. Can\'t party everyday :)',
        year: 3
    },
    {
        section: 6,
        advice: 'Talk to your friends!! Don\'t just hit them out of nowhere with something really heavy, but if they\'re ok hearing about something heavy, you can talk to them. Spread it around many people, don\'t put the whole emotional load of supporting you on just one person (especially not a single romantic partner).',
        year: 4
    },
    {
        section: 7,
        advice: 'If you\'re shy like I was in first year, you really just gotta push yourself to talk to people. You\'d be surprised, most people sitting alone in the caf for example really do enjoy people that reach out and have a conversation with them. \
        It might be rough at first, but the more you do something the better you get at it. And trust me, it\'s really rewarding :D',
        year: 3
    },
    {
        section: 1,
        advice: 'CS135, MATH135, MATH137 are very important, especially 137',
        year: 3
    },
    {
        section: 2,
        advice: 'Tim Horton is not the only restaurant in campus',
        year: 3
    },
    {
        section: 6,
        advice: 'It\'s easy to get into the habit of comparing yourself to others and not feeling like you\'re "good enough to be at Waterloo", or feeling like no matter how hard you work, it\'s just not "enough" compared to anyone else. It\'s also easy to burn yourself out with tremendous workload or never taking a break. ',
        year: 3
    },
    {
        section: 3,
        advice: 'Use pomodoro study method',
        year: 3
    },
    {
        section: 4,
        advice: 'Don\'t write down the thing you going to say word by word, your brain will go blank the instant you finish reading those',
        year: 3
    },
    {
        section: 5,
        advice: 'At least leave the room once a day plz',
        year: 3
    },
    {
        section: 6,
        advice: 'SLEEP EARLY and don\'t read sad news at 2 am',
        year: 3
    },
    {
        section: 7,
        advice: 'Group projects are good places to start, if you don\'t want to \"kill\" your group members for overly procrastinating on submitting the PPT that you guys worked on until 3am the day before',
        year: 3
    },
    {
        section: 1,
        advice: 'Shits gonna be hard, but you\'re harder, remember that',
        year: 3
    },
    {
        section: 6,
        advice: 'I urge you to take a break and set work aside - burnout is not worth it. If you\'re stuck on an assignment, take a step back and come back to it.',
        year: 3
    },
    {
        section: 5,
        advice: 'Eat as much as you want, as long as you walk everyday, your body will know when to stop eating ',
        year: 3
    },
    {
        section: 6,
        advice: 'You can\'t have it all set up before you even start, there\'s only so much you can anticipate, know that hitting lows and highs is a part of life, and there\'s so much more to experience ',
        year: 3
    },
    {
        section: 7,
        advice: 'Make friends, doesn\'t matter how many, but be open to making close friends, and grow together, help each other out, get a different perspective on life',
        year: 3
    },
    {
        section: 1,
        advice: 'Don\'t wait until the due date to start your assignments\
        Do all of your assignments ',
        year: 0
    },
    {
        section: 7,
        advice: 'Get out of your residence room and join clubs/intramurals',
        year: 0
    },
    {
        section: 1,
        advice: 'Collaboration is your most valuable asset. Don\'t just get help, also give it -- explaining something is one of the best ways to reinforce your own understanding. Profs will not judge you for asking for help, because they\'ll see if you don\'t understand it either on your assignments or in office hours. However, if you ask for help, you can improve. Courses are less important than your mental health.',
        year: 4
    },
    {
        section: 2,
        advice: 'The tunnels are fantastic, especially during the winter, but while it\'s warm out, walk outside. Fresh air is important. ',
        year: 4
    },
    {
        section: 3,
        advice: 'In your math courses, focus on understanding the "why" not the "what". You will need to understand why theorems work, not just that they\'re true, because assignment and exam questions will become more involved than just computation/recitation. I wrote an article in the mathnews orientation issue titled \"How to succeed in your math courses\" with some much more detailed advice..',
        year: 4
    },
    {
        section: 4,
        advice: 'Apply for a few jobs you want that you think you can\'t get, because you really never know. Look into both research/academic jobs and industry jobs.',
        year: 4
    },
    {
        section: 5,
        advice: 'Get into a workout routine ASAP, and rely on discipline, not motivation, to keep you going. There is always time to work out, because if you are physically active, you will be more productive in your academics. If you don\'t know how to use equipment in the gym, that\'s ok! First of all, there are employees who you can ask, and you can also ask active friends.\
         Second, you don\'t need to use a vast majority of the machines - it is completely ok to only do stuff with your own weight, or only use weights for one or two exercises.\
         The point of the gym is that it\'s a dedicated space for fitness, not to use every single piece of equipment.',
         year: 4
    },
    {
        section: 6,
        advice: 'Go to therapy. I do not care how mentally healthy you are, every person benefits from occasional therapy, it provides you with tools for emotional regulation, and a place where you can share anything free of judgement. This is good for your mental health in a broad way. ',
        year: 4
    },
    {
        section: 5,
        advice: 'Nobody in the gym is judging you',
        year: 4
    },
    {
        section: 6,
        advice: 'I promise you, you do deserve to be at Waterloo and that you\'re going to make it through. You are enough to be here - everyone has their own strengths and their own pathways. You\'re on the one that\'s right for you. You were accepted into Waterloo for a reason, and it\'s because they see something in you. You are enough for you.',
        year: 3
    },
    {
        section: 5,
        advice: 'Hydrate with water. Don\'t drink pop all day. Make sure you are regularly drinking water.',
        year: 4
    },
    {
        section: 5,
        advice: 'Eat enough fruits/veggies/protein. Even if you\'re just having instant noodles, add some fresh veggies and an egg. Try to avoid excessive unhealthy snacking, nuts/fruits make excellent healthier snacks',
        year: 4
    },
    {
        section: 5,
        advice: 'Sleep a full 8 hours per night.',
        year: 4
    },
    {
        section: 6,
        advice: 'Make sure you get exercise, fresh air, healthy food, enough sleep, time socializing, enough water. Yes, this will eat time out of your academics, but when you\'re healthy, happy, well rested, and active, your "work" time will be so much more productive. Breaks are crucial to efficiency.',
        year: 4
    }


]

export default allLetters;