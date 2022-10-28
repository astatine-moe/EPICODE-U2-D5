let teamCount = 0;
let waiting = [];
let teams = [];

const $countInput = document.querySelector("#team-count");
const $increaseCount = document.querySelector("#increase-amount");
const $decreaseCount = document.querySelector("#decrease-amount");
const $teamsList = document.querySelector(".teams");

const updateTeams = () => {
    $teamsList.innerHTML = "";

    for (let i = 0; i < teamCount; i++) {
        const $team = document.createElement("div");
        $team.classList.add("team");
        const $h2 = document.createElement("h2");
        $h2.textContent = `Team ${i + 1}`;
        $team.appendChild($h2);

        const $memberList = document.createElement("div");
        $memberList.classList.add("member-list");
        const $ul = document.createElement("ul");
        $memberList.appendChild($ul);
        $team.appendChild($memberList);

        $teamsList.appendChild($team);
    }
};

$countInput.addEventListener("change", (event) => {
    teamCount = parseInt(event.target.value);
    updateTeams();
});

$increaseCount.addEventListener("click", () => {
    $countInput.value = teamCount + 1;
    $countInput.dispatchEvent(new Event("change"));
});

$decreaseCount.addEventListener("click", () => {
    //don't go under 0
    if (teamCount > 0) {
        $countInput.value = teamCount - 1;
        $countInput.dispatchEvent(new Event("change"));
    }
});

const $newMemberName = document.querySelector("#new-member-name");
const $addMember = document.querySelector("#add-member");

$addMember.addEventListener("click", (event) => {
    event.preventDefault();
    const name = $newMemberName.value;
    if (name) {
        $newMemberName.value = "";
        waiting.push(name);
        updateWaiting();
    }
});

const updateWaiting = () => {
    const $waitingList = document.querySelector("#members");
    $waitingList.innerHTML = "";
    waiting.forEach((name) => {
        const $li = document.createElement("li");
        $li.classList.add("member");
        $li.textContent = name;
        $waitingList.appendChild($li);
    });
};
