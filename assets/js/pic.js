var imagesArray = ['giphy.gif', '1banner.jpg'];

function displayImage(){
		var len = imagesArray.length;
    var num = Math.floor(Math.random() * len);
		var imgStr = '<section id="banner" class="bg-img" data-bg="' + imagesArray[num] +'">';
		document.write(imgStr); document.close();
}
