<?php
  header('Content-type: application/json');

  // ルーティング
  switch($_POST['action']) {
    case 'get' :
      echo get_message();
      break;
    case 'send' :
      echo send_message($_POST['message']);
      break;
    default :
      // redirect 404 page
  }

  // 新規メッセージを取得
  function get_message() {
    // DBからメッセージを取得

    return json_encode(['message' => '相手からのメッセージ']);
  }

  // メッセージを保存
  function send_message($msg) {
    // DBにメッセージを保存

    return json_encode(['message' => $msg]);
  }

 ?>
