<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

        <title>CS:GO binds generator</title>
        <link rel="stylesheet" type="text/css" href="css/index.css" />
        <link rel="stylesheet" type="text/css" href="css/weapons.css" />
    </head>
    <body>
        <h1>CS:GO BINDS GENERATOR</h1>

        <div id="container">
            <textarea id="write" rows="6" cols="60"></textarea>
            <ul id="keyboard">
                <div class="fkey">
                <li class="letter">F1</li>
                <li class="letter">F2</li>
                <li class="letter">F3</li>
                <li class="letter">F4</li>
                <li class="letter">F5</li>
                <li class="letter">F6</li>
                <li class="letter">F7</li>
                <li class="letter">F8</li>
                <li class="letter">F9</li>
                <li class="letter">F10</li>
                <li class="letter">F11</li>
                <li class="letter lastitem">F12</li>
                </div>
                <li class="symbol" style="clear: left">`</li>
                <li class="symbol">1</li>
                <li class="symbol">2</li>
                <li class="symbol">3</li>
                <li class="symbol">4</li>
                <li class="symbol">5</li>
                <li class="symbol">6</li>
                <li class="symbol">7</li>
                <li class="symbol">8</li>
                <li class="symbol">9</li>
                <li class="symbol">0</li>
                <li class="symbol">-</li>
                <li class="symbol">=</li>
                <li class="delete lastitem">BACKSPACE</li>
                <li class="tab">TAB</li>
                <li class="letter">Q</li>
                <li class="letter">W</li>
                <li class="letter">E</li>
                <li class="letter">R</li>
                <li class="letter">T</li>
                <li class="letter">Y</li>
                <li class="letter">U</li>
                <li class="letter">I</li>
                <li class="letter">O</li>
                <li class="letter">P</li>
                <li class="symbol">[</li>
                <li class="symbol">]</li>
                <li class="symbol lastitem">&#92;</li>
                <li class="capslock">CAPSLOCK</li>
                <li class="letter">A</li>
                <li class="letter">S</li>
                <li class="letter">D</li>
                <li class="letter">F</li>
                <li class="letter">G</li>
                <li class="letter">H</li>
                <li class="letter">J</li>
                <li class="letter">K</li>
                <li class="letter">L</li>
                <li class="symbol">;</li>
                <li class="symbol">'</li>
                <li class="return lastitem">ENTER</li>
                <li class="left-shift">SHIFT</li>
                <li class="letter">Z</li>
                <li class="letter">X</li>
                <li class="letter">C</li>
                <li class="letter">V</li>
                <li class="letter">B</li>
                <li class="letter">N</li>
                <li class="letter">M</li>
                <li class="symbol">,</li>
                <li class="symbol">.</li>
                <li class="symbol">/</li>
                <li class="right-shift lastitem">SHIFT</li>
                <li class="ctrl-left">CTRL</li>
                <li class="ctrl">&nbsp;</li>
                <li class="ctrl">ALT</li>
                <li class="space">SPACE</li>
                <li class="ctrl">ALT</li>
                <li class="ctrl">&nbsp;</li>
                <li class="ctrl lastitem">CTRL</li>

            </ul>
        </div>

        <div id="menu">
            <p id="pselect" >Selected key : <text id="selectedkey"></text></p>
            <hr></hr>
            <p>Primary weapons : <button id="primwepbut">Show/Hide</button></p>
            <form id="riflesform">
                <div id="rifles">
                    <ul class='img-list'>
                        <li>
                            <input id="galil" type="radio" name='radiorifles' value="buy galilar; buy famas;">
                                <label for="galil">
                                    <img  src="img/weapon_galilar.png"/>
                                    <span>buy galilar; buy famas;</span>
                                </label>
                            </input>
                        </li>
                        <li>
                            <input id="ak47" type="radio" name='radiorifles' value="buy ak47; buy m4a1;"/>
                            <label for="ak47">
                                <img src="img/weapon_ak47.png"/>
                                <span>buy ak47; buy m4a1;</span>
                            </label>

                        </li>
                        <li>
                            <input id="sg556" type="radio" name='radiorifles' value="buy sg556; buy aug;"/>
                            <label for="sg556">
                                <img src="img/weapon_sg556.png"/>
                                <span>buy sg556; buy aug;</span>
                            </label>

                        </li>
                        <li>
                            <input id="awp" type="radio" name='radiorifles' value="buy awp;"/>
                            <label for="awp">
                                <img src="img/weapon_awp.png"/>
                                <span>buy awp;</span>
                            </label>
                        </li>
                        <li>
                            <input id="famas" type="radio" name='radiorifles' value="buy famas; buy galilar;"/>
                            <label for="famas">
                                <img src="img/weapon_famas.png"/>
                                <span>buy famas; buy galilar;</span>
                            </label>
                        </li>
                        <li>
                            <input id="m4a1s" type="radio" name='radiorifles' value="buy m4a1; buy ak47;"/>
                            <label for="m4a1s">
                                <img src="img/weapon_m4a1_silencer.png"/>
                                <span>buy m4a1; buy ak47;</span>
                            </label>
                        </li>
                        <li>
                            <input id="m4a4" type="radio" name='radiorifles' value="buy m4a1; buy ak47;"/>
                            <label for="m4a4">
                                <img src="img/weapon_m4a1.png"/>
                                <!--<span class="text-content"><span>M4A4</span></span>-->
                            </label>
                        </li>
                        <li>
                            <input id="aug" type="radio" name='radiorifles' value="buy aug; buy sg556;"/>
                            <label for="aug">
                                <img src="img/weapon_aug.png"/>
                                <!--<span class="text-content"><span>AUG</span></span>-->
                            </label>
                        </li>
                        <li>
                            <input id="scout" type="radio" name='radiorifles' value="buy ssg08;"/>
                            <label for="scout">
                                <img src="img/weapon_ssg08.png"/>
                                <!--<span class="text-content"><span>SSG 08</span></span>-->
                            </label>
                        </li>
                        <li>
                            <input id="g3sg1" type="radio" name='radiorifles' value="buy g3sg1; buy scar20;"/>
                            <label for="g3sg1">
                                <img src="img/weapon_g3sg1.png"/>
                                <!--<span class="text-content"><span>G3SG1</span></span>-->
                            </label>
                        </li>
                        <li>
                            <input id="scar20" type="radio" name='radiorifles' value="buy scar20; buy g3sg1;"/>
                            <label for="scar20">
                                <img src="img/weapon_scar20.png"/>
                                <!--<span class="text-content"><span>SCAR-20</span></span>-->
                            </label>

                        </li>
                    </ul>
                </div>
            </form>
            <hr></hr>
            <p>Secondary weapons : <button id="secondwepbut">Show/Hide</button></p>
            <form id="secondaryweaponform">
                <div id="gun">
                    <ul class='img-list'>
                        <li>
                            <input id="p250" type="radio" name='secondary'>
                                <label for="p250">
                                    <img  src="img/weapon_p250.png"/>
                                    <!--<span class="text-content"><span>Galil AR</span></span>-->
                                </label>
                            </input>
                        </li>
                        <li>
                            <input id="cz" type="radio" name='secondary'/>
                            <label for="cz">
                                <img src="img/weapon_cz75a.png"/>
                                <!--<span class="text-content"><span>AK-47</span></span>-->
                            </label>

                        </li>
                        <li>
                            <input id="tec9" type="radio" name='secondary'/>
                            <label for="tec9">
                                <img src="img/weapon_tec9.png"/>
                                <!--<span class="text-content"><span>AWP</span></span>-->
                            </label>
                        </li>
                        <li>
                            <input id="fiveseven" type="radio" name='secondary'/>
                            <label for="fiveseven">
                                <img src="img/weapon_fiveseven.png"/>
                                <!--<span class="text-content"><span>SG 556</span></span>-->
                            </label>

                        </li>
                        <li>
                            <input id="dual" type="radio" name='secondary'/>
                            <label for="dual">
                                <img src="img/weapon_elite.png"/>
                                <!--<span class="text-content"><span>Famas</span></span>-->
                            </label>
                        </li>
                        <li>
                            <input id="deagle" type="radio" name='secondary'/>
                            <label for="deagle">
                                <img src="img/weapon_deagle.png"/>
                                <!--<span class="text-content"><span>M4A1-S</span></span>-->
                            </label>
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