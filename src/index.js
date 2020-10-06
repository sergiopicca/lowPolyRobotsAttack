import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import AuthorsInfo from './AuthorsInfo';
import Chapter from './chapters/Chapter';
import './index.scss';
import * as serviceWorker from './serviceWorker';


const lvl1 = {title: 'Intro', desc: '<h2 id="idea">Idea</h2> <p><em>Low poly robots attack!</em> is the name of the final project of the Interactive Graphics course and is the first release of a 3D cartoon-style-game set in a sci-fi/futuristic world surrounded by big buildings in the desert. It is a first person shooter game where the user impersonates a character that must eliminate all the robots that want to kill him. The application is a survival game, so there are three different levels of difficulty <em>easy</em>, <em>medium</em> and <em>hard</em> that affects the life of the robots and their velocity. The goal is to survive as much as possible to the robot waves, each one is composed of seven little robots and one robot boss, which has the additional capability to shoot against the main character of the game and achieves the highest score.<br /> We took inspiration from the old style games of the 80s, those from the Commodore and from the arcades, where young people could play. Moreover, particular attention was paid to the design of the game, trying to bring back the player in the past.</p> <h2 id="workflow">Project workflow</h2> <p>The workflow on the entire project is available on the GitHub. The development of the project is based on massive use of GitHub’s facilities that allows creating a perfect organization for the developers. In particular, we used the <code>Project</code> tab on the repository in order to create a project, where insert the issues automated using the commits. In this way for any watcher or in general for those who are interested in our work is possible to see the various phases of the project and how the issues were solved, it also gives an easy way to keep track of the problems, bugs and things to implement.<br /> For this first version, the project contains more than two hundred commits and thirty-two solved issues, by the authors Andrea Napoletani and Sergio Picca.</p> <h2 id="technologies">Technologies</h2> <p>The project is entirely based on three.js threejs, a cross-browser JavaScript library and application programming interface (API) used to create and display animated 3D computer graphics in a web browser. Three.js allows the creation of graphical processing unit (GPU)-accelerated 3D animations using the JavaScript language as part of a website without relying on proprietary browser plugins. This is possible due to the advent of WebGL (on which it is based). In the application we also used another library called Tween.js tween for achieving smooth animations and for particular cases, in which it was extremely useful.</p>'}
const lvl2 = {title: 'Game environment and models', desc: '<p>In this chapter we are going to explain the scenario in which the game takes place, in particular which are the various pieces used to build up the scene, including the imported models and the hand-made models, obtained by combining different geometries.</p><h2 id="landscape">Landscape</h2><p>An important part of our game is represented by the scenario where the game lives and all the actions take place. In order to create that, it has been used a technique called <strong>Skybox</strong> skybox and different imported 3D models. What we really care was avoiding to put some walls around just to delimit the area, creating a simple square where the hero can move, instead we really want to create something that resembles a real world, something with areas and spaces to explore.</p><h3 id="skybox">Skybox</h3><p>The skybox is a box that surrounds the entire world of the game. It is used to create a background that is not statics but can represent a 360 scene around the camera. It is done applying different textures to the 6 box faces and place the camera inside the box. All the game will take place inside the cube.</p><h3 id="floor">Floor</h3><p>A floor has been created to contain the battle arena using a simple plane inside the box of the skybox. To obtain a realistic visual impact of the floor, a sand texture has been applied on all the plane. It is repeated many time both vertically and horizontally to obtain a better result.<br /> Each model of the game will move on this floor (bounded by the value of the <em>y</em> axis) to simulate the gravity force undergone by the various models that are in the scene.</p><h3 id="models-and-map-limits">Models and map limits</h3><p>The game arena is composed of more 3D models (each one composed of an <em>.obj</em> file and a <em>.mtl</em> file for the materials and textures application). They are loaded through the <code>OBJLoader</code> objloader of three.js. The load of these models is handled by the <code>LoadingManager</code> loadingmanager tool of three.js that allows to load all the models at the start of the game and return to the user the percentage of the loading through a progress bar. In this way, once the game is loaded, all the models of the landscape are ready and the user can immediately start playing the game.</p><h5 id="cities-models">Cities models</h5><p>The scenario is composed of two main models: <em>Scifi Floating City</em> floating and <em>Center city SciFi</em> centercity. These two models are positioned in a way that is used to bound the walkable area of the game.</p><h5 id="barriers">Barriers</h5><p>A model of barrier barriers is used to set the map limits that the character can’t overtake. This model is loaded more time with a custom location in order to create an entire line of barriers.</p><h5 id="map-limits">Map limits</h5><p>The map limits are implemented exploiting the <code>Raycaster</code> raycaster class of three.js, indeed it is used to create rays that recognize collisions of the main character among objects detecting the intersection of the rays starting from the centre of hero’s bounding box to the vertices.<br /> This method is applied in different aspects of our project, one of this is to limit the area in which the character can walk. A better description of this method is given in the section. The logic is the following, when the character walks towards a wall or barrier, the rays of the boxes intersect and trigger a collision that will stop the movement of the character in the direction of the collision. Unfortunately, this solution has some drawbacks due to the low precision of the collision detection in some particular cases. Nevertheless, we can obtain great quality in limiting the area of interest.</p><h2 id="lights">Lights</h2><p>In the scene are present two kinds of light sources: one <em>hemispherical</em> and one <em>directional</em>. The <em>hemisphere</em> light source allows illuminating the scene with color fading from the sky color (light blue) to the ground color (grey).<br />The <em>directional</em> light creates parallel rays of lights from a point in the world; it is used to simulate the light generated by the sun and its position is fixed according to the position of the sun represented by the texture images on the skybox.</p><h3 id="shadows">Shadows</h3><p>A system of shadows has been developed for all the models present in the scene. The shadow effect strictly depends on the chosen materials, in particular the <code>MeshToonMaterial</code> used resembles the <em>cartoon shading model</em> used in the first homework. This choice has been taken according to the retro style of our game. Furthermore, we enabled the <code>shadowMap</code> for the <code>renderer</code>, then we set to true the <code>castShadow</code> property of the directional light and for each object in the game we set to true the <code>castShadow</code> and <code>receiveShadow</code> properties.</p><h2 id="sounds">Sounds</h2><p>Regarding the sounds, we decided to provide many different effects to the game. In particular, we decided to apply sounds effects whenever the main character shoots by using its blaster and when he is walking, while a background music is provided both in the menu and in the page where the real game starts. A class <code>SoundManager</code> has been created and it loads all the sound by using the <code>loadSounds</code> function, where the <code>AudioLoader</code> of three.js is called, then once that every sound effect has been initialized the <code>play/stop</code> methods are called in the main game page depending on user actions. The sounds effects were taken by Freesound freesound website, they were adjusted for our application, for instance the blaster sound was cropped in order to be adapted to bullets’ speed.<br /> As soundtrack for the game, two different songs were selected, for the menu “Mammagamma” played by Alan Parson Project and for the game “Love is Anywhere” (FM Attack Remix) by Flashworx, the choice was due to the they resemble the 80s game-style of the project. The way the two songs are applied to the application is different, indeed the former was included in an <code>audio</code> element, while the latter was reproduced using the <code>Audio</code> class by three.js (like the sound effects).</p><h2 id="game.models">Game models</h2><p>The hierarchical models built by us used in this game were three: the main character <code>Hero</code>, the <code>KillingRobot</code> and the <code>RobotBoss</code>. Before describing each model into details, each of them has its own Javascript file, with functions creating the various parts (<code>createHead</code>, <code>createWheel</code>, ...). Every file has its own <em>sizes</em> object, where the measures of the various components of the model are specified.</p><p><code>Hero</code>. This object is the main character of the game, he has to shoot to the robots and survive as long as possible. The model is composed by thirty-nine meshes, the complexity is given by the fact that the hero has a weapon, having many different components and details. Even if the style of the application is very <em>cartoon oriented</em> and it is a first-person-shooter, we can distinguish different parts on the character, such as the fingers, target window on the gun and the final target element, used to shoot in a more precise way. Here the image showing the various parts of <code>Hero</code> and the gun model, that was too big to fit in one image. The <em>details</em> present on the gun refer to some <code>BoxGeometries</code> applied on its body to achieve some shining and glowing effect in order to give a sci-fi feel.</p><p><code>RobotBoss</code>. The robot boss is obtained by the <code>KillingRobot</code>, we just make it bigger, indeed it is five times bigger than a standard robot, and allow it to shoot to the main character. There is a little change in the colors, since the boss is bigger and has two ears and red antennas. A little change was on the head, in fact the radial segment parameter of the <code>CylinderMesh</code> was set to five. Furthermore, the boss has also some additional details on the torso, they are just box geometries with a shining color, allowing to distinguish the boss from the other robots.</p>'}
const lvl3 = {title: 'Our choices', desc: '<h2 id="animations">Animations</h2><p>In this section we are going to explain how the various animations were created, in particular they were all <strong>hand-made</strong>. In order to achieve a better effect, we decided to use in some particular case the <code>Tween.js</code> library tween, in particular for the robots movement. In both robot and hero cases, a dedicated Javascript file was created, providing the functions triggering the animations, in order to get a modular and scalable solution.</p><h3 id="a-common-color-change">A common color change</h3><p>This could not be strictly considered a real animation, but influenced the look and feel of every character in the game. We were looking for a way to communicate to the user how he or she is damaged by the robots or damages them, <strong>the solution was a color change depending on the life variable</strong>. Furthermore, the color material of each robot’s head and body changes, depending on if their conditions are critical or not, at the beginning they are grey or dark grey in the boss case, then once the life goes under one particular threshold the color goes to yellow, then if more damages are applied the color is orange, until they are going to die, in that case they became red.</p><p>The little robots and the boss have different life values, so the changes will be triggered according to different threshold values. The same technique is applied also to the hero, in this case only the upper and lower arms change color.</p><h3 id="hero-animation">Hero animation</h3><p>The hero animation is provided by <code>AnimateHero</code> class in the <code>main-char.js</code> file, offering various functions handling the different movements of the main character, in particular there are there are five types of various animation.</p><p><strong>Walking animation</strong>. This particular animation is triggered when the main character is walking, moving up and down the hero, it is obtained by increment and reduce the y-coordinate value, using the <em>sin</em> function, passing as input values multiple of <span class="math">$frac{pi}{16}$. Furthermore, in order of achieve a more smooth animation the function is multiplied by an attenuation function equal to <span class="math">0.0025.</p><p><strong>Reload animation</strong>. This kind of animation was particularly difficult to achieve because it requires to move the arm of the hero, with his hand and the gun handle, composed of many meshes. In order to correctly simulate a <em>reload movement</em>, once there are no more bullets, the starting position of the arm was necessary, then it was stored in a variable. The function is regulated by a boolean variable called <code>reloadFlage</code>, if true, the method decrements the arm (together with its meshes) and the gun reloads piece along the z-axis, until the current position of the arm was equal to the starting one decremented by one, then the flag is set to false, meaning that the reload was completed and everything is augmented to put all pieces as they were.</p><p><strong>Shooting animation</strong>. The shooting animation is triggered once the main character is shooting, meaning when the left-click on the mouse is pressed. The animation is pretty simple, is triggered once the homonym method is called and it increments and decrements the position of the hero, still by using the <em>sin</em> function, but using numbers multiple of <span class="math">$frac{pi}{8}$. Then everything is multiplied by <span class="math">0.05 to reduce the speed of the movement.</p><p><strong>Target position</strong>. The target position is used to shoot in a better way and to aim robots, indeed this animation provide a different view, the difference can be seen in the following game snapshots.</p><p>Considering that the main character has a camera attached to his root element, the animation is obtained by positioning the camera on the gun body once the SHIFT key is pressed. In the method called <code>targetMode</code> the future camera position is computed, because the character is moving, then it is adjusted a little and the camera current position is decremented along the z and x axes, while it is incremented along the y-axis, because having a higher camera allow the user to see better the bullets.<br /> Once the SHIFT key is released, then the <code>returnFromTargetMode</code> function is called and it set the camera back to its position, the original value was previously stored in the class, under the variable called <code>cameraOriginalPos</code>.</p><h3 id="robots-animations">Robots animations</h3><p>The function used for the robots animation is called <code>AnimateRobot</code> and it is exploited also for animating the robot boss. In this case we decided to provide all the animations using Tween.js tween, because it is a more suitable and clean solution, especially for the robots movement. The parts that the robot will move are the head, the cannon outer part and the wheel. The effect of movement is achieved by incrementing and decrementing the rotation of the various parts, in particular they are incremented until they reach a particular value and after that they are reduced, until they are equal to the opposite value and then incremented again in a loop fashion. This final result is achieved by <strong>combining two tweens</strong>, using the <code>chain</code> method provided by Tween.js documentation tween, in particular once the first tween ends the second is triggered and once it finishes, the first is called again, this will repeat forever.<br /> Instead of passing to the tweens directly the various parts’ rotation, an object called <code>position</code> was created, it contains a value for the <em>cannon rotation</em>, the <em>head rotation</em> and the <em>wheel rotation</em>, then these values are assigned to particular coordinates of rotation vector of the various parts meant to move by using the additional methods present in the <code>AnimateRobot</code> function. These functions are indeed very simple, because they just assign the current rotation value of one mesh to the one incremented by the tween, for instance in the case of the robot cannon, root.getObjectByName(robotShooter).rotation.y is assigned to <code>position.cannonRot</code>.<br /> Furthermore, every robot should also move toward the main hero, because they should attack him, this is also achieved by using a tween passing as input value to the method <code>to</code> the main character current position and because of that this tween is created in the render loop, inside the <code>animate</code> function. This is done for every robot, including the robot boss, but it has a different speed, in particular it is slower of all its <em>little children</em>, no matter what difficulty the user has selected, since the ratio among the two different velocities values is the same. In order to avoid that the little robots will overlap, because they have the same target position, we decided to mitigate the final value they have to reach by using a scalar, in this way they distribute uniformly like an army. The <code>lookAt</code> function of the robots was also modified, because they must look toward the main character, so we pass as input value the hero position along the x-axis and z-axis, since there is no variation along the y-axis (the character cannot jump).</p><h3 id="bullets">Bullets</h3><p>The bullets exit from the robot boss cannon and the main hero weapon, they are just green and red <em>boxes</em> respectively. The idea came from a tutorial from the <code>saucecode</code>’s repository, called <code>threejs-demos</code> demos. However many of the logic behind should be changed, in particular the one related to the bullet’s <em>velocity</em>, because in the author’s case there was no pointer lock. The logic is the following, given the XZ plane, since the character does not jump, we can consider the goniometric circumference draw by the hero rotation, then the radius is given by computing the <em>sin</em> and <em>cos</em> function respectively of the hero rotation along the y-axis. The following draw will explain it visually in a more clever way.</p><p>Furthermore, calling the rotation angle along with y-axis <span class="math"><em>α</em> the equation of the radius <em>R</em> is equal to <span class="math"><em>R</em> = − sin<em>α</em> + cos<em>α</em>, we need to put the minus in front of the <em>sin</em>, because we are pointing on the negative values of the z-axis. It seems that the direction of the velocity is now given, but the <em>issues of pointer lock</em> was that the rotation angle along y ranges on <span class="math">$[-frac{pi}{2}, frac{pi}{2}]$, so there was a point where the direction was correct, but the vector was pointing on the opposite side to the camera, so the bullets were shot in the wrong direction, because the angle went from <span class="math">0 to <span class="math">$frac{pi}{2}$, then again back to <span class="math">0 and finally negative, until it reaches <span class="math">$-frac{pi}{2}$.<br /> <strong>The issue was solved by using the</strong> <code>getDirection</code> function of the <code>controls</code> variable returned by the <code>PointerLockControls</code> constructor, in this way the bullet was shot in the right direction.</p><h2 id="collision.detection">Collision detection</h2><p>Since in this application no physic engine was applied, because it would be an unnecessarily enhancement of the application as described later (see on Chapter 5), a very simple collision detection system was implemented, in particular two kinds of differnt collision techniques were applied.</p><h3 id="bounding-box">Bounding box</h3><p>The bounding box technique was applied by taking inspiration from the code by <code>stemkoski</code> stemkoski, the working example is also hosted in his GitHub Pages website stemkoskiPages. The collision detection is obtained by first adding an invisible <code>BoxGeomtry</code> to the <code>Hero</code> root element and second by using the <code>Raycaster</code> raycaster constructor of three.js. The rays are computed for every vertex of the invisible cube, starting from the cube position to the vertex one, the near and far parameters are the default ones, in this way the rays extend to the <em>infinity</em>. We increased the number of vertices, with respect to the <code>stemkoski</code> example, in order to achieve a more precise collision detection, but it was not so good as the one provided by Physi.js for instance. The intersection with the rays is computed for all the object inserted in the <code>collidableList</code> array.<br /> The other issue to solve is to understand which was the direction of the character while he was colliding, indeed if he was going straight, he should be able to go backward. However, in the first version of the collision detection system, this was not possible, so an object called <code>directionOfMovement</code> was created, with four components, one for each direction, that is incremented by one whenever the character is moving in the corresponding direction (if is going left, the left direction is incremented as long as the key for the left movement is held). Furthermore, four boolean variables were created, initially set to false and in the collision loop the maximum among the four directions is computed, so if the max value is equal to the right direction, meaning that <strong>the last movement happened in the right direction, the right boolean variable is set to true</strong> and the movement of the character is stopped on the right side. In other words, the <code>directionOfMovement</code> variable is just a way to remember which was the last movement of the character before the collision.</p><h3 id="if-too-close-it-hurts">If too close, it hurts!</h3><p>In this case the collision is computed just by checking if the distance between one object and the other was under a pre-defined threshold, by using the <code>distanceTo</code> method of the <code>position</code> parameter of every mesh. This kind of solution is <strong>simpler</strong> and <strong>light weight</strong> with respect to the collision loop of the previous section, indeed this technique is used for the bullets, both on the hero side and on the robot boss side for decrementing their health values, and for the position of hero and its enemies, indeed given the fact that the little robots cannot shoot, they <strong>hurt our hero if they are too close to him</strong>.<br /> This solution also avoid to add extra invisible boxes for every robot and to do a collision loop for each of them, this would probably kill the performance, because the cycle should be implemented in the render loop and by doing so the final application cannot be played on many computers without a dedicated GPU.</p><h2 id="pixel-post-processing-effect">Pixel post-processing effect</h2><p>In order to give to the application a more 80s look, we decided to apply a post-processing filter by using the three.js’s <code>EffectComposer</code> effectcomposer, in particular we selected the <em>postprocessing pixelate filter</em>. The final effect is achieved by tuning the parameter controlling the pixels size, indeed if the pixels were too big they will affect the game experience and do not allow the player to what is shooting at.</p><h1 id="how-to-play">How to play</h1><h2 id="user-interactions">User interactions</h2><p>The game is based on interactions with the user through the mouse and the keyboard of its computer.</p><h3 id="menu">Menu</h3><p>This first page allow the user to select the difficulty of the game. This change will affect the quantity of life of each robot and also their movement velocity.</p><h3 id="mouse-and-camera-movements">Mouse and camera movements</h3><p>Once the difficulty is selected the total control of the user’s mouse pointer pass to the application that handle it to move both the character and the camera (that are parts of the same object) around the character. It is implemented exploiting the <code>PointerLockControls</code> pointerlock class of three.js, developed on <code>Pointer Lock API</code> (formerly called <em>Mouse Lock API</em>) provides input methods based on the movement of the mouse over time (i.e., deltas), not just the absolute position of the mouse cursor in the viewport.<br />It allows the user to aim a robot simply moving the mouse in its direction and shot against him with the <strong>left-click</strong> of the mouse, like the most famous FPS games.</p><h3 id="keyboard-and-character-movements">Keyboard and character movements</h3><p>The keyboard allows the user to do some movements of the character in the game, in particular:</p><p>-move the character in the forward direction pressing <strong>W</strong> or the <strong>UpArrow</strong>;</p><p>-move the character in the backward direction pressing <strong>S</strong> or the <strong>DownArrow</strong>;</p><p>-move the character in the left direction pressing <strong>A</strong> or the <strong>leftArrow</strong>;</p><p>-move the character in the right direction pressing <strong>D</strong> or the <strong>rightArrow</strong>.</p><p>The double choice set of keys for the movement has been implemented to accommodate the user’s needs.<br /> All these movements have been implemented though translation of the character object on the <code>x``z</code> plane.<br /> There are also other two kind of interactions with the keyboard that can be triggered with the pression of one or two keys:</p><p>-<em>run</em> mode pressing <strong>SPACE</strong> + <strong>W</strong> or <strong>A</strong> or <strong>S</strong> or <strong>D</strong> allows to move faster in the selected direction;</p><p>-<em>aim</em> mode pressing <strong>SHIFT</strong> to move the camera over the gun and allow the user to aim with a different point of view.</p><h2 id="game-logic">Game logic</h2><p>In this chapter will be explained the logic behind different tasks of the game, how the game proceed and continues. In particular, the general rule is simple, the player has <strong>to survive as long as possible</strong> to reach the highest score, as it was in the oldest arcade games.</p><h3 id="robots-spawn">Robots spawn</h3><p>The robots and the boss are created at the beginning of the game, so the player will face his or her enemies from the beginning. The robots’ positions are randomly selected in a range of values so they can appear also near the hero and hurt him from the very beginning, so the player should be careful to move quickly by using the letters, the arrows and maybe by using the bar, moving faster. There are at most eight robots per round, seven little and one boss and, as previously written, their speed and life change according the game difficulty.</p><h3 id="shooting">Shooting</h3><p>The main hero is able to shoot in the direction he is looking at, but be careful, because the munitions are not infinite, they are just twenty-four, and they are showed on the left side menu, so once the charger is empty, the player <strong>just need to press R to reload</strong>, but a message on the menu will notify him or her. The damage inflicted by the shoots is equal no matter what is the difficulty level selected at the beginning.<br /> The robot boss will shoot in the direction of the main hero only when it is quite close to him, otherwise it will try to reach him to be able to shoot and the chase begins.</p><h3 id="life-control-and-score">Life control and score</h3><p>In order to win the game, the main character should survive as long as he can, meaning that his life should not be decremented. The life value of the hero is showed in the menu on the left and it is equal to one hundred. The lives of the little robots, depends on the difficulty value selected by the user, they range from six (easy case) to fifty (hard case, indeed they are pretty hard to kill!). The robot boss’s life also depends on the difficulty level selected, it goes from forty to one-hundred as the difficulty is increased.<br /> The second game’s object is to achieve a very good score, the higher the better, then depending if the the hero hits or kills one of the robots the score value is incremented and it changes the color being green until the update ends, while if the main character is hit the score is decremented and its color switch to red as showed in the two figure below. The entity of the increment or the reduction depends on which robot is hit or hits the hero.</p>'}

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/lowPolyRobotsAttack/about"><AuthorsInfo /></Route>
      <Route path="/lowPolyRobotsAttack/LVL1">{new Chapter(lvl1).render()}</Route>
      <Route path="/lowPolyRobotsAttack/LVL2">{new Chapter(lvl2).render()}</Route>
      <Route path="/lowPolyRobotsAttack/LVL3">{new Chapter(lvl3).render()}</Route>
      <Route path="/lowPolyRobotsAttack/"><App /></Route>
    </Switch>
  </Router>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

