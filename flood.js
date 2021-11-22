//Edited by: Kief#2583 (Made it look nice)
//Changing this file in anyway is scrictly prohibited, do not attempt.
console.clear()
import { createRequire } from "module";
const require = createRequire(
    import.meta.url);
import ora from 'ora';

const prep = ora(`${chalk.green('Preparing..')}`).start();

//requires
prep.succeed('Finished preparing!')
const modules_readline = ora(`${chalk.green('Loading readline..')}`).start();
import readline from 'readline-sync'
modules_readline.succeed('Loaded readline')
const modules_kahoot = ora(`${chalk.green('Loading kahoot.js-Updated..')}`).start();
import Kahoot from 'kahoot.js-updated'
modules_kahoot.succeed('Loaded Kahoot.js-Updated.')
const loadingother = ora(`${chalk.green('Loading other some what usless modules')}`).start();
const words = require("an-array-of-english-words");
console.log("Required an-array-of-english-words")
import request from 'request'
import random from 'random-name'
import setTitle from 'console-title'
import beep from 'beepbeep'
import chalk from 'chalk'
setTimeout(() => {
    loadingother.text('Finishing up..')
}, 5000);
const settitlee = ora(`${chalk.green('Preparing the terminal..')}`).start();
setTitle('Kahoot Flooder');
setTimeout(() => {
    settitlee.succeed('Terminal is ready.')
}, 3000);
settitlee.stop()
setTimeout(() => {
    loadingother.text('Completed. Please wait 5 seconds..')
}, 5000);
loadingother.stop()



//stuff
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getName() {
    var ran = getRandomInt(1, 5)
    if (ran == 5) {
        request('https://apis.kahoot.it/namerator', function(error, response, body) {
            if (error) { console.log(error); }
            return JSON.parse(body).name
        });
    }
    if (ran == 4) {
        return words[getRandomInt(1, words.length)]
    }
    if (ran == 3) {
        return (random.first())
    }
    if (ran == 2) {
        return (random.first() + random.middle() + random.last())
    }
    if (ran == 1) {
        return (random.first() + random.last())
    }
}

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

process.setMaxListeners(Number.POSITIVE_INFINITY)

//people scammin, they hatin
console.clear()
console.log(chalk.red('If you didnt not get this script from https://github.com/Kief5555/kahoot-flooder or kahootflooder.me, this could be malware.\n'))
console.log(chalk.red('This script should be ran thorugh a console, or shell. Node V12^'))
console.log(chalk.green('________________________________________________________'))
console.log(chalk.blue('This is the development repl.'))
readline.question(chalk.blue('Press enter to continue \n'));

//ok lets go baby
function ads() {
    waitingforuser.stop()
    console.clear()
    console.log(chalk.redBright("____________________________________\n"))
    console.log(chalk.greenBright("Kahoot flooder"))
    console.log(chalk.greenBright("Modified by Kiefer"))
    console.log(chalk.yellow('Under development web: https://www.kahootflooder.me'))
    console.log(chalk.redBright("____________________________________\n"))
}

ads()
    //VARS
var settings_anti = 'N/A'
var settings_pin = 'N/A'
var settings_bots = 'N/A'
var settings_rename = 'N/A'
var settings_botname = 'N/A'
var settings_usernamebypass = 'N/A'
var settings_usercontroled = 'N/A'

//QUESTIONS TO START FLOODING
var antibotmode = readline.question(chalk.yellowBright('Use the new antibot mode? [NOT PERFECT] (y/n)> '));
if (antibotmode == "y") {
    console.log(chalk.redBright("NOTE: 2-factor brute forcing does not work with antibot."))
    var settings_anti = chalk.green('On')
} else {
    settings_anti = chalk.red('OFF')
}
console.clear()

console.log('Settings\n', '> AntiBot ', settings_anti)



var pin = readline.question(chalk.greenBright('Enter the game pin> '));
settings_pin = chalk.green(pin)

console.clear()

