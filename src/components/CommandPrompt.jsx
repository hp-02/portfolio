import { useState } from "react";
import levenshtein from "js-levenshtein";

const user = "root@harsh:~$ ";
const len = user.length;
const cmds = ["clear", "help", "github", "whoami", "linkedln", "projects", "resume"];
const commandCommonProperties = { status: false, firstTab: true, tabIndex: 0, nearCommand: [] };

const CommandPrompt = () => {
  const [ui, setUi] = useState([
    { command: "root@harsh:~$ help", ...commandCommonProperties, status: true },
    { OutputLine: <HelpComponent /> },
    { command: "root@harsh:~$ ", ...commandCommonProperties }
  ]);

  return (
    <div style={{ backgroundColor: "#f2f2f2", margin: "1rem 2rem", padding: "1rem 0.2rem" }}>
      <WelcomeComponent />
      {ui.map((item, index) =>
        <div key={index}>
          {index % 2 == 0 ?
            !item.status ?
            <>
            <label htmlFor="commandprompt"></label>
              <input className="commandprompt" name="commandprompt"
                value={item.command} onChange={(e) => {
                  if (e.target.value.length < len || item.status) return;
                  item.command = user + e.target.value.substring(len);
                  item.tabIndex = 0;
                  item.firstTab = true;
                  item.nearCommand = [];
                  setUi([...ui]);
                }} onKeyDown={(e) => {
                  const command = item.command.substring(len);

                  if (e.key === "Tab") {
                    if (item.firstTab) {
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
                    if (command === "help") {
                      setUi([...ui, {
                        OutputLine: <HelpComponent />
                      }, { command: "root@harsh:~$ ", ...commandCommonProperties }]);
                    } else if (command === "github") {
                      setUi([...ui, {
                        OutputLine: <div>Opening github profile on new tab</div>
                      }, { command: "root@harsh:~$ ", ...commandCommonProperties }]);
                      window.open("https://github.com/hp-01", "_blank");
                    } else if (command === "clear") {
                      setUi([{ command: "root@harsh:~$ ", ...commandCommonProperties }]);
                    } else if (command === "linkedln") {
                      setUi([...ui, {
                        OutputLine: <div>Opening linkedln profile on new tab</div>
                      }, { command: "root@harsh:~$ ", ...commandCommonProperties }]);
                      window.open("https://www.linkedin.com/in/harsh-p-a35892131/", "_blank");
                    } else if (command === "whoami") {
                      setUi([...ui, {
                        OutputLine: <div>Directing to about section.</div>
                      }, { command: "root@harsh:~$ ", ...commandCommonProperties }]);
                      window.open("#about", "_self");
                    }
                    else if (command === "projects") {
                      setUi([...ui, {
                        OutputLine: <div>Directing to projects section.</div>
                      }, { command: "root@harsh:~$ ", ...commandCommonProperties }]);
                      window.open("#projects", "_self");
                    } else if (command === "resume") {
                      setUi([...ui, {
                        OutputLine: <div>Directing to about section.</div>
                      }, { command: "root@harsh:~$ ", ...commandCommonProperties }]);
                      window.open("harsh_pandey_resume.pdf", "_blank");
                    } else {
                      cmds.forEach((cmd) => {
                        if (command.toLowerCase() === cmd.substring(0, command.length))
                          item.nearCommand.push({ edit: 0, command: cmd });
                        else
                          item.nearCommand.push({ edit: levenshtein(command, cmd), command: cmd });
                      });
                      item.nearCommand.sort((a, b) => a.edit - b.edit);
                      setUi([...ui, {
                        OutputLine: <div>
                          <p>Command not found, please see suggested command below.</p>
                          {item.nearCommand.map((item, index) => <p key={index} style={{ display: "inline-block", marginRight: "1rem" }}>{item.command}</p>)}
                          <p>To learn more information type help command.</p>
                        </div>
                      }, { command: "root@harsh:~$ ", ...commandCommonProperties }]);
                    }
                  }
                  e.stopPropagation();
                }} spellCheck="false" /></>
              : <div className="commandprompt">{item.command}</div>
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
    <div>
      <p>Fun little addition for developer's, which is inspired by bash shell.</p>
      <p>To learn more information type help command.</p>
      <p>Enter tab to see command suggestion</p>
    </div>
  );
}

const HelpComponent = () => {
  return (
    <div className="helpcmd">
      <p>These shell commands are defined internally.</p>
      <p>Type "help" to see this list.</p>
      <br />
      <table>
        <tbody>
          <tr>
            <td>clear</td>
            <td>clears the terminal screen</td>
          </tr>
          <tr>
            <td>resume</td>
            <td>view my resume</td>
          </tr>
          <tr>
            <td>github</td>
            <td>checkout my github profile</td>
          </tr>
          <tr>
            <td>linkedln</td>
            <td>checkout my linkedln profile</td>
          </tr>
          <tr>
            <td>projects</td>
            <td>checkout my projects</td>
          </tr>
          <tr>
            <td>whoami</td>
            <td>displays my info</td>
          </tr>
          <tr>
            <td>help</td>
            <td>displays detailed information about this commands</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CommandPrompt;
