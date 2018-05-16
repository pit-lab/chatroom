var ChatController = {
  // 初期化
  init : function () {
    this.addPolling();
  },

  // メッセージを送信
  send : function (message) {
    $.ajax({
      url: '../Server/Controller/ChatController.php',
      type: "POST",
      dataType: "json",
      data: {message : message, action : 'send'},
      success : function(response){
        // alert(JSON.stringify(response));
        var message = $('<div>', { "class" : "col-sm-offset-4 col-sm-8 alert alert-success"});
        message.append($('<p>', { "html" : response['message'] }));
        $('.messages').append(message);
      },
      error: function(error){
        console.log(error);
     }
    });
  },

  // ポーリング処理
  addPolling : function () {
    setInterval(function () {
      $.ajax({
        url: '../Server/Controller/ChatController.php',
        type: "POST",
        dataType: "json",
        data: {action : 'polling'},
        success : function(response){
          var message = $('<div>', { "class" : "col-sm-8 alert alert-warning"});
          message.append($('<p>', { "html" : response['message'] }));
          $('.messages').append(message);

        },
        error: function(error){
          console.log(error);
       }
      });
    }, 5000);
  }

};
