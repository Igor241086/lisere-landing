/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

$(document).ready(function () {
  var todoList = $('#todo-list');
  var todoInput = $('#todo-input');
  var taskModal = new bootstrap.Modal($('#taskModal'));
  var taskText = $('#task-text');
  $('#add-button').on('click', function () {
    var task = todoInput.val().trim();
    if (task) {
      var listItem = $('<li>').addClass('list-group-item d-flex justify-content-between align-items-center').text(task).append($('<button>').addClass('btn btn-danger btn-sm delete-btn').text('Видалити'));
      todoList.append(listItem);
      todoInput.val('');
    }
  });
  todoList.on('click', '.delete-btn', function (e) {
    $(this).closest('li').remove();
    e.stopPropagation();
  });
  todoList.on('click', '.list-group-item', function () {
    var task = $(this).clone().children().remove().end().text().trim();
    taskText.text(task);
    taskModal.show();
  });
});
/******/ })()
;