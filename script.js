function refresh() {
    document.location.reload(true)

}
async function test() {
    let user = document.getElementById('username').value
    let api_link = "https://api.github.com/users/" + user + "/repos"
    try {
        var resp = await fetch(api_link)
        var jesp = await resp.json()
    } catch (e) {
        alert("Error while fetching resources:", e)
    }
    let rep = document.getElementById('repo-names').getElementsByTagName('ul')[0]
    for (let repo of jesp) {
        let li = document.createElement('li')
        li.innerText = repo.name
        repo.append(li)
    }
    let isStars = document.getElementById('stars').checked
    let isForks = document.getElementById('forks').checked
    let isCommits = document.getElementById('commits').checked
    let isIssues = document.getElementById('issues').checked
    let isPullRequests = document.getElementById('pull_requests').checked
    let stars = 0
    let forks = 0
    let commits = 0
    let issues = 0
    let pulls = 0
    let stats = document.getElementById('stats').getElementsByTagName('ul')[0]
    let count_stats = 0
    if (isStars) {
        for (let repo of jesp) {
            let s = repo.stargazers_count
            stars = stars + s
        }
        let li = document.createElement('li')
        li.innerHTML = "Stars: " + stars
        stats.append(li)
    }
    if (isForks) {
        for (let repo of jesp) {
            let f = repo.forks_count
            forks = forks + f
        }
        let li = document.createElement('li')
        li.innerHTML = "Forks: " + forks
        stats.append(li)
    }
    // if(isCommits){
    //     for(let repo of jesp){
    //         let i = repo.
    //         commits = commits + i
    //     }
    //     let li = document.createElement('li')
    //     li.innerHTML= "Commits: " + commits
    //     stats.append(li)
    // }
    if (isIssues) {
        for (let repo of jesp) {
            let i = repo.open_issues_count
            issues = issues + i
        }
        let li = document.createElement('li')
        li.innerHTML = "Issues: " + issues
        stats.append(li)
    }
    // if(isPullRequests){
    //     for(let repo of jesp){
    //         let i = repo.
    //         pulls = pulls + i
    //     }
    //     let li = document.createElement('li')
    //     li.innerHTML= "Pull Requests: " + pulls
    //     stats.append(li)
    // }

    let st = document.getElementById('stats').style.visibility = 'visible'

}
async function main() {
    await test()
}