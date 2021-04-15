var theirArrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], 13, 14];

var theirData = theirArrays[0][0];
console.log(theirData); // result ---> 1;

var companiesName = [
  ["Apple", "SpaceX", "Amazon"],
  ["Tesla", "Alibaba", "Facebook"],
  ["Elon Musk", "Steve Jobs", "Jack Ma", "Mark Zuckerberg", "Jeff Bozes"],
];

/* Apple Founder */
var apple = companiesName[0][0]; // Apple
var appleFounder = companiesName[2][1]; // Steve Jobs

var appleCompany =
  "The founder of " + apple + " " + " company is " + appleFounder;

console.log(appleCompany); // result ---> The founder of Apple company is Steve Jobs

/* SpaceX and Tesla Founder */
var SpaceX = companiesName[0][1]; // SpaceX
var Tesla = companiesName[1][0]; // Tesla
var SpaceXandTeslaFounder = companiesName[2][0]; //  Elon Musk

var SpaceXandTeslaCompany =
  "The founder of " +
  SpaceX +
  " and " +
  Tesla +
  " " +
  " companies are " +
  SpaceXandTeslaFounder;

console.log(SpaceXandTeslaCompany); // result ---> The founder of SpaceX and Tesla companies are Elon Musk

/* Amazon Founder */
var amazon = companiesName[0][2]; // Amazon
var amazonFounder = companiesName[2][4]; // Jeff Bozes
var amazonCompany =
  "The founder of " + amazon + " " + "company is " + amazonFounder;

console.log(amazonCompany); // result ---> The founder of Amazon company is Jeff Bozes

/* Alibaba Founder */
var alibaba = companiesName[1][1]; // Alibaba
var alibabaFounder = companiesName[2][2]; // Jack Ma
var alibabaCompany =
  "The founder of " + alibaba + " " + " company is " + alibabaFounder;

console.log(alibabaCompany); // result ---> The founder of Alibaba company is Jack Ma

/* Facebook Founder */
var faceBook = companiesName[1][2]; // Facebook
var faceBookFounder = companiesName[2][3]; // Mark Zukerberg
var faceBookCompany =
  "The founder of " + faceBook + " " + " company is " + faceBookFounder;

console.log(faceBookCompany); // result ---> The founder of Facebook company is Mark Zuckerberg
