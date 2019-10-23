// modified and recycled code from class activities
// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    console.log(req.body);

    var bestMatch = {
      Username: "",
      photo: "",
      friendDifference: Infinity
    };

    var userData = req.body;
    var userScores = userData.scores;

    var totalDifference;

    for (var i = 0; i < friendsData.length; i++) {
      var currentFriend = friendsData[i];
      totalDifference = 0;
      console.log(currentFriend.Usernames);

      for (var j = 0; j < currentFriend.scores.length; j++) {
        var currentFriendScore = currentFriend.scores[j];
        var currentUserScore = userScores[j];

        totalDifference += Math.abs(
          parseInt(currentUserScore) - parseInt(currentFriendScore)
        );
      }

      if (totalDifference <= bestMatch.friendDifference) {
        bestMatch.Username = currentFriend.Username;
        bestMatch.photo = currentFriend.photo;
        bestMatch.friendDifference = totalDifference;
      }
    }

    friendsData.push(userData);

    res.json(bestMatch);
  });
};

//     console.log(req.body);
//     {
//       friendsData.push(req.body);
//       res.json(true);
//     }
//     var sum = 0;

//     var gamerMatch = {
//       Username: "",
//       photo: "",
//       diff: Infinity
//     };

//     var userProf = req.body;
//     var userScore = friendsData.scores;

//     var totalDif;

//     for (let i = 0; i < friendsData.length; i++) {
//       var compareArr = friendsData[i].scores;

//       for (let c = 0; c < compareArr.length; c++) {
//         sum += compareArr[c];
//       }
//     }

//     // function compare(friendsData, compareArr) {
//     const finalarray = [];

//     friendsData.forEach(e1 =>
//       compareArr.forEach(e2 => {
//         if (e1 === e2) {
//           finalarray.push(e1);
//         }
//       })
//     );
//     console.log(finalarray);
//     // }
//     //   req.body.userdata.scores;
//     // var result = bestMatch;
//     // var bestMatch = compareArr;
//   });

//   // ---------------------------------------------------------------------------
//   // I added this below code so you could clear out the friends while working with the functionality.
//   // Don"t worry about it!

//   app.post("/api/clear", function(req, res) {
//     // Empty out the arrays of data
//     friendsData.length = 0;

//     res.json({ ok: true });
//   });
// };
