window.onload = function() {
  const excuseGenerator = () => {
    let excuse = [];
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
    excuse.push(who[Math.floor(Math.random() * (who.length - 1))]);
    excuse.push(" " + action[Math.floor(Math.random() * (action.length - 1))]);
    excuse.push(" " + what[Math.floor(Math.random() * (what.length - 1))]);
    excuse.push(" " + when[Math.floor(Math.random() * (when.length - 1))]);
    return excuse.join("");
  };
  let texto = excuseGenerator();
  document.getElementById("excuse").innerHTML = texto;
  // console.log(texto);
};
