# SimpleVeticalGallery
vertical scroll modal window for gallery
## Usage
### 1.Include Files
Include CSS in your `<head></head>`.
```
<link rel="stylesheet" href="path/to/VERGAL.min.css">
```  
Include Script and HTML right before `</body>`
```
<div id="VERGALbox">
  <button id="closeVERGAL">CLOSE</button>
</div>
<img id="VERGALloading" src="path/to/nowloading.gif" alt="nowloading">

<script src="path/to/VERGAL.min.js"></script>
```
### 2.Create your-gallery
#### example
```
<h3>gallery1</h3>
<div class="vertical-gallery">
 <figure>
   <img src="path/to/thumb001.jpg" alt="img1" data-tagname="img" data-href="path/to/001.jpg">
   <figcaption>img1</figcaption>
 </figure>
  <figure>
    <img src="path/to/thumb002.jpg" alt="img2" data-tagname="img" data-href="path/to/002.jpg">
    <figcaption>img2</figcaption>
  </figure>
  <figure>
    <img src="path/to/thumb003.jpg" alt="img3" data-tagname="img" data-href="path/to/003.jpg">
    <figcaption>img3</figcaption>
  </figure>
  <figure>
    <img src="path/to/thumb004.jpg" alt="img4" data-tagname="img" data-href="path/to/004.jpg">
    <figcaption>img4</figcaption>
  </figure>
  <figure>
    <img src="path/to/thumb005.jpg" alt="img5" data-tagname="img" data-href="path/to/005.jpg">
    <figcaption>img5</figcaption>
  </figure>
  <figure>
    <img src="path/to/thumb006.jpg" alt="img6" data-tagname="img" data-href="path/to/006.jpg">
    <figcaption>img6</figcaption>
  </figure>
</div>

<h3>gallery2(no caption)</h3>
<div class="vertical-gallery">
  <figure>
    <img src="path/to/thumb007.jpg" alt="img7" data-tagname="img" data-href="path/to/007.jpg">
  </figure>
  <figure>
    <img src="path/to/thumb008.jpg" alt="img8" data-tagname="img" data-href="path/to/008.jpg">
  </figure>
  <figure>
    <img src="path/to/thumb009.jpg" alt="img9" data-tagname="img" data-href="path/to/009.jpg">
  </figure>
</div>
```
`data-tagname` is tagname in modal window. (currently only "img")  
`data-href` is url to big image.  
`<figure>` and `<img>` is essential.  
`<figcaption>` is indifferent.  
### 3.Fire Plugin
Click `<figure>` element.
## DEMO([DEMO PAGE](https://mo2nabe.com/?p=331))
![DEMOimg1](https://user-images.githubusercontent.com/32638970/36427205-ccb1b44c-168f-11e8-93c6-4515f5f0530a.PNG)
![DEMOimg2](https://user-images.githubusercontent.com/32638970/36427204-cc86aa7c-168f-11e8-9366-603abda626b4.PNG)
![DEMOimg3](https://user-images.githubusercontent.com/32638970/36427206-ccdade6c-168f-11e8-849a-af734eff80ac.PNG)
