<?php
  // ルーティング
  switch($_POST['action']) {
    case 'polling' :
      echo get_message();
      break;
    case 'send' :
      echo send_message();
      break;
  }

  // 新規メッセージを取得
  function get_message() {
    // DBからメッセージを取得

    return json_encode(['message' => '相手からのメッセージ']);
  }

  // メッセージを保存
  function send_message() {
    // DBにメッセージを保存

    return json_encode(['message' => $_POST['message']]);
  }

 ?>
