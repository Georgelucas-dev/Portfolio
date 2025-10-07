<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" />
    <link rel="stylesheet" href="style.css">
    <link rel="shortcut icon" href="./assets/logo.png" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Rubik+Doodle+Shadow&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <title>Portfolio's George Lucas</title>
</head>
<body>

    <div class="container" data-aos="fade-in" data-aos-duration="1200"> 
        <header data-aos="fade-down" data-aos-duration="1000">
            <img src="./assets/logo.png" alt="logo" data-aos="zoom-in" data-aos-duration="800">
            <nav>
                <ul>
                    <li data-aos="fade-down" data-aos-delay="100"><a href="#hero">Home</a></li>
                    <li data-aos="fade-down" data-aos-delay="200"><a href="#about">About</a></li>
                    <li data-aos="fade-down" data-aos-delay="300"><a href="#projects">Projects</a></li>
                    <li data-aos="fade-down" data-aos-delay="400"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>

        <div class="hero" id="hero" data-aos="fade-up" data-aos-duration="1200">
            <div class="profile-info" data-aos="fade-right" data-aos-duration="1000">
                <span class="name" data-aos="fade-right" data-aos-delay="100">I'm George Lucas</span>
                <span class="role" data-aos="fade-right" data-aos-delay="200">Frontend Developer. Passionate about building interactive web experiences</span>
            </div>
            <div class="profile-img" data-aos="fade-left" data-aos-duration="1000">
                <div class="wrapper" data-aos="zoom-in" data-aos-delay="300">
                    <img src="./assets/george.jpeg" alt="" data-aos="zoom-in" data-aos-delay="400">
                    <div class="bg-img" data-aos="fade-in" data-aos-delay="500"></div>
                </div>
            </div>
        </div>

        <main>
            <section id="about" data-aos="fade-up" data-aos-duration="1000">
                <div class="box about-img" data-aos="fade-right" data-aos-delay="100">
                    <span data-aos="fade-right" data-aos-delay="150">About Me</span>
                    <img src="./assets/george.jpeg" alt="George's Picture" data-aos="zoom-in" data-aos-delay="200">
                </div>

                <div class="box about-me" data-aos="fade-left" data-aos-delay="200">
                    <span data-aos="fade-left" data-aos-delay="250">
                        Hello! I'm <span class="highlight" data-aos="zoom-in" data-aos-delay="300">George Lucas</span>, a passionate 
                        <span class="highlight" data-aos="zoom-in" data-aos-delay="350">Frontend Developer</span> dedicated to crafting 
                        engaging and interactive web experiences. 
                        With a strong foundation in 
                        <span class="highlight" data-aos="zoom-in" data-aos-delay="400">HTML</span>, 
                        <span class="highlight" data-aos="zoom-in" data-aos-delay="450">CSS</span>, and 
                        <span class="highlight" data-aos="zoom-in" data-aos-delay="500">JavaScript</span>, I enjoy transforming ideas 
                        into visually appealing and 
                        user-friendly websites. 
                        I am always eager to <span class="highlight" data-aos="zoom-in" data-aos-delay="550">learn</span> new technologies 
                        and continuously <span class="highlight" data-aos="zoom-in" data-aos-delay="600">improve my skills</span> to deliver 
                        high-quality solutions. 
                        Let's <span class="highlight" data-aos="zoom-in" data-aos-delay="650">build something amazing together!</span>
                    </span>
                </div>

                <div class="box skills" data-aos="fade-up" data-aos-delay="300">
                    <span data-aos="fade-up" data-aos-delay="350">Skills and Talents</span>
                    <p data-aos="fade-up" data-aos-delay="400">
                        I enjoy creating responsive layouts, interactive user interfaces, and seamless user experiences. My strengths include problem-solving, attention to detail, and a passion for continuous learning in frontend development.
                    </p>
                </div>

                <div class="box skills-box" data-aos="fade-up" data-aos-delay="400">
                    <div class="skill-box" data-aos="flip-up" data-aos-delay="100">
                        <img src="./assets/html5.png" alt="HTML5" data-aos="zoom-in" data-aos-delay="120">
                        <span data-aos="fade-up" data-aos-delay="140">HTML 5</span>
                    </div>
                    <div class="skill-box" data-aos="flip-up" data-aos-delay="200">
                        <img src="./assets/css3.png" alt="CSS3" data-aos="zoom-in" data-aos-delay="220">
                        <span data-aos="fade-up" data-aos-delay="240">CSS 3</span>
                    </div>
                    <div class="skill-box" data-aos="flip-up" data-aos-delay="300">
                        <img src="./assets/js.png" alt="JavaScript" data-aos="zoom-in" data-aos-delay="320">
                        <span data-aos="fade-up" data-aos-delay="340">JavaScript</span>
                    </div>
                    <div class="skill-box" data-aos="flip-up" data-aos-delay="400">
                        <img src="./assets/git.png" alt="Git" data-aos="zoom-in" data-aos-delay="420">
                        <span data-aos="fade-up" data-aos-delay="440">Git</span>
                    </div>
                    <div class="skill-box" data-aos="flip-up" data-aos-delay="500">
                        <span data-aos="fade-up" data-aos-delay="520">Skill</span>
                    </div>
                    <div class="skill-box" data-aos="flip-up" data-aos-delay="600">
                        <span data-aos="fade-up" data-aos-delay="620">Skill</span>
                    </div>
                    <div class="skill-box" data-aos="flip-up" data-aos-delay="700">
                        <span data-aos="fade-up" data-aos-delay="720">Skill</span>
                    </div>
                    <div class="skill-box" data-aos="flip-up" data-aos-delay="800">
                        <span data-aos="fade-up" data-aos-delay="820">Skill</span>
                    </div>
                </div>
            </section>

            <section id="projects" data-aos="fade-up" data-aos-duration="1000">
                <span data-aos="fade-up" data-aos-delay="100">My Projects</span>
                <div class="projects-container" data-aos="fade-up" data-aos-delay="200">
                    <div class="project" data-aos="fade-right" data-aos-delay="100"> 
                        <div class="project-img" data-aos="zoom-in" data-aos-delay="120">
                            <img src="./assets/project-1.png" alt="" data-aos="zoom-in" data-aos-delay="140">
                        </div>
                        <h3 data-aos="fade-right" data-aos-delay="160">AI Web site NextIa</h3>
                        <p data-aos="fade-right" data-aos-delay="180">A web platform powered by AI technologies, designed to provide personalized experiences.</p>
                        <div class="project-links" data-aos="fade-right" data-aos-delay="200">
                            <button class="bnt-link"><a href="https://meuprojeto.com" target="_blank">🔗 Live</a></button>
                            <button class="bnt-link"><a href="https://github.com/usuario/projeto" target="_blank">💻 Code</a></button>
                        </div>
                    </div>
                    <div class="project" data-aos="fade-up" data-aos-delay="200">
                        <div class="project-img" data-aos="zoom-in" data-aos-delay="220">
                            <img src="./assets/project-2.png" alt="" data-aos="zoom-in" data-aos-delay="240">
                        </div>
                        <h3 data-aos="fade-up" data-aos-delay="260">AI Login Web Site</h3>
                        <p data-aos="fade-up" data-aos-delay="280">A secure login platform utilizing AI for enhanced user authentication.</p>
                        <div class="project-links" data-aos="fade-up" data-aos-delay="300">
                            <button class="bnt-link"><a href="https://meuprojeto.com" target="_blank">🔗 Live</a></button>
                            <button class="bnt-link"><a href="https://github.com/usuario/projeto" target="_blank">💻 Code</a></button>
                        </div>
                    </div>
                    <div class="project" data-aos="fade-left" data-aos-delay="300">
                        <div class="project-img" data-aos="zoom-in" data-aos-delay="320">
                            <img src="./assets/project-3.png" alt="" data-aos="zoom-in" data-aos-delay="340">
                        </div>
                        <h3 data-aos="fade-left" data-aos-delay="360">Letterboxd Clone</h3>
                        <p data-aos="fade-left" data-aos-delay="380">Letterboxd clone made with HTML, CSS and JavaScript.</p>
                        <div class="project-links" data-aos="fade-left" data-aos-delay="400">
                            <button class="bnt-link"><a href="https://meuprojeto.com" target="_blank">🔗 Live</a></button>
                            <button class="bnt-link"><a href="https://github.com/usuario/projeto" target="_blank">💻 Code</a></button>
                        </div>
                    </div>
                    <div class="project" data-aos="fade-right" data-aos-delay="100"> 
                        <div class="project-img" data-aos="zoom-in" data-aos-delay="120">
                            <img src="./assets/project-1.png" alt="" data-aos="zoom-in" data-aos-delay="140">
                        </div>
                        <h3 data-aos="fade-right" data-aos-delay="160">Landing Page Nike</h3>
                        <p data-aos="fade-right" data-aos-delay="180">Landing page responsiva feita com HTML, CSS e animações em JavaScript.</p>
                        <div class="project-links" data-aos="fade-right" data-aos-delay="200">
                            <button class="bnt-link"><a href="https://meuprojeto.com" target="_blank">🔗 Live</a></button>
                            <button class="bnt-link"><a href="https://github.com/usuario/projeto" target="_blank">💻 Code</a></button>
                        </div>
                    </div>
                    <div class="project" data-aos="fade-up" data-aos-delay="200">
                        <div class="project-img" data-aos="zoom-in" data-aos-delay="220">
                            <img src="./assets/project-1.png" alt="" data-aos="zoom-in" data-aos-delay="240">
                        </div>
                        <h3 data-aos="fade-up" data-aos-delay="260">Landing Page Nike</h3>
                        <p data-aos="fade-up" data-aos-delay="280">Landing page responsiva feita com HTML, CSS e animações em JavaScript.</p>
                        <div class="project-links" data-aos="fade-up" data-aos-delay="300">
                            <button class="bnt-link"><a href="https://meuprojeto.com" target="_blank">🔗 Live</a></button>
                            <button class="bnt-link"><a href="https://github.com/usuario/projeto" target="_blank">💻 Code</a></button>
                        </div>
                    </div>
                    <div class="project" data-aos="fade-left" data-aos-delay="300">
                        <div class="project-img" data-aos="zoom-in" data-aos-delay="320">
                            <img src="./assets/project-1.png" alt="" data-aos="zoom-in" data-aos-delay="340">
                        </div>
                        <h3 data-aos="fade-left" data-aos-delay="360">Landing Page Nike</h3>
                        <p data-aos="fade-left" data-aos-delay="380">Landing page responsiva feita com HTML, CSS e animações em JavaScript.</p>
                        <div class="project-links" data-aos="fade-left" data-aos-delay="400">
                            <button class="bnt-link"><a href="https://meuprojeto.com" target="_blank">🔗 Live</a></button>
                            <button class="bnt-link"><a href="https://github.com/usuario/projeto" target="_blank">💻 Code</a></button>
                        </div>
                    </div>
                    <div class="project" data-aos="fade-right" data-aos-delay="400">
                        <div class="project-img" data-aos="zoom-in" data-aos-delay="420">
                            <img src="./assets/project-1.png" alt="" data-aos="zoom-in" data-aos-delay="440">
                        </div>
                        <h3 data-aos="fade-right" data-aos-delay="460">Landing Page Nike</h3>
                        <p data-aos="fade-right" data-aos-delay="480">Landing page responsiva feita com HTML, CSS e animações em JavaScript.</p>
                        <div class="project-links" data-aos="fade-right" data-aos-delay="500">
                            <button class="bnt-link"><a href="https://meuprojeto.com" target="_blank">🔗 Live</a></button>
                            <button class="bnt-link"><a href="https://github.com/usuario/projeto" target="_blank">💻 Code</a></button>
                        </div>
                    </div>
                    <div class="project" data-aos="fade-up" data-aos-delay="600">
                        <div class="project-img" data-aos="zoom-in" data-aos-delay="620">
                            <img src="./assets/project-1.png" alt="" data-aos="zoom-in" data-aos-delay="640">
                        </div>
                        <h3 data-aos="fade-up" data-aos-delay="660">Landing Page Nike</h3>
                        <p data-aos="fade-up" data-aos-delay="680">Landing page responsiva feita com HTML, CSS e animações em JavaScript.</p>
                        <div class="project-links" data-aos="fade-up" data-aos-delay="700">
                            <button class="bnt-link"><a href="https://meuprojeto.com" target="_blank">🔗 Live</a></button>
                            <button class="bnt-link"><a href="https://github.com/usuario/projeto" target="_blank">💻 Code</a></button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" data-aos="fade-up" data-aos-duration="1000">
                <h2 data-aos="fade-up" data-aos-delay="100">Contact Me</h2>
                <div class="contact-container" data-aos="fade-up" data-aos-delay="200">
                    <span data-aos="fade-up" data-aos-delay="220">Get in touch</span>
                    <p data-aos="fade-up" data-aos-delay="240">If you have any questions or inquiries, feel free to reach out!</p>
                    <input type="name" placeholder="Your Name" data-aos="slide-up" data-aos-delay="260">
                    <input type="email" placeholder="Your Email" data-aos="slide-up" data-aos-delay="280">
                    <textarea placeholder="Your Message" data-aos="slide-up" data-aos-delay="300"></textarea>
                    <button class="bnt-link" data-aos="zoom-in" data-aos-delay="320">Send</button>
                </div>
            </section>
            <footer data-aos="fade-up" data-aos-duration="1000">
                <span data-aos="fade-up" data-aos-delay="100">© 2024 George Lucas. All rights reserved.</span>
                <span data-aos="fade-up" data-aos-delay="200">Designed by George Lucas</span>
            </footer>
        </main>

        <div class="bnt" data-aos="fade-up" data-aos-delay="300">
            <button data-aos="zoom-in" data-aos-delay="400"><a href="https://github.com/Georgelucas-dev"><img src="./assets/github.png" alt="GitHub"></a></button>
            <button data-aos="zoom-in" data-aos-delay="450"><a href="https://www.instagram.com/georgelucasp_/"><img src="./assets/instagram.png" alt="Instagram"></a></button>
            <button data-aos="zoom-in" data-aos-delay="500"><a href="https://www.linkedin.com/in/george-lucas-241680367/"><img src="./assets/linkedin.png" alt="LinkedIn"></a></button>
        </div>

        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script>
        AOS.init();
        </script>

</body>
</html>



<div class="bnt">
            <button><a href="https://github.com/Georgelucas-dev"><img src="./assets/github.png" alt="GitHub"></a></button>
            <button><a href="https://www.instagram.com/georgelucasp_/"><img src="./assets/instagram.png" alt="Instagram"></a></button>
            <button><a href="https://www.linkedin.com/in/george-lucas-241680367/"><img src="./assets/linkedin.png" alt="LinkedIn"></a></button>
        </div>