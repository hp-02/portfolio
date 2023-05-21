import "./App.css";
import { useState } from "react";
import levenshtein from "js-levenshtein";
import FocusLock, { AutoFocusInside } from 'react-focus-lock';

const user = "root@harsh:~$ ";
const len = user.length;
const cmds = ["clear", "help", "github", "whoami", "linkedln", "projects", "resume"];
const commandCommonProperties = { status: false, firstTab: true, tabIndex: 0, nearCommand: [] };
const App = () => {
  const [ui, setUi] = useState([{ command: "root@harsh:~$ ", ...commandCommonProperties }]);

  return (
    <FocusLock>
      <WelcomeComponent />
      {ui.map((item, index) =>
        <div key={index}>
          {index % 2 == 0 ?
            !item.status ?
              <AutoFocusInside>
                <input
                  className="hello bg-gray-900 outline-none text-emerald-400 w-full" value={item.command} onChange={(e) => {
                    if (e.target.value.length < len || item.status) return;
                    item.command = user + e.target.value.substring(len);
                    setUi([...ui]);
                  }} onKeyDown={(e) => {

                    if (e.key === "Tab") {
                      // item.status = true;
                      if (item.firstTab) {
                        const command = item.command.substring(len);
                        cmds.forEach((cmd) => {
                          if (command.toLowerCase() === cmd.substring(0, command.length))
                            item.nearCommand.push({ edit: 0, command: cmd });
                          else
                            item.nearCommand.push({ edit: levenshtein(command, cmd), command: cmd });
                        });
                        item.nearCommand.sort((a, b) => a.edit - b.edit);
                        item.firstTab = false;
                      }
                      if (item.tabIndex === item.nearCommand.length) item.tabIndex = 0;
                      item.command = user + item.nearCommand[item.tabIndex].command;
                      item.tabIndex += 1;
                      setUi([...ui]);
                    }

                    if (e.key === "Enter") {
                      item.status = true;
                      const command = item.command.substring(len);
                      if (command === "help") {
                        setUi([...ui, ...commandCommonProperties, {
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
                        setUi([...ui, ...commandCommonProperties, {
                          OutputLine: <div className="text-gray-100">Opening github profile on new tab</div>
                        }, { command: "root@harsh:~$ " }]);
                        window.open("https://github.com/hp-01", "_blank");
                      } else {
                        setUi([...ui, ...commandCommonProperties, {
                          OutputLine: <div className="text-gray-100">Working on it, Try using help command</div>
                        }, { command: "root@harsh:~$ " }]);
                      }
                    }
                    e.stopPropagation();
                  }} autoFocus spellCheck="false" />
              </AutoFocusInside> : <div className="bg-gray-900 outline-none text-emerald-400 w-full">{item.command}</div>
            :
            item.OutputLine
          }
        </div>
      )}
    </FocusLock>
  );
};

const WelcomeComponent = () => {
  return (
    <div className="text-gray-100">
      <p>===== Hello, I am Harsh Pandey&#128516;&#128516;===== </p>
      <p>This is my portfolio, which is inspired by bash shell.</p>
      <p>Type help to see some command</p>
      <p>Enter tab to see command suggestion</p>
    </div>
  );
}

export default App;