console.log('Settings\n', '> AntiBot ', settings_anti + '\n', '> Gamepin ', settings_pin)



var bots = readline.question(chalk.greenBright('Enter number of bots> '));
settings_bots = chalk.green(bots)

console.clear()
console.clear()

console.log('Settings\n', '> AntiBot ', settings_anti + '\n', '> Gamepin ', settings_pin + '\n', '> Bots    ', settings_bots)



if (antibotmode == "y") {
    var ranname = true
    var settings_rename = chalk.green('ON (Due to antibot)')
    er = "n"
} else {
    var ranname = readline.question(chalk.greenBright('Use random name? (y/n)> '));

    if (ranname == "y") {
        var ranname = true
        settings_rename = chalk.green('ON')
        settings_botname = chalk.red('Random name is on')
    } else {
        var ranname = false
        var settings_rename = chalk.redBright('OFF')
        console.clear()
        console.log('Settings\n', '> AntiBot ', settings_anti + '\n', '> Gamepin ', settings_pin + '\n', '> Bots    ', settings_bots + '\n', '> Random name ', settings_rename)
        var botname = readline.question(chalk.greenBright('Enter name> '));
        var settings_botname = chalk.green(botname)
        var botprefix = ""
    }
    console.clear()

    console.log('Settings\n', '> AntiBot ', settings_anti + '\n', '> Gamepin ', settings_pin + '\n', '> Bots    ', settings_bots + '\n', '> Random name ', settings_rename + '\n', '> Bot name ', settings_botname)

    var er = readline.question(chalk.greenBright('Use name bypass? (y/n)> '));
    if (er = "y") {
        settings_usernamebypass = chalk.green('ON')
    }
    if (er = 'n') {
        settings_usernamebypass = chalk.red('OFF')
    }

    console.clear()

}

console.log('Settings\n', '> AntiBot ', settings_anti + '\n', '> Gamepin ', settings_pin + '\n', '> Bots    ', settings_bots + '\n', '> Random name ', settings_rename + '\n', '> Bot name ', settings_botname + "\n", '> Name bypass', settings_usernamebypass)

var usercontrolled = readline.question(chalk.green('Control the bots? (y/n)> '));
if (usercontrolled == "y") {
    var usercontrolled = true
    settings_usercontroled = chalk.green('ON')
    var beepis = readline.question(chalk.green('Beep when the bots need controlling? (y/n)> '));
} else {
    var usercontrolled = false
    settings_usercontroled = chalk.red("OFF")
    beepis = "n"
}

console.clear()
console.log('Settings\n', '> AntiBot ', settings_anti + '\n', '> Gamepin ', settings_pin + '\n', '> Bots    ', settings_bots + '\n', '> Random name ', settings_rename + '\n', '> Bot name ', settings_botname + "\n", '> Name bypass', settings_usernamebypass + '\n', '> User controlled ', settings_usercontroled)

var confirm22 = readline.question(chalk.red('Does this look correct to you? (y/n)> '));
if (confirm22 == "n") {
    console.clear()
    console.log(chalk.red('Notice \n', 'Auto restart is broken. \n If it did not auto end, end the console or shell by pressing ctrl+n'))
    process.exit()
}

console.clear()


//END QUESTIONS YAY
console.clear() //nice and clean uwu

console.log('Settings\n', '> AntiBot ', settings_anti + '\n', '> Gamepin ', settings_pin + '\n', '> Bots    ', settings_bots + '\n', '> Random name ', settings_rename + '\n', '> Bot name ', settings_botname + "\n", '> Name bypass', settings_usernamebypass + '\n', '> User controlled ', settings_usercontroled)

var repeattimes = 0

function sendjoin(name, id) {
    if (ranname) {
        join(getName(), id)
    } else {
        join(name, id)
    }
}

const waitingforquestions = ora(`${chalk.yellow('Waiting for questions...')}`)

