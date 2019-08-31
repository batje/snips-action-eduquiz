import { i18n, message } from "snips-toolkit";

/*
Make up a question and wait for the Answer
*/
export default async function(msg, flow) {
  var number1 = randomIntFromInterval(1, 10);
  var number2 = randomIntFromInterval(1, 11 - number1);

  var question = i18n.translate("mathquiz.question", {
    number1: number1,
    number2: number2
  });
  var answer = number1 + number2;
  console.log(msg);
  flow.continue("batje:MathAnswer", (msg, flow) => {
    var givenAnswer = -1;
    if (msg.slots.length > 0) {
      console.log(msg.slots[0].value);
      var givenAnswer = msg.slots[0].value.value;
    } else {
      console.log("No slots");
      flow.end();
      return i18n.translate("mathquiz.dontunderstand", {});
    }
    if (answer == givenAnswer) {
      flow.end();
      return i18n.translate("mathquiz.right", {});
    } else {
      flow.end();
      return i18n.translate("mathquiz.wrong", {
        answer: answer
      });
    }
  });
  return question;
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
