/**************************savedlinks.js************************/
"use strict";

(function () {

  var savedLinksArray = [];
  var sortArray = false;

  chrome.runtime.sendMessage({
    message: "send links"
  }, function (response) {
    if (response.message === "links sent") {
      console.log("links loaded in local" + JSON.stringify(response.data));
      savedLinksArray = response.data.reverse();
      loadSavedLinksObject(savedLinksArray);
      loadButtonFunctions();
    } else if (response.message === "links empty") {
      console.log("links empty" + JSON.stringify(response.data));
      savedLinksArray = response.data;
      loadSavedLinksObject(savedLinksArray);
      loadButtonFunctions();
    } else {
      console.log(response.message);
    }
  });

  //compare array by domain name
  function compareDomain(a, b) {
    if (a.domain < b.domain) return -1;
    if (a.domain > b.domain) return 1;
    return 0;
  }

  //compare array by date
  function compareDate(a, b) {
      if (a.date < b.date) return -1;
      if (a.date > b.date) return 1;
      return 0;
  }

  //compare array by title
  function compareTitle(a, b) {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  }

  //provide days ago
  function daysAgo(_linkDate) {
    var today = new Date();
    var date = new Date(_linkDate);
    var diff = Math.floor((today - date) / 86400000);
    if(diff === NaN) {
      return "";
    } else if(diff === 0){
      return "Today";
    } else if (diff === 1) {
      return "Yesterday";
    } else {
      return diff + " days ago";
    }
  }

  //add onclick function to all buttons
  function loadButtonFunctions(){
     $("#sort-date").click(function (event) {
       var _newArray = savedLinksArray.sort(compareDate);
       loadSavedLinksObject(_newArray);
     });
     $("#sort-title").click(function(event) {
      var _newArray;
       if(!sortArray) {
        _newArray = savedLinksArray.sort(compareTitle);
        sortArray = true;
       } else {
        _newArray = savedLinksArray.reverse(compareTitle);
        sortArray = false;
       }
       loadSavedLinksObject(_newArray);
     });

     $("#sort-origin").click(function(event) {
       var _newArray = savedLinksArray.sort(compareDomain);
       loadSavedLinksObject(_newArray);
     });
  }

  var loadSavedLinksObject = function (_linksArray) {
    console.log('Loading saved links');
    console.log(_linksArray);
    var html = '';
    $("#saved-links-list").empty();
    if (_linksArray.length !== 0) {
      html += "<div class='links'>";
      html += "<span class='heading'>Icon</span>";
      html += "<span class='heading'>Domain Name</span>";
      html += "<span class='heading'>Link Title</span>";
      html += "<span class='heading'>Url</span>";
      html += "<span class='heading'>Date</span>";
      html += "<span class='heading'>Delete</span>";
      html += "</div>";
      for (var link of _linksArray) {
        console.log(JSON.stringify(link));
        var date = new Date(link.dateSaved);
        //console.log(date.toString());
        html += "<div class='links'>";
        if (link.url !== "") {
          html += '<img src=' + link.favIconUrl + ' alt=' + link.title + '></img>';
          html += "<span>" + link.domain + "</span>";
          html += '<span>' + link.title + '</span>';
          html += "<a href='" + link.url + "' target='_blank'>" + "Link" + "</a>";
          //html += "<span>" + date.toString() + "</span>";
          html += "<span>" + daysAgo(link.dateSaved) + "</span>";
          html += "<span class='delete'> Delete </span>";
        } else {
          html += '<img src=' + link.favIconUrl + ' alt=' + link.title + '></img>';
          html += "<span>" + link.domain + "</span>";
          html += '<span>' + link.title + '</span>';
          html += "<a href='" + link.url + "'>" + "Link" + "</a>";
          html += "<span>" + daysAgo(link.dateSaved) + "</span>";
          html += "<span class='delete'> Delete </span>";
        }
        html += "</div>";
      }
    } else {
      html += "<p>" + "Reading queue is empty. Save new links!" + "</p>";
    }
    // append all links in the html page
    $("#saved-links-list").append(html);
    
    // add onclick function on delete text
    $(".delete").click(function (event) {
      console.log($(event.target.parentElement).children("a").text());
      var _deleteUrl = $(event.target.parentElement).children("a").attr('href');
      _linksArray = _linksArray.filter(function(obj) {
        return obj.url !== _deleteUrl;
      });
      $(event.target.parentElement).remove();
      chrome.runtime.sendMessage(
        {
          message: "delete link",
          data: _linksArray
        },
        function(response) {
          if (response.message === "Success"){
            console.log(response.message);
          } else {
            console.error(response.message);
          }            
        }
      );
    });
  };
})();

/************************** savedlinks.css ************************/
body {
    display: inline;
}

#reading-queue {
    padding: 0 30px;
}

#reading-queue h1 {
    text-align: center;
    color: #333;
    margin: 5px;
}

#sort-buttons {
    text-align: right;
    position: relative;
    bottom: 33px;
}

#sort-buttons button {
    border: 0;
    border-radius: 2px;
    padding: 8px 20px;
    background-color: #33b5e5;
    cursor: pointer;
    text-transform: uppercase;
    color: #fff;
    margin-left: 5px;
}

#sort-buttons button:hover {
    background: #666;
}

#sort-buttons button:focus {
    outline: 0;
}

.links {
    display: grid;
    grid-template-columns: 3% 20% 47% 10% 10% 10%;
    padding: 10px;
    text-align: left;
    border: 1px solid #eee;
    margin-bottom: 10px;
    background-color: #f1f2f2;
    border-radius: 4px;
}

.links img {
    width: 20px;
    height: 20px;
}

.links span {
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.links span.heading {
    font-weight: bold;
    font-size: 13px;
}

.delete {
    cursor: pointer;
    background-color: transparent;
}

.delete:hover {
    color: red;
    background-color: transparent;
}

.links a {
    text-decoration: none;
    color: #000;
    cursor: pointer;
}

.links a:link {
    color: green;
}

.links a:visited {
    color: purple;
}

.links a:hover {
    color: #33b5e5;
    text-decoration: underline;
}

/************************** savedlinks.html ************************/
<!DOCTYPE html>
<html>
<head>
    <title>Clear Page - Saved Links</title>
    <link rel="stylesheet" href="./../css/savedlinks.css">
</head>
<body>
    <div id="reading-queue">
        <h1>Reading Queue</h1>
        <div id="sort-buttons">
            <button id="sort-date">Sort By Date</button>
            <button id="sort-title">Sort By Title</button>
            <button id="sort-origin">Sort By Origin</button>
        </div>
        <div id="saved-links-list">
    </div>

    <script src="./../third-party/jquery.min.js"></script>
    <script src="./../js/savedlinks.js"></script>
</body>
</html>
