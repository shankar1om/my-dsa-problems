var findCenter = function(edges) {
    const mp = {};
    for(let i=0;i<edges.length;i++){
        let temp=edges[i];
        for(let j=0;j<temp.length;j++){
            if(mp[temp[j]]){
                mp[temp[j]] ++;
            }
            else{
                mp[temp[j]]=1;
            }
            if(mp[temp[j]]>1) return temp[j];
        }
    }
    return -1;
};