import PlayerInfo from './PlayerInfo'

function TableRes({data, val, find }) {
    function sortBy(data,val){
        if(val==="position"){
            data.sort((a,b)=>a.position-b.position);
        }else if(val==='name'){
            data.sort(function(a,b){
                if(a.name<b.name){
                    return -1
                }if(a.name > b.name){
                    return 1
                } return 0
            });
        }else if(val === 'time'){
            data.sort((a,b)=>a.time-b.time);
        }else if(val === 'scores'){
            data.sort((a,b)=>a.scores-b.scores);
        }else if(val==='hits'){
            data.sort((a,b)=>a.hits-b.hits)
        }
        return data
    }
    
      
    
    return (
        <table >
            <tr><td>Name</td><td>Time</td><td>Scores</td><td>Position</td><td>Hits</td></tr>
            {sortBy(data,val).map(player=> player.name.toLowerCase().includes(find.toLowerCase()) || find === ""?<PlayerInfo  player={player}/>:'')}
           
        </table>
    )
}

export default TableRes