function spam() {

    if (repeattimes == bots) {
        spinner.stop()
        spinner.succeed('All join requests have been completed.\n')
        console.log('Settings\n', '> AntiBot ', settings_anti + '\n', '> Gamepin ', settings_pin + '\n', '> Bots    ', settings_bots + '\n', '> Random name ', settings_rename + '\n', '> Bot name ', settings_botname + "\n", '> Name bypass', settings_usernamebypass + '\n', '> User controlled ', settings_usercontroled)
        waitingforquestions.start()

    } else {
        repeattimes++

        if (ranname) { var rt = getRandomInt(90, 200) } else { rt = 15 }

        setTimeout(() => {
            spam()
        }, rt);
        setTimeout(() => {

            if (ranname) {
                sendjoin("This will become a random name!", bots - repeattimes - 1)
            } else {
                sendjoin(botname + (bots - repeattimes - 1), (bots - repeattimes - 1))
            }
        }, rt);
    }
}

process.setMaxListeners(Number.POSITIVE_INFINITY)
var tojoin = bots
var Arandomint = 0
var todo = false

function join(name, idee) {
    while (name == undefined) {
        var name = getName()
    }
    const answering_que = ora(`${chalk.yellow('Answering, please wait..')}`)
    const client = new Kahoot();
    client.setMaxListeners(Number.POSITIVE_INFINITY)
    if (er == "y") {
        client.join(pin, name.replace(/a/g, 'ᗩ').replace(/b/g, 'ᗷ').replace(/c/g, 'ᑕ').replace(/d/g, 'ᗪ').replace(/e/g, 'E').replace(/f/g, 'ᖴ').replace(/g/g, 'G').replace(/h/g, 'ᕼ').replace(/i/g, 'I').replace(/j/g, 'ᒍ').replace(/k/g, 'K').replace(/l/g, 'ᒪ').replace(/m/g, 'ᗰ').replace(/n/g, 'ᑎ').replace(/o/g, 'O').replace(/p/g, 'ᑭ').replace(/q/g, 'ᑫ').replace(/r/g, 'ᖇ').replace(/s/g, 'ᔕ').replace(/t/g, 'T').replace(/u/g, 'ᑌ').replace(/v/g, 'ᐯ').replace(/w/g, 'ᗯ').replace(/x/g, '᙭').replace(/y/g, 'Y').replace(/z/g, 'ᘔ').replace(/A/g, 'ᗩ').replace(/B/g, 'ᗷ').replace(/C/g, 'ᑕ').replace(/D/g, 'ᗪ').replace(/E/g, 'E').replace(/F/g, 'ᖴ').replace(/G/g, 'G').replace(/H/g, 'ᕼ').replace(/I/g, 'I').replace(/J/g, 'ᒍ').replace(/K/g, 'K').replace(/L/g, 'ᒪ').replace(/M/g, 'ᗰ').replace(/N/g, 'ᑎ').replace(/O/g, 'O').replace(/P/g, 'ᑭ').replace(/Q/g, 'ᑫ').replace(/R/g, 'ᖇ').replace(/S/g, 'ᔕ').replace(/T/g, 'T').replace(/U/g, 'ᑌ').replace(/V/g, 'ᐯ').replace(/W/g, 'ᗯ').replace(/X/g, '᙭').replace(/Y/g, 'Y').replace(/Z/g, 'ᘔ'), [random.first(), random.last()]).catch(err => {
            if (err.description == "Duplicate name" & ranname) {
                sendjoin(name, idee)
            } else {
                if (err.description === "Missing header token (pin doesn't exist)") {
                    console.log(chalk.red('Error: Kahoot game pin does not exist.'))
                } else {
                    console.log("Client " + idee + " failed to join with the error '" + err.description + "'")
                    client.leave()
                }
            }
        });
    } else {
        client.join(pin, name, [random.first(), random.last()]).catch(err => {
            if (err.description == "Duplicate name" & ranname) {
                sendjoin(name, idee)
            } else {
                console.log(chalk.red("Client " + idee + " failed to join with the error '" + err.description + "'"))
                client.leave()
            }
        });
    }
    var list = [0, 1, 2, 3]
    todo = false
    client.on("Joined", info => {
        if (info.twoFactorAuth) {
            setInterval(() => {
                if (!todo == false) {
                    client.answerTwoFactorAuth(todo)
                }
                shuffle(list)
                client.answerTwoFactorAuth(list)
            }, 1000);
        }
    });
    client.on("TwoFactorCorrect", function() {
        console.log(name + " Got 2-factor correct!")
        todo = list
    })

    client.on("QuestionReady", question => {
        waitingforquestions.stop()
        if (idee == 1 & beepis == "y") {
            beep()
        }


        console.clear()
        console.log('Settings\n', '> AntiBot ', settings_anti + '\n', '> Gamepin ', settings_pin + '\n', '> Bots    ', settings_bots + '\n', '> Random name ', settings_rename + '\n', '> Bot name ', settings_botname + "\n", '> Name bypass', settings_usernamebypass + '\n', '> User controlled ', settings_usercontroled)
        var everyoneanswerthis = false
        if (question.type == "word_cloud") {
            if (usercontrolled) {
                if (idee == 1) {
                    everyoneanswerthis = true
                    answer = readline.question('type your answer> ');
                    answering_que.start()
                    everyoneanswerthis = answer
                    Arandomint = answer
                    setTimeout(() => { client.answer(answer - 1) }, getRandomInt(1, 20000));

                } else {
                    var waittill = setInterval(() => {
                        if (!everyoneanswerthis == false || !everyoneanswerthis == true) {
                            clearInterval(waittill);
                            setTimeout(() => {
                                client.answer(Arandomint)
                            }, getRandomInt(1, 20000));
                        }
                    }, 100);

                }
            } else {
                console.log(name + " answered with 'kahootflooder.me'")
                setTimeout(() => { client.answer("kahootflooder.me") }, getRandomInt(1, 20000));
            }
        }

        if (question.type == "jumble") {
            console.log("User controlling is not currently available for jumbles. The bot " + name + " responded with a random answer.")
            setTimeout(() => { client.answer(getRandomInt(0, question.quizQuestionAnswers[question.questionIndex] - 1)) }, getRandomInt(1, 20000));
        }

        if (question.type == "quiz") {
            if (usercontrolled) {
                if (question.quizQuestionAnswers[question.questionIndex] == 2) {


                    if (idee == 1) {
                        var everyoneanswerthis = true
                        console.log('\n')
                        answer = readline.question(chalk.green('t for triangle, d for diamond> '));
                        answer = answer.replace('t', 1).replace('d', 2)
                        answering_que.start()
                        var everyoneanswerthis = answer
                        Arandomint = answer
                        setTimeout(() => { client.answer(answer - 1) }, getRandomInt(1, 20000));


                    } else {
                        var waittill = setInterval(() => {
                            if (!everyoneanswerthis == false || !everyoneanswerthis == true) {
                                clearInterval(waittill);
                                setTimeout(() => {
                                    client.answer(Arandomint - 1)
                                }, getRandomInt(1, 20000));
                            }
                        }, 100);

                    }


                }



                if (question.quizQuestionAnswers[question.questionIndex] == 3) {

                    if (idee == 1) {
                        var everyoneanswerthis = true
                        console.log('\n')
                        answer = readline.question(chalk.green('t for triangle, d for diamond, c for circle> '));
                        answer = answer.replace('t', 1).replace('d', 2).replace('c', 3)
                        answering_que.start()
                        everyoneanswerthis = answer
                        Arandomint = answer
                        setTimeout(() => { client.answer(answer - 1) }, getRandomInt(1, 20000));


                    } else {
                        var waittill = setInterval(() => {
                            if (!everyoneanswerthis == false || !everyoneanswerthis == true) {
                                clearInterval(waittill);
                                setTimeout(() => {
                                    client.answer(Arandomint - 1)
                                }, getRandomInt(1, 20000));
                            }
                        }, 100);

                    }
                }



                if (question.quizQuestionAnswers[question.questionIndex] == 4) {

                    if (idee == 1) {
                        everyoneanswerthis = true
                        console.log('\n')
                        var answer = readline.question(chalk.green("t for triangle, d for diamond, c for circle or s for square > "));
                        var answer = answer.replace('t', 1).replace('d', 2).replace('c', 3).replace('s', 4)
                        answering_que.start()

                        everyoneanswerthis = answer
                        Arandomint = answer
                        setTimeout(() => { client.answer(answer - 1) }, getRandomInt(1, 20000));


                    } else {
                        var waittill = setInterval(() => {
                            if (!everyoneanswerthis == false || !everyoneanswerthis == true) {
                                clearInterval(waittill);
                                setTimeout(() => {
                                    client.answer(Arandomint - 1)
                                }, getRandomInt(1, 20000));
                            }
                        }, 100);

                    }


                }
            } else {



                setTimeout(() => {
                    var toanswer = getRandomInt(0, question.quizQuestionAnswers[question.questionIndex] - 1)
                    console.log(chalk.green(name + " answered with a random answer."))
                    client.answer(toanswer)
                }, getRandomInt(1, 20000));

            }
        }


        if (question.type == "survey") {
            if (usercontrolled) {
                if (idee == 1) {
                    everyoneanswerthis = true
                    console.log('\n')
                    answer = readline.question(chalk.green('t for triangle, d for diamond, c for circle or s for square > '));
                    answer = answer.replace('t', 1).replace('d', 2).replace('c', 3).replace('s', 4)
                    answering_que.start()
                    everyoneanswerthis = answer
                    Arandomint = answer
                    setTimeout(() => { client.answer(answer - 1) }, getRandomInt(1, 20000));

                } else {
                    var waittill = setInterval(() => {
                        if (!everyoneanswerthis == false || !everyoneanswerthis == true) {
                            clearInterval(waittill);
                            setTimeout(() => {
                                client.answer(Arandomint - 1)
                            }, getRandomInt(1, 20000));
                        }
                    }, 100);

                }

            } else {
                setTimeout(() => {
                    var toanswer = getRandomInt(0, question.quizQuestionAnswers[question.questionIndex] - 1)
                    console.log(chalk.green(name + " answered with a random answer."))
                    client.answer(toanswer)
                }, getRandomInt(1, 20000));
            }
        }

        if (question.type == "open_ended") {
            if (usercontrolled) {
                if (idee == 1) {
                    everyoneanswerthis = true
                    answer = readline.question('type your answer> ');
                    answering_que.start()
                    everyoneanswerthis = answer
                    Arandomint = answer
                    setTimeout(() => { client.answer(answer - 1) }, getRandomInt(1, 20000));

                } else {
                    var waittill = setInterval(() => {
                        if (!everyoneanswerthis == false || !everyoneanswerthis == true) {
                            clearInterval(waittill);
                            setTimeout(() => {
                                client.answer(Arandomint)
                            }, getRandomInt(1, 20000));
                        }
                    }, 100);

                }
            } else {
                setTimeout(() => { client.answer("kaboom") }, getRandomInt(1, 20000));
            }
        }


    });

    //ON DISCONNECT
    client.on("Disconnect", reason => {
        if (!reason == "Quiz Locked") {
            sendjoin(name, idee)
        }
    })
    var answerede = 0
    client.on("QuestionEnd", data => {
        answering_que.stop()
        if (data.isCorrect) {
            console.log(chalk.green(name + " Got it correct!"))
            waitingforquestions.start()
        } else {
            console.log(chalk.red(name + " Got it wrong."))
            waitingforquestions.start()
        }

    })
    client.on("QuizEnd", data => {
        console.log("The quiz has ended and " + name + " got rank " + data.rank)
    })
    process.on("SIGINT", function() {
        process.exit()
    });
}

//INITIATE OF THE SPAM SPAM
console.clear()
const spinner = ora(`${chalk.yellow('Joining bots, please wait..')}`).start();
spam() //YAY WE DID IT
