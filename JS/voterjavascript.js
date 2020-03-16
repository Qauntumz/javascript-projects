function Voter_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"Please proceed to the next page";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}