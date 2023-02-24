message1 =
  `My commit (#1234)
      
First commit message description.`

message2 =
  `Another commit (#3456)

- Fixed a thing with the thing.
- Made the thing with the thingy.`

message3 =
  `The third commit (#8765) (#222)
This commit aims to fix the thing where you could not do the thing and it was not great.



`

const commits = {
  data: [
    {
      commit: {
        message: message1
      }
    },
    {
      commit: {
        message: message2
      }
    },
    {
      commit: {
        message: message3
      }
    }
  ]
}

const release = {
  name: "23.0.0.1",
  total_commits_count: 3,
  published_at: new Date()
}

const commitMessages = commits.data.slice(0, release.total_commits_count)
  .reverse()
  .map((commit) => {
    const split = commit.commit.message.split("\n")
    const title = `**${split[0].replace(/\(#\d+\)/g, '').trim()}**`
    const description = split.slice(1).join("\n").trim()
    return `${title}\n${description}\n`
  }).join("\n")
const releaseDate = new Date(release.published_at).toISOString().slice(0, 10)
const newDescription = `${release.name}\n_${releaseDate}_\n${commitMessages}`

console.log(newDescription)