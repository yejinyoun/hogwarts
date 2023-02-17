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

function cleanData(jsonData) {
  console.log(jsonData);
}

function prepareObjects() {}
