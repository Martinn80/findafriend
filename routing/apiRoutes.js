const express = require("express");
const router = express.Router();
let friends = require("../data/friends");

router.get("/api/friends", (req, res) => {
    res.send(friends);
});

router.post("/api/friends", (req, res) => {
    let totalDifference = 0;

    let bestMatch = {
        name: "",
        photo: "",
        friendDifference: 1000
    };

    let userData = req.body;
    let userName = userData.name;
    let userScores = userData.scores;

    let b = userScores.map(function (item) {
        return parseInt(item, 10);
    });

    userData = {
        name: req.body.name,
        photo: req.body.photo,
        scores: b
    };

    console.log("Name: " + userName);
    console.log("User Score " + userScores);

    let sum = b.reduce((a, b) => a + b, 0);

    console.log("Total Score " + sum);
    console.log("Best Match For You " + bestMatch.friendDifference);

    for (let i = 0; i < friends.length; i++) {
        console.log(friends[i].name);
        totalDifference = 0;
        console.log("Total Difference " + totalDifference);
        console.log("Best Match For You " + bestMatch.friendDifference);

        let bfriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
        console.log("Total Friend Score " + bfriendScore);
        totalDifference += Math.abs(sum - bfriendScore);
        console.log("============> " + totalDifference);

        if (totalDifference <= bestMatch.friendDifference) {
            bestMatch.name = friends[i].name;
            bestMatch.photo = friends[i].photo;
            bestMatch.friendDifference = totalDifference;
        }
        console.log(totalDifference + " Total Difference");
    }
    console.log(bestMatch);

    friends.push(userData);
    console.log("New user added");
    console.log(userData);
    res.json(bestMatch);
});

module.exports = router;

