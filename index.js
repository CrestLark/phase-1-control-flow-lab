function scuberGreetingForFeet(number){
  if (number <= 400) {
    return "This one is on me!"
  }
  else if (number < 2500) {
    return "I will gladly take your thirty bucks."
  }
  else {
    return "No can do."
  }
}

function ternaryCheckCity(city){
  return (city === 'NYC'? 'Ok, sounds good.':'No go.')
}


function switchOnCharmFromTip(thank){
    let response;
    switch (thank) {
      case thank = "generous":
        response = "Thank you so much.";
        break;
      case thank = "not as generous":
        response = "Thank you.";
        break;
      default:
        response = "Bye."
    }
    return response;
}
