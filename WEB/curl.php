<?php 
class Scratch extends SQ_Controller {

    function Scratch() {
        parent::SQ_Controller();
    }

    function index() {

        echo "PHP Async Test...
";

        $params = array(
            "one" => "111111",
            "two" => "22222",
            "three" => "33333",
            "four" => "44444",
        );
        $this->curl_post_async("http://127.0.0.1/sq/scratch/longone", $params);
    }

    function longone(){

        $one = $_POST["one"];
        $two = $_POST["two"];
        $three = $_POST["three"];
        $four = $_POST["four"];

        echo uniqid("You won't see this because your PHP script isn't waiting to read any response");

        // put some long delay in here, so you can see how quickly the async requests returns
        sleep(5);

        // and the proof that something actually happens...  write out the HTTP params that were sent over the wire
        $fp = fopen('/PATH/TO/YOUR/DIR/FOR/OUTPUT/data.txt', 'w');
        fwrite($fp, $one);
        fwrite($fp, $two);
        fwrite($fp, $three);
        fwrite($fp, $four);
        fclose($fp);

    }

    function curl_post_async($url, $params = array()){

        $post_params = array();

			foreach ($params as $key => &$val) {
              if (is_array($val)) $val = implode(',', $val);
                $post_params[] = $key.'='.urlencode($val);
            }
            $post_string = implode('&', $post_params);

            $parts=parse_url($url);

            $fp = fsockopen($parts['host'],
                isset($parts['port'])?$parts['port']:80,
                $errno, $errstr, 30);

            $out = "POST ".$parts['path']." HTTP/1.1\r\n";
            $out.= "Host: ".$parts['host']."\r\n";
            $out.= "Content-Type: application/x-www-form-urlencoded\r\n";
            $out.= "Content-Length: ".strlen($post_string)."\r\n";
            $out.= "Connection: Close\r\n\r\n";
            if (isset($post_string)) $out.= $post_string;

            fwrite($fp, $out);
            fclose($fp);
    }
}