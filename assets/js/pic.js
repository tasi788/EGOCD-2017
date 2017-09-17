function displayImage(){
		//var imagesArray = ['giphy.gif', '1.gif'];
		//var len = imagesArray.length;
    var num = Math.floor(Math.random() * 5);
		var imgStr = '<section id="banner" class="bg-img" data-bg="' + num +'.gif">';
		document.write(imgStr); document.close();
}
