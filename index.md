<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>OPEN</title>
    <meta content="" name="description">
    <meta content="" name="author">
    <meta content="" name="keywords">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1" name="viewport">
    <!-- favicon -->
    <link href="favicon.ico" rel="icon" sizes="32x32" type="image/ico">
    <!-- Bootstrap CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <!-- font themify CSS -->
    <link rel="stylesheet" href="css/themify-icons.css">
    <!-- font awesome CSS -->
    <link href="font-awesome/css/font-awesome.css" rel="stylesheet">
    <!-- font awesome CSS -->
    <link href="css/fonts/fonts/style.css" rel="stylesheet">
    <!-- alice CSS -->
    <link href="css/animated-alice.css" rel="stylesheet">
    <link href="css/owl.carousel.css" rel="stylesheet">
    <link href="css/owl.theme.css" rel="stylesheet">
    <link href="css/owl.transitions.css" rel="stylesheet">
    <link href="css/alice-style.css" rel="stylesheet">
    <link href="css/queries-alice.css" media="all" rel="stylesheet" type="text/css">
	
	
	<!--
		<script  src="js/lzma/src/lzma.js"></script>
	-->
	
  </head>
  <body>
  <style>
	.mfp-iframe .punch-viewer-nav-logo{ display:none;}
	canvas{ max-width: 100%;}
	div.pdf-popup{ text-align: center;}
	.navnav{position: absolute; top: 50%; font-size: 80px;cursor:pointer; color:#dddddd;}
	.nnex{right: 10px;}
	.ppre{left: 10px;}
	.flag-container{position: absolute; right: 65px; top: 30px; font-size: 20px;}
	.flag-elemnt{position: relative; top: 0; left: 0; float: right; margin-left: 5px; cursor: pointer;}
	
	#zoom_controls button{width: 30px; height: 30px;}
	
	
	
  </style>
  
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script
    src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0.943/pdf.min.js">
</script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0.943/pdf.min.js"></script>
  
  <script>
  /*
  var my_lzma = new LZMA("js/lzma/src/lzma_worker.js");
  var mode = 1;
  var string = "Hello World"
  //var result = my_lzma.compress(string || byte_array, mode, on_finish(result, error) {}, on_progress(percent) {});
  //console.log(result);
  

  
	var aaa =  my_lzma.compress(string, 1, function (result, error) {
		console.log(result + " " + error);
	});
	*/
  </script>
  
<!--
<div id="test-popup" class="white-popup mfp-hide this-ts">
	<audio src="" class="speech" hidden></audio>
	<div id="canvas_container">
		<canvas id="pdf_renderer"></canvas>
	</div>
	<div id="navigation_controls">
		<button id="go_previous">Previous</button>
		<input id="current_page" value="1" type="number" hidden/>
		<button id="go_next">Next</button>
	</div>
	<div id="zoom_controls">  
		<button id="zoom_in">+</button>
		<button id="zoom_out">-</button>
	</div>
</div>
-->


    <!-- preloader -->
    <div class="bg-preloader"></div>
    <div class="preloader">
      <div class="mainpreloader">
        <img alt="preloaderlogo" src="img/timer.svg"> <span class="logo-preloader">please wait</span>
      </div>
    </div>
    <!-- preloader end -->
    
    <!-- content wraper -->
    <div class="content-wrapper">
    
      <header class="init show">

      <!-- nav -->
      <div class="navbar-default-white navbar-fixed-top sticky">
        <div class="container">
        <div class="row">
          
          <!-- logo --> 
          <a class="navbar-brand white" href="index.html">
          <img class="white" alt="logo" src="img/logo.svg"><span class="brand-text">Oportunities in the Puzle of Ethnic Needs</span>
          <img class="black" alt="logo" src="img/logo.svg">
          </a> 
          <!-- logo end -->
          
          <!-- mainmenu start -->
          <div class="white" >
		  <div class="flag-container">
			<div class="flag-elemnt garamontOPEN-united-kingdom"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span></div>
			<div class="flag-elemnt garamontOPEN-spain"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span></div>
			<div class="flag-elemnt garamontOPEN-poland"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span></div>
			<div class="flag-elemnt garamontOPEN-turkey"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span></div>
			<div class="flag-elemnt garamontOPEN-bulgaria"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span></div>
			</div>
            <nav id="menu-center">
            <!--
              <ul class="hidden-sm hidden-xs">
                <li><a class="actived" href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Works</a></li>
                <li><a href="#price">Package</a></li>
                <li><a href="#news">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>  
             -->
              <ul>  
                <li>
                <!-- menu icon-->
                <div id="nav-icon">
                 <div class="menu-line"></div>
                 <div class="menu-line1"></div>
                 <div class="menu-line2"></div>
                </div>
                <!-- menu icon end -->
                </li>
              </ul>
              
            </nav>
          </div>
          <!-- mainmenu end -->
          
        </div>
        </div>
        <!-- container -->
      </div>
      <!-- nav end -->
      </header>
      
      <!-- main menu block -->
      <section aria-label="menu" class="blackpage-menu" id="menu-block">
    
      <div class="wrap-menu">
      <div class="wrap-menu-child">
        <ul>
          <li class="init-menu">
            <a class="scroll-link" href="#home">Home</a>
          </li>

          <li class="init-menu">
            <a class="scroll-link" href="#about">About</a>
          </li>
          
         <li class="init-menu">
            <a class="scroll-link" href="#projects">Works</a>
          </li>
          
          <li class="init-menu">
            <a class="scroll-link" href="#price">Package</a>
          </li>
          
          <li class="init-menu">
            <a class="scroll-link" href="#news">Blog</a>
          </li>

          <li class="init-menu">
            <a class="scroll-link" href="#contact">Contact</a>
          </li>
          
          <li class="init-menu">
              <div class="social-icons-subnav">
                <a  href="#"><span class="ti-facebook"></span></a> 
                <a  href="#"><span class="ti-twitter"></span></a> 
                <a  href="#"><span class="ti-instagram"></span></a>
                <a  href="#"><span class="ti-dribbble"></span></a> 
                <a  href="#"><span class="ti-linkedin"></span></a> 
              </div>
          </li>
            
        </ul>
      </div>
      </div>
	<!--
      <div class="copy-right">
        © Alice 2017. All Rights Reseverd Design by <span class="color">on3step</span>
      </div>
    -->  
      <div class="close-menu-block"><span class="ti-close"></span></div>
      
     </section>
     <!-- main menu block end -->
      
      <!-- block-menu -->
      <div class="block-main"></div>
      <!-- block-menu end-->
      
      <!-- home -->
      <section aria-label="home" class="mainbg parallax-window" data-parallax="scroll" data-image-src="img/bg-1.jpg" id="home">
        
        <div class="container">
        <div class="row">
        <!-- intro -->
        <div class="overlay-main v-align">
		

          <div class="col-md-12 col-xs-12">
          
            <h1 class="onStep" data-animation="fadeInUp" data-time="300">Interactive Personal Template</h1>
            <div class="onStep" data-animation="fadeInUp" data-time="600" id="slidertext">
              <h3 class="main-text">For <span class="color">Perfect</span> OnePage</h3>
              <h3 class="main-text">Smooth <span class="color">Animation</span></h3>
              <h3 class="main-text"><span class="color">Unlimited</span> Transition</h3>
            </div>

            <div class="btn-home onStep" data-animation="fadeInUp" data-time="800">
              <a class="scroll-link" href="#about">More Detail</a>
            </div>
            
          </div>
        </div>
        <!-- intro end -->
        </div>
        </div>

      </section>
      <!-- home end -->
      
      <!-- section -->
      <section class="whitepage" id="about">
        
        <!-- text -->
		<!--
        <div class="container">
          <div class="row">
          <!--
          <div class="col-md-12">
           <h2 class="devider-sub">Personal Heading</h2>
           <h3 class="devider-heading">Exclusive Features</h3>
          </div>
		  -->
          <!--
          <div class="col-md-4">
           <div class="features onStep" data-animation="fadeInUp" data-time="0">
           <span class="ti-briefcase"></span>
           <h3 class="heading">Web Development</h3>
           <p class="content">High resolution graphics and responsive layout makes theme look gvand crisp on any device and screen size.</p>
           <a href="#">Learn More</a>
           </div>
          </div>
          
          <div class="col-md-4">
           <div class="features onStep" data-animation="fadeInUp" data-time="300">
           <span class="ti-desktop"></span>
           <h3 class="heading">Performance</h3>
           <p class="content">High resolution graphics and responsive layout makes theme look gvand crisp on any device and screen size.</p>
           <a href="#">Learn More</a>
           </div>
          </div>
          
          <div class="col-md-4">
           <div class="features onStep" data-animation="fadeInUp" data-time="600">
           <span class="ti-write"></span>
           <h3 class="heading">Creative Arts</h3>
           <p class="content">High resolution graphics and responsive layout makes theme look gvand crisp on any device and screen size.</p>
           <a href="#">Learn More</a>
           </div>
          </div>
		  -->
          
          <!-- spacer -->
          <!--
		  <div class="col-md-2"></div>
          
          <div class="col-md-4">
           <div class="features onStep" data-animation="fadeInUp" data-time="0">
           <span class="ti-briefcase"></span>
           <h3 class="heading">Web Development</h3>
           <p class="content">High resolution graphics and responsive layout makes theme look gvand crisp on any device and screen size.</p>
           <a href="#">Learn More</a>
           </div>
          </div>
          
          <div class="col-md-4">
           <div class="features onStep" data-animation="fadeInUp" data-time="600">
           <span class="ti-write"></span>
           <h3 class="heading">Creative Arts</h3>
           <p class="content">High resolution graphics and responsive layout makes theme look gvand crisp on any device and screen size.</p>
           <a href="#">Learn More</a>
           </div>
          </div>
        -->
		<!-- spacer -->
		<!--       
          <div class="col-md-2"></div>
		-->
		<!--
            </div>
           </div>
		   -->
      </section>
      <!-- section end -->
      
  <!-- section -->
  <section id="about-us-bg" class="h-bg no-padding">
  <div class="container-fluid">
   <div class="row">

               <div class="col-md-6 p-90 onStep" data-animation="fadeInLeft" data-time="0">
                <div class="sp-padding text-right">
                
                  <h3 class="pers-heading">
                    Specialized Alice Design
                  </h3>  
                  
                  <div class="personal">
                   <h6 class="name">Alice Callista Binti Kai</h6>
                   <span class="title">Superior Art Director</span>
                  </div>  
                  
                  <span class="rounded-img">
                   <img alt="imgpersonal" src="img/img-personal.jpg">
                  </span>   

                  <p class="content-max">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis
eget nibh et lobortis Nulla in odio quis augue ultrices blandit
Phasellus ipsum nibh, porta non sapien non efficitur
                  </p>
                  
              </div>   
             </div>
             
             <div class="image-container col-md-6 onStep" data-animation="fadeInRight" data-time="100"></div>
                        
    </div>
   </div>
   
   

<!-- Like so: -->
<a href="#test-popup" class="open-popup-link">Show inline popup</a>



  </section>
  <!-- section end -->
  
  
      <!-- section projects -->
      <section class="whitepage" id="projects" aria-label="projects">
							<audio src="" class="speech" hidden></audio>
        <div class="container">
          <div class="row">
          
          <div class="col-md-12">
           <h2 class="devider-sub">Personal Heading</h2>
           <h3 class="devider-heading">My Portofolio</h3>
          </div>
          
          <!-- spacer -->
          <div class="space-double"></div>
          
            <!-- filter project -->
              <div class="text-center">
                <ul id="filter-porto">
                  <li class="filt-projects selected" data-project="*">ALL</li>
                  <li class="filt-projects" data-project=".en_">English</li>
                  <li class="filt-projects" data-project=".bg_">Bulgaria</li>
                  <li class="filt-projects" data-project=".pl_">Poland</li>
                  <li class="filt-projects" data-project=".es_">Spain</li>
                  <li class="filt-projects" data-project=".tr_">Turkey</li>
                </ul>
              </div>
            <!-- filter project end -->
            
            <!-- start gallery -->
            <div class="no-gutter onStep" data-animation="fadeInUp" data-time="600" id="projects-wrap">
			
			
			
<!-- -->
			<div class="col-md-4 col-xs-12 item bg_">
				<div id="test-popup" class="projects-grid this-ts">
					<a href="#bk-1">
						<div id="bk-1" class="mfp-hide pdf-popup">
							<div id="canvas_container">
								<canvas id="pdf_renderer"></canvas>
								<div class="navnav nnex" id="go_next"><span class="garamontOPEN-angleRight"></span></div>
								<div class="navnav ppre" id="go_previous"><span class="garamontOPEN-angleLeft"></span></div>
							</div>
							<!--
							<div id="navigation_controls">
								<input id="current_page" value="1" type="number" />
							</div>
							-->
							<div id="zoom_controls">  
								<button class="zoom_in">+</button>
								<button class="zoom_out">-</button>
							</div>
							<!--
							-->
						</div>
						<div class="hovereffect">
							<img alt="imageportofolio" class="img-responsive" src="img/projects/img1.jpg">
							<div class="overlay">
								<div class="icon"><i class="garamontOPEN-uniE96B"></i></div>
								
							</div>
						</div>
					</a>
				</div>
			</div>
			
			
			<div class="col-md-4 col-xs-12 item bg_">
				<div id="test-popup" class="projects-grid this-ts">
					<a href="#bk-2">
						<div id="bk-2" class="mfp-hide pdf-popup">
							<audio src="" class="speech" hidden></audio>
							<div id="canvas_container">
								<canvas id="pdf_renderer"></canvas>
								<div class="navnav nnex" id="go_next"><span class="garamontOPEN-angleRight"></span></div>
								<div class="navnav ppre" id="go_previous"><span class="garamontOPEN-angleLeft"></span></div>
							</div>
							<!--
							<div id="navigation_controls">
								<input id="current_page" value="1" type="number" />
							</div>
							-->
							<div id="zoom_controls">  
								<button id="zoom_in">+</button>
								<button id="zoom_out">-</button>
							</div>
							<!--
							-->
						</div>
						<div class="hovereffect">
							<img alt="imageportofolio" class="img-responsive" src="img/projects/img1.jpg">
							<div class="overlay">
								<div class="icon"><i class="garamontOPEN-uniE96B"></i></div>
								
							</div>
						</div>
					</a>
				</div>
			</div>
			  
			  
<!--		  
			   <div class="col-md-4 col-xs-12 item bg_">
                <div class="projects-grid big-img">
				<a class="iframe-popup" href="http://open.ouskravena.org/document-viewer/sample-files/compressed.tracemonkey-pldi-09.pdf">
					  <div class="hovereffect">
						<img alt="imageportofolio" class="img-responsive" src="img/projects/img1.jpg">
						<div class="overlay">
							<div class="icon"><i class="fa fa-search-plus"></i></div>
						</div>
					  </div>
				</a>
                </div>
              </div>
			  
			  <div class="col-md-4 col-xs-12 item bg_">
                <div class="projects-grid big-img">
				<a class="iframe-popup" href="https://docs.google.com/presentation/d/e/2PACX-1vRKJqL1Mx5FoDzOaqIqU-AKpZc5N2RKgG2ZFVLP-id1sVLjtPIhAsqCTfuD32Fd9UV9tF3BwVZFzuBN/embed?start=false&loop=false&delayms=3000&rm=minimal">
					  <div class="hovereffect">
						<img alt="imageportofolio" class="img-responsive" src="img/projects/img1.jpg">
						<div class="overlay">
							<div class="icon"><i class="fa fa-search-plus"></i></div>
						</div>
					  </div>
				</a>
                </div>
              </div>
              <div class="col-md-4 col-xs-12 item bg_">
                <div class="projects-grid big-img">
                  <a href="img/projects/big/img1.jpg">
                  <div class="hovereffect">
                    <img alt="imageportofolio" class="img-responsive" src="img/projects/img1.jpg">
                    <div class="overlay">
                        <div class="icon"><i class="fa fa-search-plus"></i></div>
                    </div>
                  </div></a>
                </div>
              </div>

              <div class="col-md-4 col-xs-12 item pl_">
                <div class="projects-grid big-img">
                  <a href="img/projects/big/img2.jpg">
                  <div class="hovereffect">
                    <img alt="imageportofolio" class="img-responsive" src="img/projects/img2.jpg">
                    <div class="overlay">
                      <div class="icon"><i class="fa fa-search-plus"></i></div>
                    </div>
                  </div></a>
                </div>
              </div>

              <div class="col-md-4 col-xs-12 item pl_">
                <div class="projects-grid big-img">
                  <a href="img/projects/big/img3.jpg">
                  <div class="hovereffect">
                    <img alt="imageportofolio" class="img-responsive" src="img/projects/img3.jpg">
                    <div class="overlay">
                      <div class="icon"><i class="fa fa-search-plus"></i></div>
                    </div>
                  </div></a>
                </div>
              </div>

              <div class="col-md-4 col-xs-12 item es_">
                <div class="projects-grid big-img">
                  <a href="img/projects/big/img4.jpg">
                  <div class="hovereffect">
                    <img alt="imageportofolio" class="img-responsive" src="img/projects/img4.jpg">
                    <div class="overlay">
                      <div class="icon"><i class="fa fa-search-plus"></i></div>
                    </div>
                  </div></a>
                </div>
              </div>

              <div class="col-md-4 col-xs-12 item pl_">
                <div class="projects-grid big-img">
                  <a href="img/projects/big/img5.jpg">
                  <div class="hovereffect">
                    <img alt="imageportofolio" class="img-responsive" src="img/projects/img5.jpg">
                    <div class="overlay">
                      <div class="icon"><i class="fa fa-search-plus"></i></div>
                    </div>
                  </div></a>
                </div>
              </div>

              <div class="col-md-4 col-xs-12 item tr_">
                <div class="projects-grid big-img">
                  <a href="img/projects/big/img6.jpg">
                  <div class="hovereffect">
                    <img alt="imageportofolio" class="img-responsive" src="img/projects/img6.jpg">
                    <div class="overlay">
                      <div class="icon"><i class="fa fa-search-plus"></i></div>
                    </div>
                  </div></a>
                </div>
              </div>

              <div class="col-md-4 col-xs-12 item tr_">
                <div class="projects-grid big-img">
                  <a href="img/projects/big/img3.jpg">
                  <div class="hovereffect">
                    <img alt="imageportofolio" class="img-responsive" src="img/projects/img3.jpg">
                    <div class="overlay">
                      <div class="icon"><i class="fa fa-search-plus"></i></div>
                    </div>
                  </div></a>
                </div>
              </div>

              <div class="col-md-4 col-xs-12 item tr_">
                <div class="projects-grid big-img">
                  <a href="img/projects/big/img4.jpg">
                  <div class="hovereffect">
                    <img alt="imageportofolio" class="img-responsive" src="img/projects/img4.jpg">
                    <div class="overlay">

                      <div class="icon"><i class="fa fa-search-plus"></i></div>
                    </div>
                  </div></a>
                </div>
              </div>

              <div class="col-md-4 col-xs-12 item es_">
                <div class="projects-grid big-img">
                  <a href="img/projects/big/img5.jpg">
                  <div class="hovereffect">
                    <img alt="imageportofolio" class="img-responsive" src="img/projects/img5.jpg">
                    <div class="overlay">
                      <div class="icon"><i class="fa fa-search-plus"></i></div>
                    </div>
                  </div></a>
                </div>
              </div>
			  
			  
-->
            </div>
            <!-- gallery end -->
          </div>
        </div>
      </section>
      <!-- section projects end -->
      
      
      <!-- testimoni --> 
      <section id="testi" class="paralax-page parallax-window" data-parallax="scroll" data-image-src="img/testi-bg.jpg">
         <div class="container">
            <div class="row">
            
                <div id="owl-testimonial" class="owl-carousel">
                
                            <div class="item col-md-12">
                                <blockquote>
                                <h3>Emma Watson</h3>
                                  <p>Bring Professionalisme to Clients who according your needs The First Priority</p>
                                  <small>Someone famous in <cite title="Source Title" class="color">Source Title</cite></small>
                                </blockquote>
                            </div>
                            
                            <div class="item col-md-12">
                                <blockquote>
                                <h3>Dorine De Vries</h3>
                                  <p>Look famous. Be legendary. Appear complex. Act easy. Radiate presence. Travel light. Seem a dream. Prove real.</p>
                                  <small>Someone famous in <cite title="Source Title" class="color">Source Title</cite></small>
                                </blockquote>
                             </div>  
                             
                            <div class="item col-md-12">
                                <blockquote>
                                <h3>Maikel Straayer</h3>
                                  <p>Look famous. Be legendary. Appear complex. Act easy. Radiate presence. Travel light. Seem a dream. Prove real.</p>
                                  <small>Someone famous in <cite title="Source Title" class="color">Source Title</cite></small>
                                </blockquote>
                            </div>                        
                </div>
               
            </div>
            </div>
       </section>
       <!-- testimoni end --> 
       
	   
	   
	   
       <!-- price -->
       <section id="price">
         <!--
         <div class="container">
          <div class="row">
          
           <div class="col-md-12">
            <h2 class="devider-sub">Personal Heading</h2>
            <h3 class="devider-heading">My Package</h3>
           </div>
           
          <!-- spacer --><!--
          <div class="space-double"></div>
          
          <div class="col-md-3"> 
           <div class="wrap-price onStep" data-animation="fadeInUp" data-time="300">
          
           <div class="price ti-flag"></div>
           <div class="level-class">BASIC PACKET</div>
           <span class="list">Unlimited Entrance</span>
           <span class="list">Documentation</span>
           <span class="list">Full Support</span>
           <span class="list">Full Features</span>
           <span class="list">Video Tuts</span>
           
            <div class="btn-content">
              <a class="link-class" href="#">GET IT NOW</a>
            </div>
          
           </div>
          </div>
          
          <div class="col-md-3"> 
           <div class="wrap-price onStep" data-animation="fadeInUp" data-time="300">
          
           <div class="price ti-flag-alt-2"></div>
           <div class="level-class">BASIC PACKET</div>
           <span class="list">Unlimited Entrance</span>
           <span class="list">Documentation</span>
           <span class="list">Full Support</span>
           <span class="list">Full Features</span>
           <span class="list">Video Tuts</span>
           
            <div class="btn-content">
              <a class="link-class" href="#">GET IT NOW</a>
            </div>
          
           </div>
          </div>
          
          <div class="col-md-3"> 
           <div class="wrap-price onStep" data-animation="fadeInUp" data-time="600">
          
           <div class="price ti-flag"></div>
           <div class="level-class">GOLD<br>PACKET</div>
           <span class="list">Unlimited Entrance</span>
           <span class="list">Documentation</span>
           <span class="list">Full Support</span>
           <span class="list">Full Features</span>
           <span class="list">Video Tuts</span>
           
            <div class="btn-content">
              <a class="link-class" href="#">GET IT NOW</a>
            </div>
          
           </div>
          </div>
          
          <div class="col-md-3"> 
           <div class="wrap-price onStep" data-animation="fadeInUp" data-time="900">
          
           <div class="price ti-flag-alt"></div>
           <div class="level-class">PREMIUM PACKET</div>
            <span class="list">Unlimited Entrance</span>
           <span class="list">Documentation</span>
           <span class="list">Full Support</span>
           <span class="list">Full Features</span>
           <span class="list">Video Tuts</span>
           
            <div class="btn-content">
              <a class="link-class" href="#">GET IT NOW</a>
            </div>
          
           </div>
          </div>
          
          </div>
        </div>
		 -->
		 
		 
        </section>
        <!-- price end -->
        
		
		
		
		
		<section class="whitepage no-padding">
         <div class="container">
            <div class="row">
                       <div class="col-md-12">
            <h2 class="devider-sub">Personal Heading</h2>
            <h3 class="devider-heading">My Package</h3>
           </div>
                    <div id="wrap-count">
						<div class="space-double"></div>
						
						 <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
						  <div class="milestone-counter">
						  <span><i class="ti-receipt"></i></span> 
						  <span class="highlight">1800+</span>
						  <div class="milestone-details">Successful Case</div>
						  </div>
						 </div>
				
						 <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
						  <div class="milestone-counter">
						  <span><i class="ti-id-badge"></i></span> 
						  <span class="highlight">100+</span>
						  <div class="milestone-details">Expert lawyers</div>
						  </div>
						 </div>
				 
						 <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
						  <div class="milestone-counter">
						  <span><i class="ti-face-smile"></i></span> 
						  <span class="highlight">250+</span>
						  <div class="milestone-details">Satisfied Client</div>
						  </div>
						 </div>
				
						 <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 spacedown">
						  <div class="milestone-counter">
						  <span><i class="ti-medall"></i></span> 
						  <span class="highlight">400</span>
						  <div class="milestone-details">Award Winning</div>
						  </div>
						 </div>
						
						<div class="space-double"></div>
                    </div>
            
            </div>
          </div>
       </section>
	   
	   
        
      <!--  news --> 
      <section id="news" class="paralax-page parallax-window" data-parallax="scroll" data-image-src="img/news-bg.jpg">
         <div class="container">
            <div class="row">
            
            <div class="col-md-12">
            <h3 class="devider-heading">Our News</h3>
            </div>
            
          <!-- spacer -->
          <div class="space-double"></div>
            
         <div class="onStep" data-animation="fadeInUp" data-time="300">
         <div class="owl-carousel" id="owl-post">
         
           <div class="item">
            <div class="recent-post" style="background-image:url(img/recent/img1.jpg)">
                  <div class="hovereffect">
                  <a href="blog.html">
                    <div class="overlay ">
                     <div class="content">
                     <div class="heading">New Post Heading
                     <span class="devider-recent"></span>
                     </div>
                     <div class="subheading">19 / 07 / 2017</div>
                     <div class="content-text">Aliquam elit ante, malesuada id, tempor eu, gravida id, odio. </div>
                     <div class="readmore">Read more <i class="fa fa-angle-right"></i></div>
                     </div>
                    </div>
                  </a>  
                  </div>
            </div>
           </div>
           
           <div class="item">
            <div class="recent-post" style="background-image:url(img/recent/img2.jpg)">
                  <div class="hovereffect">
                  <a href="blog-post.html">
                    <div class="overlay ">
                     <div class="content">
                     <div class="heading">New Post Heading
                     <span class="devider-recent"></span>
                     </div>
                     <div class="subheading">19 / 07 / 2017</div>
                     <div class="content-text">Aliquam elit ante, malesuada id, tempor eu, gravida id, odio. </div>
                     <div class="readmore">Read more <i class="fa fa-angle-right"></i></div>
                     </div>
                    </div>
                  </a>  
                  </div>
            </div>
           </div>
           
           <div class="item">
            <div class="recent-post" style="background-image:url(img/recent/img3.jpg)">
                  <div class="hovereffect">
                  <a href="blog.html">
                    <div class="overlay ">
                     <div class="content">
                     <div class="heading">New Post Heading
                     <span class="devider-recent"></span>
                     </div>
                     <div class="subheading">19 / 07 / 2017</div>
                     <div class="content-text">Aliquam elit ante, malesuada id, tempor eu, gravida id, odio. </div>
                     <div class="readmore">Read more <i class="fa fa-angle-right"></i></div>
                     </div>
                    </div>
                  </a>  
                  </div>
            </div>
           </div>
           
           <div class="item">
            <div class="recent-post" style="background-image:url(img/recent/img1.jpg)">
                  <div class="hovereffect">
                  <a href="blog-post.html">
                    <div class="overlay ">
                     <div class="content">
                     <div class="heading">New Post Heading
                     <span class="devider-recent"></span>
                     </div>
                     <div class="subheading">19 / 07 / 2017</div>
                     <div class="content-text">Aliquam elit ante, malesuada id, tempor eu, gravida id, odio. </div>
                     <div class="readmore">Read more <i class="fa fa-angle-right"></i></div>
                     </div>
                    </div>
                  </a>  
                  </div>
            </div>
           </div>
           
           <div class="item">
            <div class="recent-post" style="background-image:url(img/recent/img2.jpg)">
                  <div class="hovereffect">
                  <a href="blog.html">
                    <div class="overlay ">
                     <div class="content">
                     <div class="heading">New Post Heading
                     <span class="devider-recent"></span>
                     </div>
                     <div class="subheading">19 / 07 / 2017</div>
                     <div class="content-text">Aliquam elit ante, malesuada id, tempor eu, gravida id, odio. </div>
                     <div class="readmore">Read more <i class="fa fa-angle-right"></i></div>
                     </div>
                    </div>
                  </a>  
                  </div>
            </div>
           </div>
           
           <div class="item">
            <div class="recent-post" style="background-image:url(img/recent/img3.jpg)">
                  <div class="hovereffect">
                  <a href="blog-post.html">
                    <div class="overlay ">
                     <div class="content">
                     <div class="heading">New Post Heading
                     <span class="devider-recent"></span>
                     </div>
                     <div class="subheading">19 / 07 / 2017</div>
                     <div class="content-text">Aliquam elit ante, malesuada id, tempor eu, gravida id, odio. </div>
                     <div class="readmore">Read more <i class="fa fa-angle-right"></i></div>
                     </div>
                    </div>
                  </a>  
                  </div>
            </div>
           </div>
           
           </div>
           </div>
            
            </div>
            </div>
      </section> 
      <!-- news end -->
      
      <!-- section team -->      
      <section class="whitepage">  
      <div class="container">
          <div class="row">
          
          <div class="col-md-12">
            <h2 class="devider-sub">Personal Heading</h2>
            <h3 class="devider-heading">Our Team</h3>
           </div>
           
          <!-- spacer -->
          <div class="space-double"></div>
         
         <!-- team -->  
         <div class="onStep" data-animation="fadeInUp" data-time="300">
         <div class="owl-carousel" id="owl-team">
         
           <div class="item">
            <div class="team" style="background-image:url(img/team/img1.jpg)">
                  <div class="hovereffect">
                  <a href="#">
                    <div class="overlay ">
                     <div class="content">
                     <div class="heading">John White
                     <span class="devider-recent"></span>
                     </div>
                     <div class="subheading">MANAGING DIRECTOR</div>
                     <div class="readmore">Read more <i class="fa fa-angle-right"></i></div>
                     </div>
                    </div>
                  </a>  
                  </div>
            </div>
           </div>
           
           <div class="item">
            <div class="team" style="background-image:url(img/team/img2.jpg)">
                  <div class="hovereffect">
                  <a href="#">
                    <div class="overlay ">
                     <div class="content">
                     <div class="heading">Rachel Keating
                     <span class="devider-recent"></span>
                     </div>
                     <div class="subheading">MARKETING MANAGER</div>
                     <div class="readmore">Read more <i class="fa fa-angle-right"></i></div>
                     </div>
                    </div>
                  </a>  
                  </div>
            </div>
           </div>
           
           <div class="item">
            <div class="team" style="background-image:url(img/team/img3.jpg)">
                  <div class="hovereffect">
                  <a href="#">
                    <div class="overlay ">
                     <div class="content">
                     <div class="heading">Alice De Vries
                     <span class="devider-recent"></span>
                     </div>
                     <div class="subheading">CEO ALICE GROUP</div>
                     <div class="readmore">Read more <i class="fa fa-angle-right"></i></div>
                     </div>
                    </div>
                  </a>  
                  </div>
            </div>
           </div>
           
           <div class="item">
            <div class="team" style="background-image:url(img/team/img1.jpg)">
                  <div class="hovereffect">
                  <a href="#">
                    <div class="overlay ">
                     <div class="content">
                     <div class="heading">John White
                     <span class="devider-recent"></span>
                     </div>
                     <div class="subheading">MANAGING DIRECTOR</div>
                     <div class="readmore">Read more <i class="fa fa-angle-right"></i></div>
                     </div>
                    </div>
                  </a>  
                  </div>
            </div>
           </div>
           
           <div class="item">
            <div class="team" style="background-image:url(img/team/img2.jpg)">
                  <div class="hovereffect">
                  <a href="#">
                    <div class="overlay ">
                     <div class="content">
                     <div class="heading">Rachel Keating
                     <span class="devider-recent"></span>
                     </div>
                     <div class="subheading">MARKETING MANAGER</div>
                     <div class="readmore">Read more <i class="fa fa-angle-right"></i></div>
                     </div>
                    </div>
                  </a>  
                  </div>
            </div>
           </div>
           
           <div class="item">
            <div class="team" style="background-image:url(img/team/img3.jpg)">
                  <div class="hovereffect">
                  <a href="#">
                    <div class="overlay ">
                     <div class="content">
                     <div class="heading">Alice De Vries
                     <span class="devider-recent"></span>
                     </div>
                     <div class="subheading">CEO ALICE GROUP</div>
                     <div class="readmore">Read more <i class="fa fa-angle-right"></i></div>
                     </div>
                    </div>
                  </a>  
                  </div>
            </div>
           </div>
         
         </div>
         </div>
         <!-- team end --> 

            </div>
           </div>
      </section>
      <!-- section team end -->     
      
      
      <section id="brand" class="brand-page no-top" aria-label="brands" style="background-image:url(img/bg-logo.jpg)">
        <!-- brands-->
          <div class="container">
            <div class="row">
            
              <div class="owl-carousel" id="owl-brand">
              
                <div class="item">
                  <img alt="background" src="img/ourclients/1.png">
                </div>

                <div class="item">
                  <img alt="background" src="img/ourclients/2.png">
                </div>

                <div class="item">
                  <img alt="background" src="img/ourclients/3.png">
                </div>

                <div class="item">
                  <img alt="background" src="img/ourclients/4.png">
                </div>

                <div class="item">
                  <img alt="background" src="img/ourclients/5.png">
                </div>

                <div class="item">
                  <img alt="background" src="img/ourclients/6.png">
                </div>
                
                 <div class="item">
                  <img alt="background" src="img/ourclients/1.png">
                </div>

                <div class="item">
                  <img alt="background" src="img/ourclients/2.png">
                </div>

                <div class="item">
                  <img alt="background" src="img/ourclients/3.png">
                </div>

                <div class="item">
                  <img alt="background" src="img/ourclients/4.png">
                </div>

                <div class="item">
                  <img alt="background" src="img/ourclients/5.png">
                </div>

                <div class="item">
                  <img alt="background" src="img/ourclients/6.png">
                </div>

              </div>
              
            </div>
          </div>
        <!-- brands end-->
       </section>
        
        <!-- subfooter -->
        <section aria-label="map" class="no-top no-bottom">
        <div class="container-fluid">
          <div class="row">
          <div id="map"></div>
        </div>
        </div>
        </section>

      <!-- subfooter -->
      <section aria-label="footer" class="subfooter" id="contact">
        <div class="container">
          <div class="row">
          
          <div class="col-md-12 text-left">
           <h2>Get in <strong>Touch</strong></h2>
          </div>
          
            <div class="col-md-4 col-xs-12">
                <h3>
                  Leave Message
                </h3>

                <form action="#" class="row" id="form-contact" method="post" name="form-contact">
                  <input id="name-contact" name="name" placeholder="your name" type="text"> 
                  <input id="email-contact" name="email" placeholder="your e-mail" type="text"> 
                  <textarea cols="50" id="message-contact" name="message" placeholder="your enquiry" rows="4"></textarea>
                  <div class="success" id="mail_success">Thank you. Your message has been sent</div>
                  <div class="error" id="mail_failed"> Error, email not sent</div>
                  <button class="btn" id="send-contact" type="submit">Sent Now</button>
                </form>
            </div>


            <div class="col-md-4 col-xs-12 col-md-offset-1">
                <h3>
                  United Kingdom
                </h3>

                <address>
                  <span><i class="ti-mobile"></i>+6221 000 888 999</span> 
                  <span><i class="ti-email"></i><a href="mailto:companyname@gmail.com">companyname@gmail.com</a></span> 
                  <span><i class="ti-map-alt"></i>London NW1 6XE, UK 10903</span> 
                </address>
            </div>

            <div class="col-md-3 col-xs-12 pull-right">
                <h3>
                  Photo Stream
                </h3>
                <div id="flickr-photo-stream">
                 <!-- 
				 <script src="http://www.flickr.com/badge_code_v2.gne?count=8&amp;display=random&amp;size=s&amp;layout=x&amp;source=user&amp;user=52617155@N08" type="text/javascript">
				 -->
                  </script> 
                  <div class="clearfix">
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
      <!-- subfooter end -->
      
      <!-- footer -->
      <footer class="white">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <span class="color">&copy; Alice 2017.</span> all reserved design by on3step
            </div>

            <div class="col-md-6">
              <div class="right">
                <div class="social-icons">
                  <a href="#"><span class="ti-facebook"></span></a>
                  <a href="#"><span class="ti-dribbble"></span></a>
                  <a href="#"><span class="ti-twitter"></span></a>
                  <a  href="#"><span class="ti-instagram"></span></a>
                  <a href="#"><span class="ti-linkedin"></span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <!-- footer end -->
      
      <!-- ScrolltoTop -->
      <div id="totop">
        <span class="ti-angle-up"></span>
      </div>
      
    </div>
    <!-- content wraper end -->
    
    <!-- plugin JS -->
    <script src="plugin/pluginsalice.js" type="text/javascript"></script> 
    <script src="plugin/parallax.min.js" type="text/javascript"></script> 
    <script src="plugin/sticky.js" type="text/javascript"></script> 
    <!--  map google -->
    <script src="https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyCQ5KODzqooIP496GPLRaMAsZ4eN8Vro_U"></script>
    <script src="js/map.js" type="text/javascript"></script>  
    <!-- alice JS -->
    <script src="js/alice.js" type="text/javascript"></script>
    <script src="js/nav.js" type="text/javascript"></script>
	
	<script defer src="js/cms.js"></script>
	<script async src="https://apis.google.com/js/api.js" onload="this.onload=function(){};handleClientLoad()" onreadystatechange="if (this.readyState === 'complete') this.onload()"></script>

	
	
	
	
	
	
<script>
	
	
</script>




	
	<script>
	/*
$('.open-popup-link').magnificPopup({
                delegate: 'a',
                type: 'inline',
                closeOnContentClick: false,
                closeBtnInside: false,
                mainClass: 'this-ts',
				midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});	
*/


</script>
  </body>
</html>