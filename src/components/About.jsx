const About = () => {
    return (

        <div id="about">
            <div>
                <div>
                    <h1>Full-stack web developer</h1>
                    <h4>I am a backend developer with expertise in Node.js. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.
                    </h4>
                </div>
                <div>
                    <img src="images/image1.png" alt="art" onLoad={e => e.target.classList.add("rotate")} />
                </div>
            </div>
            <ul>
                <li>
                    <a href="https://github.com/hp-01" target="_blank">
                        <img width="48" height="48" src="https://img.icons8.com/ios-glyphs/90/github.png" alt="github" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/harsh-p-a35892131/" target="_blank">
                        <img width="48" height="48" src="https://img.icons8.com/color/96/linkedin.png" alt="linkedin" />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default About;