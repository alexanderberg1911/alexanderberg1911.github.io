window.onload = choosePic;

var myPix = new Array("images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg","images/7.jpg","images/8.jpg","images/9.jpg","images/10.jpg","images/11.jpg","images/12.jpg","images/13.jpg","images/14.jpg","images/15.jpg","images/16.jpg","images/17.jpg","images/18.jpg","images/19.jpg","images/20.jpg");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
	 document.getElementById("myPicture").src = myPix[randomNum];}