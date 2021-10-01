window.onload = function() {
  document.querySelector("#Btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = misExcusas();
  });
};

let misExcusas = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoindice = Math.floor(Math.random() * who.length);
  let actionindice = Math.floor(Math.random() * action.length);
  let whatindice = Math.floor(Math.random() * what.length);
  let whenindice = Math.floor(Math.random() * when.length);

  return (
    who[whoindice] +
    " " +
    action[actionindice] +
    " " +
    what[whatindice] +
    " " +
    when[whenindice]
  );
};
