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
}

function prepareObjects() {}
