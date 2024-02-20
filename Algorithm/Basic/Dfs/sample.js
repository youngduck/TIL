const graph = {
    1:[2,3],
    2:[4],
    3:[4,5],
    4:[],
    5:[]
}

const dfs = (here,visited = new Set())=>{
    if(visited.has(here)) return
    visited.add(here)
    graph[here].map(e=>dfs(e,visited))
}

dfs(1)
