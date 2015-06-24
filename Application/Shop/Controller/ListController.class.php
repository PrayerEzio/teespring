<?php
namespace Shop\Controller;
use Think\Controller;
class ListController extends Controller{
	public function index(){
		$gid = intval($_GET['gid']);
		$where = array('gid'=>$gid);
		$info = M('Goods')->where($where)->select();
		$this->display();
	}
}