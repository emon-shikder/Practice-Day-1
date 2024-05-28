var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

var longestName = "";

for (var i = 0; i < friends.length; i++) {

  if (friends[i].length > longestName.length) {
    longestName = friends[i];
  }
}

console.log("The longest name is: " + longestName);
