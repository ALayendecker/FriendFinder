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
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the friends)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the friendsData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a friends or not.
    // It will do this by sending out the value "true" have a friends
    // req.body is available since we're using the body parsing middleware

    console.log(req.body);
    {
      friendsData.push(req.body);
      res.json(true);
    }
    var sum = 0;

    for (let i = 0; i < friendsData.length; i++) {
      var compareArr = friendsData[i].scores;

      for (let c = 0; c < compareArr.length; c++) {
        sum += compareArr[c];
      }
    }

    // function compare(friendsData, compareArr) {
    const finalarray = [];

    friendsData.forEach(e1 =>
      compareArr.forEach(e2 => {
        if (e1 === e2) {
          finalarray.push(e1);
        }
      })
    );
    console.log(finalarray);
    // }
    //   req.body.userdata.scores;
    // var result = bestMatch;
    // var bestMatch = compareArr;
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the friends while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    friendsData.length = 0;

    res.json({ ok: true });
  });
};
