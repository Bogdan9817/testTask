import React,{memo} from 'react'

function PlayerInfo({player}) {
    return (
        <tr key={player.name}>
            <td>{player.name}</td>
            <td>{player.time}s</td>
            <td>{player.scores}</td>
            <td>#{player.position}</td>
            <td>{player.hits}</td>
            <td>{player.fireRate}</td>
            </tr>
    )
}

export default memo(PlayerInfo)
