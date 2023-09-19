const Project = () => {
    return (
        <section id="projects">
            <div>
                <h2>Personal Projects</h2>
                <div className="personal-projects">
                    <div>
                        <img width="30" height="30" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript" />
                        <h3>Todo App MERN</h3>
                        <h4>
                            To-do lists offer a way to increase productivity, stopping you from forgetting things, helps prioritise tasks, manage tasks effectively, use time wisely and improve time management as well as workflow.
                            This projects uses MERN stack.
                        </h4>
                        <a href="https://github.com/hp-01/todo-app-mern" target="_blank">View Code →</a>
                        <a href="https://bit.ly/hp_todoapp" target="_blank">Live Project →</a>
                    </div>
                    <div>
                        <img width="30" height="30" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript" />
                        <h3>PictureThis Free</h3>
                        <h4>
                            <a href="https://appsfortableau.infotopics.com/extensions-for-tableau/picturethis/">PictureThis, </a>
                            Have you ever tried to use product or colleague images instead of names as a filter in your Tableau Dashboards?
                            I have created free version of this tool, with some extra features.
                        </h4>
                        <a href="https://github.com/hp-02/picture-this-free" target="_blank">View Code →</a>
                        <a href="https://squid-app-4po7k.ondigitalocean.app/" target="_blank">Live Project →</a>
                    </div>
                    <div>
                        <img width="30" height="30" src="https://img.icons8.com/color/48/python--v1.png" alt="python" />
                        <h3>Youtube Comment Sentimental Analysis</h3>
                        <h4>
                            This project uses Hugging face Transformer and Youtube API to extract comment and does sentimental analysis.
                        </h4>
                        <a href="https://github.com/hp-02/youtube_sentimental_analysis" target="_blank">View Code →</a>
                    </div>
                </div>
            </div>
            <div>
                <h2>Tools used</h2>
                <div>
                    <img width="96" height="96" src="https://img.icons8.com/color/96/nodejs.png" alt="nodejs" />
                    <img width="96" height="96" src="https://img.icons8.com/ios/100/react-native--v1.png" alt="react-native" />
                    <img width="96" height="96" src="https://img.icons8.com/color/96/mongodb.png" alt="mongodb" />
                    <img width="96" height="96" src="https://img.icons8.com/color/96/python--v1.png" alt="python" />
                    <img width="96" height="96" src="https://img.icons8.com/color/96/java-coffee-cup-logo--v1.png" alt="java" />
                    <img width="96" height="96" src="https://img.icons8.com/color/96/google-compute-engine.png" alt="google-compute-engine" />
                    <img width="96" height="96" src="https://img.icons8.com/color/96/mysql-logo.png" alt="mysql-logo" />
                </div>
            </div>
            <div>
                <h2>Work experience</h2>
                <div className="work-experience">
                    <img src="https://media.licdn.com/dms/image/C4E0BAQHaILZibT4QUw/company-logo_100_100/0/1655749621031?e=1703116800&v=beta&t=rHnySF3MLAEGIby0-tmuuk8Irs-s_pp7SE6JIQczwSk" alt="sentic_logo" width="48px" height="48px" />
                    <div>
                        <p>Full Stack Development</p>
                        <p>Sentics GmbH - Internship</p>
                        <p>Aug 2022 - Jan 2023</p>
                        <p>Building dashboard to show live sensor data from a factory about user and vehicle position in a 3D enviroment from MQTT broker.</p>
                        <p>Skills</p>
                        <p>React.js, ThreeJS, TypeScript</p>
                    </div>
                </div>
                <div className="work-experience">
                    <img src="https://media.licdn.com/dms/image/D560BAQHaK1sbFJnUBA/company-logo_100_100/0/1681110810650?e=1703116800&v=beta&t=fTpZt0LHH4NtDjnkhp4DxGQ_4Fzso22mP6DRNjpjCYk" alt="magikos_logo" width="48px" height="48px" />
                    <div>
                        <p>Software Generalist</p>
                        <p>Magikos Tech Private Limited</p>
                        <p>Jul 2021 - Jul 2022</p>
                        <p>Building automation tools using Google APIs to stream line the flow of Google Workspace account creation for the reseller. Building Fintech tool for storing stocks information for further trading process. </p>
                        <p>Skills</p>
                        <p>NodeJS, React.js, Google Apps Script, Google APIs and Cloud Compute</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project;