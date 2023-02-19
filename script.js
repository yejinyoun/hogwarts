"use strict";

const allStudents = [];

//nick name (if any), nickname (if any)
const Student = {
  firstName: "",
  lastName: "",
  middleName: undefined,
  nickName: undefined,
  gender: "",
  photo: "",
  house: "",
};

loadJSON();

function loadJSON() {
  fetch("https://petlatkea.dk/2021/hogwarts/students.json")
    .then((response) => response.json())
    .then((jsonData) => {
      // when loaded, prepare objects
      cleanData(jsonData);
    });
}

// capitalize, remove spaces

function cleanData(jsonData) {
  jsonData.forEach(removeSpace);
  jsonData.forEach(capitalize);

  console.log(jsonData);

  function removeSpace(jsonObject) {
    jsonObject["fullname"] = jsonObject["fullname"].split(" ").filter(spaceFilter).join(" ").trim();

    function spaceFilter(arrayElement) {
      if (arrayElement !== "") {
        return true;
      } else {
        return false;
      }
    }
  }

  function capitalize(jsonObject) {
    jsonObject["fullname"] = capitalizeString(jsonObject["fullname"]);
    jsonObject["gender"] = capitalizeString(jsonObject["gender"]);
    jsonObject["house"] = capitalizeString(jsonObject["house"]);

    function capitalizeString(string) {
      let capitalized = string[0].toUpperCase();

      for (let i = 1; i < string.length; i++) {
        if (string[i - 1] === " " || string[i - 1] === "-") {
          capitalized += string[i].toUpperCase();
        } else {
          capitalized += string[i].toLowerCase();
        }
      }
      return capitalized;
    }
  }
}

function prepareObjects() {}
