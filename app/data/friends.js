//modified and recycled from class activities
// ===============================================================================
// DATA
// Below data will hold all of the waitlist tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsData = [
  {
    Username: "Bob Bobberson",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/a/ae/Bobby_Vinton_1964.JPG",
    scores: ["5", "3", "3", "1", "2", "4", "3", "2", "1", "5"]
  },
  {
    Username: "Ted Tedderson",
    photo: "https://static01.nyt.com/images/2012/07/02/arts/ted/ted-popup.jpg",
    scores: ["2", "1", "1", "4", "2", "4", "4", "2", "4", "2"]
  },
  {
    Username: "Billy Billyson",
    photo:
      "https://images.immediate.co.uk/production/volatile/sites/3/2017/10/wv_publicity_pre_launch_A_still_7.000001-08d7789.jpeg?quality=90&resize=620,413",
    scores: ["1", "2", "2", "1", "2", "4", "5", "2", "3", "3"]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsData;
