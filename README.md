## Vs code debugging

1. Download the latest release of VS Code and install our Chrome debugger
2. Add launch.json in .vscode folder (this one in same folder as folder src (same lvl))
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Chrome",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}/src"
    },
    {
      "name": "Debug CRA Tests",
      "type": "node",
      "request": "launch",
      "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/react-scripts",
      "args": [
        "test",
        "--runInBand",
        "--no-cache",
        "--env=jsdom"
      ],
      "cwd": "${workspaceRoot}",
      "protocol": "inspector",
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    }
  ]
}

## Vs code reactjs extensions

- Bracket Pair Colorizer
- Code Spell Checker
- expand-region
- Path Intellisense
- VS Code ES7 React/Redux/React-Native/JS snippets

## Json list

[
    { firstName: "Jack", lastName: "Captain", notes: "He is good captain", id: 1 },
    { firstName: "Eva", lastName: "Cesar", notes: "Julius wife", id: 2 },
    { firstName: "Julia", lastName: "Smith", notes: "Very common last name. She works in chemical industry", id: 3 },
    { firstName: "Peter", lastName: "Seedorf", notes: "Don't try to make him angry", id: 4 }
]

## Html

<div id="root">
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light"><a class="navbar-brand" href="#">React
                start</a><button class="navbar-toggler collapsed" type="button" data-toggle="collapse"
                data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="account">
                <div class="dropdown dropleft"><button class="btn btn-light dropdown-toggle" type="button"
                        id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">email@email.com</button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <div class="row">
                            <div class="col-1"></div>
                            <div class="col-10">
                                <form>
                                    <div class="form-row">
                                        <div class="form-group row">
                                            <div><label for="input_email">Email</label><input class="form-control "
                                                    id="inputEmail4" placeholder="Email" value=""></div>
                                        </div>
                                        <div class="form-group row">
                                            <div><label for="input_psw">Password</label><input type="password"
                                                    class="form-control " id="inputEmail4" placeholder="Password"
                                                    value=""></div>
                                        </div>
                                    </div>
                                    <div class="right"><button type="submit" class="btn btn-primary margin-left">Log
                                            in</button></div>
                                </form>
                            </div>
                            <div class="col-1"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="navbar-collapse collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="/list">List</a></li>
                    <li class="nav-item"><a class="nav-link" href="/help">Help</a></li>
                </ul>
            </div>
        </nav>
        <div>
            <div>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="row_undefined">
                            <th scope="row">1</th>
                            <td>Jack</td>
                            <td>Captain</td>
                            <td>He is good captain</td>
                            <td><button class="btn btn-info">Edit</button></td>
                            <td><button class="btn btn-danger">Remove</button></td>
                        </tr>
                        <tr id="row_undefined">
                            <th scope="row">2</th>
                            <td>Eva</td>
                            <td>Cesar</td>
                            <td>Julius wife</td>
                            <td><button class="btn btn-info">Edit</button></td>
                            <td><button class="btn btn-danger">Remove</button></td>
                        </tr>
                        <tr id="row_undefined">
                            <th scope="row">3</th>
                            <td>Julia</td>
                            <td>Smith</td>
                            <td>Very common last name. She works in chemical industry</td>
                            <td><button class="btn btn-info">Edit</button></td>
                            <td><button class="btn btn-danger">Remove</button></td>
                        </tr>
                        <tr id="row_undefined">
                            <th scope="row">4</th>
                            <td>Peter</td>
                            <td>Seedorf</td>
                            <td>Don't try to make him angry</td>
                            <td><button class="btn btn-info">Edit</button></td>
                            <td><button class="btn btn-danger">Remove</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>


TODO: 
- tests (Intermediate)
- Hooks (przed "Zaawansowane informacje")
- Redux
- TypeScript
- lint


- Przełożyć "Myślenie reactowe" na początkowe slajdy
- File structure (jest w FAQ)

