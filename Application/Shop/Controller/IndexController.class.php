<?php
namespace Shop\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
    	$cid = intval($_GET['cid']);
    	$where = array('cid'=>$cid,'status'=>1);
    	$list = M('Goods')->where($where)->select();
    	$this->display();
    }
}