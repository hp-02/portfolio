import "./App.css";
import { useState } from "react";
import levenshtein from "js-levenshtein";

const user = "root@harsh:~$ ";
const len = user.length;
const cmds = ["clear", "help", "github", "whoami", "linkedln", "projects", "resume"];

const App = () => {
  const [ui, setUi] = useState([{ command: "root@harsh:~$ ", status: false }]);

  return (
    <div>
      <WelcomeComponent />
      {ui.map((item, index) =>
        <div key={index}>
          {index % 2 == 0 ?
            !item.status ?
              <input className="bg-gray-900 outline-none text-emerald-400 w-full" value={item.command} onChange={(e) => {
                if (e.target.value.length < len || item.status) return;
                item.command = user + e.target.value.substring(len);
                setUi([...ui]);
              }} onKeyDown={(e) => {

                if (e.key === "Tab") {
                  item.status = true;
                  const command = item.command.substring(len);
                  const nearCommand = []
                  cmds.forEach(cmd => {
                    nearCommand.push({ edit: levenshtein(command, cmd), command: cmd });
                  });
                  nearCommand.sort((a, b) => a.edit - b.edit);
                  nearCommand.length = 4;
                  setUi([...ui, {
                    OutputLine:
                      <div className="text-gray-100">
                        <p>Please try below command</p>
                        {
                          nearCommand.map((item, index) =>
                            <p key={index} className="inline-block w-min pr-4"> {item.command}</p>
                          )
                        }
                      </div>
                  }, { command: item.command }]);
                }

                if (e.key === "Enter") {
                  item.status = true;
                  const command = item.command.substring(len);
                  if (command === "help") {
                    setUi([...ui, {
                      OutputLine:
                        <div className="text-gray-100">
                          <p>These shell commands are defined internally.</p>
                          <p>Type "help" to see this list.</p>
                          <br />
                          <table>
                            <tbody>
                              <tr>
                                <td className="pr-4">clear</td>
                                <td>clears the terminal screen</td>
                              </tr>
                              <tr>
                                <td className="pr-4">resume</td>
                                <td>view my resume</td>
                              </tr>
                              <tr>
                                <td className="pr-4">github</td>
                                <td>checkout my github profile</td>
                              </tr>
                              <tr>
                                <td className="pr-4">linkedln</td>
                                <td>checkout my linkedln profile</td>
                              </tr>
                              <tr>
                                <td className="pr-4">projects</td>
                                <td>checkout my projects</td>
                              </tr>
                              <tr>
                                <td className="pr-4">whoami</td>
                                <td>displays my info</td>
                              </tr>
                              <tr>
                                <td className="pr-4">help</td>
                                <td>displays detailed information about this commands</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                    }, { command: "root@harsh:~$ " }]);
                  } else if (command === "github") {
                    setUi([...ui, {
                      OutputLine: <div>Opening github profile on new tab</div>
                    }, { command: "root@harsh:~$ " }]);
                    window.open("https://github.com/hp-01", "_blank");
                  } else {
                    setUi([...ui, {
                      OutputLine: <div>Working on it, Try using help command</div>
                    }, { command: "root@harsh:~$ " }]);
                  }
                }
              }} autoFocus spellCheck="false" /> : <div className="bg-gray-900 outline-none text-emerald-400 w-full">{item.command}</div>
            :
            item.OutputLine
          }
        </div>
      )}
    </div>
  );
};

const WelcomeComponent = () => {
  return (
    <div className="text-gray-100">
      <p>===== Hello, I am Harsh, Harsh Pandey&#128516;&#128516;===== </p>
      <p>Type help to see some command</p>
      <p>Enter tab to see command suggestion</p>
    </div>
  );
}

export default App;
