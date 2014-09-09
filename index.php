<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

        <title>CS:GO binds generator</title>
        <link rel="stylesheet" type="text/css" href="css/index.css" />
        <link rel="stylesheet" type="text/css" href="css/weapons.css" />
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
            <hr></hr>
            <p>Primary weapons : <button id="primwepbut">Show/Hide</button></p>
            <form>
                <div id="rifles">
                    <ul class='img-list'>
                        <li>
                            <input id="galil" type="radio" name='primary'>
                                <label for="galil">
                                    <img  src="img/weapon_galilar.png"/>
                                    <!--<span class="text-content"><span>Galil AR</span></span>-->
                                </label>
                            </input>
                        </li>
                        <li>
                            <input id="ak47" type="radio" name='primary'/>
                            <label for="ak47">
                                <img src="img/weapon_ak47.png"/>
                                <!--<span class="text-content"><span>AK-47</span></span>-->
                            </label>

                        </li>
                        <li>
                            <input id="sg556" type="radio" name='primary'/>
                            <label for="sg556">
                                <img src="img/weapon_sg556.png"/>
                                <!--<span class="text-content"><span>SG 556</span></span>-->
                            </label>

                        </li>
                        <li>
                            <input id="awp" type="radio" name='primary'/>
                            <label for="awp">
                                <img src="img/weapon_awp.png"/>
                                <!--<span class="text-content"><span>AWP</span></span>-->
                            </label>
                        </li>
                        <li>
                            <input id="famas" type="radio" name='primary'/>
                            <label for="famas">
                                <img src="img/weapon_famas.png"/>
                                <!--<span class="text-content"><span>Famas</span></span>-->
                            </label>
                        </li>
                        <li>
                            <input id="m4a1s" type="radio" name='primary'/>
                            <label for="m4a1s">
                                <img src="img/weapon_m4a1_silencer.png"/>
                                <!--<span class="text-content"><span>M4A1-S</span></span>-->
                            </label>
                        </li>
                        <li>
                            <input id="m4a4" type="radio" name='primary'/>
                            <label for="m4a4">
                                <img src="img/weapon_m4a1.png"/>
                                <!--<span class="text-content"><span>M4A4</span></span>-->
                            </label>
                        </li>
                        <li>
                            <input id="aug" type="radio" name='primary'/>
                            <label for="aug">
                                <img src="img/weapon_aug.png"/>
                                <!--<span class="text-content"><span>AUG</span></span>-->
                            </label>
                        </li>
                            <li>
                                <input id="scout" type="radio" name='primary'/>
                                <label for="scout">
                                    <img src="img/weapon_ssg08.png"/>
                                    <!--<span class="text-content"><span>SSG 08</span></span>-->
                                </label>
                            </li>
                            <li>
                                <input id="g3sg1" type="radio" name='primary'/>
                                <label for="g3sg1">
                                    <img src="img/weapon_g3sg1.png"/>
                                    <!--<span class="text-content"><span>G3SG1</span></span>-->
                                </label>
                            </li>
                            <li>
                                <input id="scar20" type="radio" name='primary'/>
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
            <form>
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