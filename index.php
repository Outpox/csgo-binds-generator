<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
    <head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

	<title>CS:GO binds generator</title>
	<link rel="stylesheet" type="text/css" href="css/style.css" />
    </head>
    <body>
	<h1>CS:GO binds generator</h1>

	<div id="container">
	    <textarea id="write" rows="6" cols="60"></textarea>
	    <ul id="keyboard">
		<li class="symbol"><span class="off">`</span></li>
		<li class="symbol"><span class="off">1</span></li>
		<li class="symbol"><span class="off">2</span></li>
		<li class="symbol"><span class="off">3</span></li>
		<li class="symbol"><span class="off">4</span></li>
		<li class="symbol"><span class="off">5</span></li>
		<li class="symbol"><span class="off">6</span></li>
		<li class="symbol"><span class="off">7</span></li>
		<li class="symbol"><span class="off">8</span></li>
		<li class="symbol"><span class="off">9</span></li>
		<li class="symbol"><span class="off">0</span></li>
		<li class="symbol"><span class="off">-</span></li>
		<li class="symbol"><span class="off">=</span></li>
		<li class="delete lastitem">delete</li>
		<li class="tab">tab</li>
		<li class="letter">q</li>
		<li class="letter">w</li>
		<li class="letter">e</li>
		<li class="letter">r</li>
		<li class="letter">t</li>
		<li class="letter">y</li>
		<li class="letter">u</li>
		<li class="letter">i</li>
		<li class="letter">o</li>
		<li class="letter">p</li>
		<li class="symbol"><span class="off">[</span></li>
		<li class="symbol"><span class="off">]</span></li>
		<li class="symbol lastitem"><span class="off">\</span></li>
		<li class="capslock">caps lock</li>
		<li class="letter">a</li>
		<li class="letter">s</li>
		<li class="letter">d</li>
		<li class="letter">f</li>
		<li class="letter">g</li>
		<li class="letter">h</li>
		<li class="letter">j</li>
		<li class="letter">k</li>
		<li class="letter">l</li>
		<li class="symbol"><span class="off">;</span></li>
		<li class="symbol"><span class="off">'</span></li>
		<li class="return lastitem">return</li>
		<li class="left-shift">shift</li>
		<li class="letter">z</li>
		<li class="letter">x</li>
		<li class="letter">c</li>
		<li class="letter">v</li>
		<li class="letter">b</li>
		<li class="letter">n</li>
		<li class="letter">m</li>
		<li class="symbol"><span class="off">,</span></li>
		<li class="symbol"><span class="off">.</span></li>
		<li class="symbol"><span class="off">/</span></li>
		<li class="right-shift lastitem">shift</li>
		<li class="ctrl-left">ctrl</li>
		<li class="ctrl">&nbsp;</li>
		<li class="ctrl">alt</li>
		<li class="space">space</li>
		<li class="ctrl">alt</li>
		<li class="ctrl">&nbsp;</li>
		<li class="ctrl lastitem">ctrl</li>

	    </ul>
	</div>

	<div id="menu">
	    <p id="pselect" >Selected key : <text id="selectedkey"></text></p>
	    <p>Primary weapons :</p>
	    <form>
		<div id="rifles">
		    <ul class='img-list'>
			<li>
			    <input id="galil" type="radio" name='primary'>
				<label for="galil">
				    <img  src="img/weapon_galilar.png"/>
				    <span class="text-content"><span>Galil AR</span></span>
				</label>
			    </input>
			</li>
			<li>
			    <input type="radio" name='primary'/>
			    <img src="img/weapon_ak47.png"/>
			    <span class="text-content"><span>AK-47</span></span>
			</li>
			<li>
			    <input type="radio" name='primary'/>
			    <img src="img/weapon_sg556.png"/>
			    <span class="text-content"><span>SG 556</span></span>
			</li>
			<li>
			    <input type="radio" name='primary'/>
			    <img src="img/weapon_awp.png"/>
			    <span class="text-content"><span>AWP</span></span>
			</li>
			<li>
			    <input type="radio" name='primary'/>
			    <img src="img/weapon_famas.png"/>
			    <span class="text-content"><span>Famas</span></span>
			</li>
			<li>
			    <input type="radio" name='primary'/>
			    <img src="img/weapon_m4a1_silencer.png"/>
			    <span class="text-content"><span>M4A1-S</span></span>
			</li>
			<li>
			    <input type="radio" name='primary'/>
			    <img src="img/weapon_m4a1.png"/>
			    <span class="text-content"><span>M4A4</span></span>
			</li>

			<li>
			    <input type="radio" name='primary'/>
			    <img src="img/weapon_aug.png"/>
			    <span class="text-content"><span>AUG</span></span>
			</li>
			<li>
			    <input type="radio" name='primary'/>
			    <img src="img/weapon_ssg08.png"/>
			    <span class="text-content"><span>SSG 08</span></span>
			</li>

			<li>
			    <input type="radio" name='primary'/>
			    <img src="img/weapon_g3sg1.png"/>
			    <span class="text-content"><span>G3SG1</span></span>
			</li>
			<li>
			    <input type="radio" name='primary'/>
			    <img src="img/weapon_scar20.png"/>
			    <span class="text-content"><span>SCAR-20</span></span>
			</li>
		    </ul>
		</div>
	    </form>
	</div>
	<script type="text/javascript" src="js/jquery-1.11.1.min.js"></script>
	<script type="text/javascript" src="js/keyboard.js"></script>
	<script type="text/javascript" src="js/weapons.js"></script>
    </body>
</html>