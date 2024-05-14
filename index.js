function go_to_kitchen() {
    alert("You clicked on: kitchen");
}

function wait() {
    alert("You clicked on: wait");
}

function go_docking() {
    alert("You clicked on: docking");
}

function preeti_mam_cabin() {
    alert("You clicked on: preeti-mam cabin");
}

function arvind_sir_cabin() {
    alert("You clicked on: arvind sir cabin");
}

function floor() {
    alert("You clicked on: floor");
}

function manoj_sir_cabin() {
    alert("You clicked on: manoj sir cabin");
}

function runCommand(command) {
   
    switch (command) {
        case 'go_to_kitchen':
            go_to_kitchen();
            break;
        case 'wait':
            wait();
            break;
        case 'go_docking':
            go_docking();
            break;
        case 'preeti_mam_cabin':
            preeti_mam_cabin();
            break;
        case 'arvind_sir_cabin':
            arvind_sir_cabin();
            break;
        case 'floor':
            floor();
            break;
        case 'manoj_sir_cabin':
            manoj_sir_cabin();
            break;
        default:
            alert("Invalid command");
    }
}
