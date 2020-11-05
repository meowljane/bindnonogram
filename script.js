var addclue = function() {
  var up = [
    $('div.upclue[data-j=1]').text('\n\n\n\n3'),
    $('div.upclue[data-j=2]').text('\n\n4\n3\n2'),
    $('div.upclue[data-j=3]').text('\n\n\n2\n2'),
    $('div.upclue[data-j=4]').text('3\n1\n1\n3\n1'),
    $('div.upclue[data-j=5]').text('1\n1\n1\n2\n1\n9'),
    $('div.upclue[data-j=6]').text('1\n3\n1\n4\n1'),
    $('div.upclue[data-j=7]').text('\n\n\n1\n10'),
    $('div.upclue[data-j=8]').text('\n3\n1\n1\n1'),
    $('div.upclue[data-j=9]').text('1\n1\n1\n1\n2\n1'),
    $('div.upclue[data-j=10]').text('1\n3\n1\n1\n1\n1'),
    $('div.upclue[data-j=11]').text('\n1\n1\n1\n2'),
    $('div.upclue[data-j=12]').text('\n1\n1\n1\n1'),
    $('div.upclue[data-j=13]').text('\n5\n1\n2\n1'),
    $('div.upclue[data-j=14]').text('1\n1\n1\n3\n1'),
    $('div.upclue[data-j=15]').text('\n5\n1\n1\n8'),
   $('div.upclue[data-j=16]').text('\n1\n4\n1\n1'),
   $('div.upclue[data-j=17]').text('\n\n4\n1\n9'),
   $('div.upclue[data-j=18]').text('\n1\n1\n2\n1'),
   $('div.upclue[data-j=19]').text('\n1\n1\n3\n2'),
   $('div.upclue[data-j=20]').text('\n\n1\n1\n3'),
  ];
  var left = [
$('div.leftclue[data-i=1]').text('3 3 3'),
    $('div.leftclue[data-i=2]').text('1 1 1 1 1 4'),
    $('div.leftclue[data-i=3]').text('1 3 3 3 1'),
    $('div.leftclue[data-i=4]').text('1 1 1 1 1 1'),
    $('div.leftclue[data-i=5]').text('1 3 3 1 1 4'),
    $('div.leftclue[data-i=6]').text('0'),
    $('div.leftclue[data-i=7]').text('12'),
    $('div.leftclue[data-i=8]').text('3 2'),
    $('div.leftclue[data-i=9]').text('2 2'),
    $('div.leftclue[data-i=10]').text('1 3 3 1'),
    $('div.leftclue[data-i=11]').text('1 1 2 1 2 1'),
    $('div.leftclue[data-i=12]').text('1 4 4 1'),
    $('div.leftclue[data-i=13]').text('1 4 3 4 1'),
    $('div.leftclue[data-i=14]').text('1 1 1 1 1 1 1 1'),
    $('div.leftclue[data-i=15]').text('1 1 1 5 1 1 1'),
$('div.leftclue[data-i=16]').text('2 1 1 1 1 1'),
$('div.leftclue[data-i=17]').text('1 1 1 1 2'),
$('div.leftclue[data-i=18]').text('2 1 3'),
$('div.leftclue[data-i=19]').text('11'),
$('div.leftclue[data-i=20]').text('1 1 1')
  ];
  for (var i = 0; i < 20; i++) {
    up[i].html(up[i].html().replace(/\n/g, '<br/>'));
  }
};

var tagok = function() {
  var ok = [
    [0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1],
    [0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0 ,0],
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
    [0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
    [0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0],
    [1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
    [1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1],
    [0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  ];
  $.each(ok, function(i, row) {
    $.each(row, function(j, value) {
      var cell = $('div.grid[data-i=' + (i + 1) + '][data-j=' + (j + 1) + ']');
      if (value == 1)
        $(cell).attr('ans', 'ok');
      else
        $(cell).attr('ans', 'notok');
    });
  });
}

var check = function() {
  console.log("check");
  var notok = $('div.grid[ans="notok"]');
  for (i = 0; i < notok.length; i++) {
    var color = $(notok[i]).css('background-color');
    if (color == 'rgb(244, 166, 98)') {
      console.log('notok : ' + i);
      return 'There are some errors!';
    }
  }
  var ok = $('div.grid[ans="ok"]');
  for (i = 0; i < ok.length; i++) {
    var color = $(ok[i]).css('background-color');
    if (color == 'rgb(173, 173, 173)') {
      console.log('ok : ' + i);
      return 'There are some errors!';
    } else if (color == 'rgb(255, 255, 220)') {
      console.log('ok : ' + i);
      return 'Not finish yet!';
    }
  }
  return true;
};

var btn = function() {
  $('#reset').bind('click', function() {
    $('div.grid').each(function() {
      $('.congrats').css('visibility', 'hidden');
      $('#result').text("");
      $(this).css('background-color', 'rgb(255, 255, 220)');
      $(this).text("");
    });
  });
  $('#show').bind('click', function() {
    $('#result').text("");
    $('div.grid').each(function() {
      if ($(this).attr('ans') == 'ok') {
        $(this).css('background-color', 'rgb(244, 166, 98)');
        $(this).text("");
      } else {
        $(this).css('background-color', 'rgb(255, 255, 220)');
        $(this).text("");
      }
    });
  });
  $('#check').bind('click', function() {
    if (check() == true) {
      $('#result').text("");
      $('.congrats').css('visibility', 'visible');
    } else {
      $('#result').text(check());
    }
  });
}

var genGrid = function() {
  for (i = 0; i <= 20; i++) {
    var row = $('<div>').attr('class', 'row');
    for (j = 0; j <= 20; j++) {
      if (i == 0 && j == 0) {} else if (i == 0) {
        var upclue = $('<div>').attr('class', 'upclue');
        $(upclue).attr('data-j', j);
        $(row).append($(upclue));
      } else if (j == 0) {
        var leftclue = $('<div>').attr('class', 'leftclue');
        $(leftclue).attr('data-i', i);
        $(row).append($(leftclue));
      } else {
        var cell = $('<div>').attr('class', 'grid');
        $(cell).attr('data-i', i);
        $(cell).attr('data-j', j);
        $(cell).bind('click', function() {
          var color = $(this).css('background-color');
          if (color == 'rgb(255, 255, 220)') {
            $(this).css('background-color', 'rgb(244, 166, 98)');
          } else if (color == 'rgb(244, 166, 98)') {
            $(this).text('X');
            $(this).css('background-color', 'rgb(173, 173, 173)');
          } else {
            $(this).text('');
            $(this).css('background-color', 'rgb(255, 255, 220)');
          }
          console.log($(this).attr('data-i'));
          console.log($(this).attr('data-j'));
        });
        $(row).append($(cell));
      }
    }
    if (i == 0) {
      $(row).appendTo('div#clue');
    } else {
      $(row).appendTo('div#main');
    }
  }
};

$(document).ready(function() {
  genGrid();
  addclue();
  tagok();
  btn();
});