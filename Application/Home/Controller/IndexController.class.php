<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
<<<<<<< HEAD
		$this->display();
=======
    	$this->display();
    }
    public function login(){
    	if (IS_POST) {
    		$data = I();
    	}else {
    		$this->display();
    	}
>>>>>>> 0754ef273924143c71b55cb9ae0a61b4226a588e
    }
}