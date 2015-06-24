<?php
/**
 * 系统非常规MD5加密方法
 * @param  string $str 要加密的字符串
 * @return string
 */
function pwd_md5($str)
{
	$key = 'GY_OA';
	return '' === $str ? '' : md5(sha1($str).$key);
}

//过滤敏感词
function badword($content)
{
    if($content)
    {
        $badword = array('操你','日你','约炮','小三','小姐','少妇','情人','迷幻','迷昏','催眠','催情','鸡巴','雞巴','肉棒','打飞机','自慰','裸聊','卖淫','药水','冰毒','仿真','监听','法轮','中共','习近平','李克强');
        $badword1 = array_combine($badword,array_fill(0,count($badword),'*'));
        $str = strtr($content, $badword1);
        return $str;
    }
}

function getUid(){
	return session('uid');
}

//3DES加密
function en3DESEx($str){
  $key = '123456789012345678901234';//已经改变成48位
  $key = pack('H24',$key);
  $td = mcrypt_module_open(MCRYPT_3DES, '', MCRYPT_MODE_CBC, '');
//  $iv = pack('H*',"0102030405060708");  //like c# new byte[]{1,2,3,4,5,6,7,8}
  $iv = pack('H*','0000000000000000');
  mcrypt_generic_init($td, $key, $iv);
  $encrypted_data = mcrypt_generic($td,$str );
  mcrypt_generic_deinit($td);
  mcrypt_module_close($td);
  return bin2hex($encrypted_data); // 转化成16进制字符串
}

function de3DESEx($str){ // 注意 由于加密的时候转化成了16进制，所以解密的字符串也位16进制
	$key = '123456789012345678901234';
	$key = pack('H24',$key);
	$td = mcrypt_module_open(MCRYPT_3DES, '', MCRYPT_MODE_CBC, '');
	//  $iv = pack('H*',"0102030405060708");  //like c# new byte[]{1,2,3,4,5,6,7,8}
	$iv = pack('H*','0000000000000000');
	mcrypt_generic_init($td, $key, $iv);
	$encrypted_data = mdecrypt_generic($td, pack('H*',$str)); // 解密用的PHP自带函数
	mcrypt_generic_deinit($td);
	mcrypt_module_close($td);
	return $encrypted_data;
} 

//加密函数：encrypt
function encrypt($encrypt,$key="") {
	$iv = mcrypt_create_iv ( mcrypt_get_iv_size ( MCRYPT_3DES, MCRYPT_MODE_ECB ), MCRYPT_RAND );
	$passcrypt = mcrypt_encrypt ( MCRYPT_3DES, $key, $encrypt, MCRYPT_MODE_ECB, $iv );
	$encode = base64_encode ( $passcrypt );
	return $encode;
}

//解密函数：decrypt
function decrypt($decrypt,$key="") {
	$decoded = base64_decode ( $decrypt );
	$iv = mcrypt_create_iv ( mcrypt_get_iv_size ( MCRYPT_3DES, MCRYPT_MODE_ECB ), MCRYPT_RAND );
	$decrypted = mcrypt_decrypt ( MCRYPT_3DES, $key, $decoded, MCRYPT_MODE_ECB, $iv );
	return $decrypted;
}

/**
 * 加密函数
 * @param string $txt 需要加密的字符串
 * @param string $key 密钥
 * @return string 返回加密结果
 */
/* function encrypt($txt, $key = '')
{
	if (empty($key) || empty($txt))
	{
		return $txt;
	}
	$chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	$ikey ="-x6g6ZWm2G9g_vr0Bo.pOq3kRIxsZ6rm";
	$nh1 = rand(0,61);
	$nh2 = rand(0,61);
	$nh3 = rand(0,61);
	$ch1 = $chars{$nh1};
	$ch2 = $chars{$nh2};
	$ch3 = $chars{$nh3};
	$nhnum = $nh1 + $nh2 + $nh3;
	$knum = 0;$i = 0;
	while(isset($key{$i})) $knum +=ord($key{$i++});
	$mdKey = substr(md5(md5(md5($key.$ch1).$ch2.$ikey).$ch3),$nhnum%8,$knum%8 + 16);
	$txt = base64_encode($txt);
	$txt = str_replace(array('+','/','='),array('-','_','.'),$txt);
	$tmp = '';
	$j=0;$k = 0;
	$tlen = strlen($txt);
	$klen = strlen($mdKey);
	for ($i=0; $i<$tlen; $i++) {
		$k = $k == $klen ? 0 : $k;
		$j = ($nhnum+strpos($chars,$txt{$i})+ord($mdKey{$k++}))%61;
		$tmp .= $chars{$j};
	}
	$tmplen = strlen($tmp);
	$tmp = substr_replace($tmp,$ch3,$nh2 % ++$tmplen,0);
	$tmp = substr_replace($tmp,$ch2,$nh1 % ++$tmplen,0);
	$tmp = substr_replace($tmp,$ch1,$knum % ++$tmplen,0);
	return $tmp;
}

/**
 * 解密函数
 *
 * @param string $txt 需要解密的字符串
 * @param string $key 密匙
 * @return string 字符串类型的返回结果
 */
/*
function decrypt($txt, $key = '')
{
	if (empty($key) || empty($txt))
	{
		return $txt;
	}

	$chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	$ikey ="-x6g6ZWm2G9g_vr0Bo.pOq3kRIxsZ6rm";
	$knum = 0;$i = 0;
	$tlen = strlen($txt);
	while(isset($key{$i})) $knum +=ord($key{$i++});
	$ch1 = $txt{$knum % $tlen};
	$nh1 = strpos($chars,$ch1);
	$txt = substr_replace($txt,'',$knum % $tlen--,1);
	$ch2 = $txt{$nh1 % $tlen};
	$nh2 = strpos($chars,$ch2);
	$txt = substr_replace($txt,'',$nh1 % $tlen--,1);
	$ch3 = $txt{$nh2 % $tlen};
	$nh3 = strpos($chars,$ch3);
	$txt = substr_replace($txt,'',$nh2 % $tlen--,1);
	$nhnum = $nh1 + $nh2 + $nh3;
	$mdKey = substr(md5(md5(md5($key.$ch1).$ch2.$ikey).$ch3),$nhnum % 8,$knum % 8 + 16);
	$tmp = '';
	$j=0; $k = 0;
	$tlen = strlen($txt);
	$klen = strlen($mdKey);
	for ($i=0; $i<$tlen; $i++) {
		$k = $k == $klen ? 0 : $k;
		$j = strpos($chars,$txt{$i})-$nhnum - ord($mdKey{$k++});
		while ($j<0) $j+=61;
		$tmp .= $chars{$j};
	}
	$tmp = str_replace(array('-','_','.'),array('+','/','='),$tmp);
	return trim(base64_decode($tmp));
} */
function p($arr){
	header("Content-type: text/html; charset=utf-8");
    dump($arr,1,'<pre>',0);
}
