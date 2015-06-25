<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function login(){
    	if (IS_POST) {
    		$data = I();
    	}else {
    		$this->display();
    	}
    }
}