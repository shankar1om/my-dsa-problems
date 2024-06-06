var isNStraightHand = function (hand, groupSize) {
    if (hand.length % groupSize !== 0) return false;
        const mp = {};
        for (let i = 0; i < hand.length; i++) {
            if (mp[hand[i]]) {
                mp[hand[i]] += 1;
            }
            else {
                mp[hand[i]] = 1;
            }
        }
        let keys = Object.keys(mp).map(Number).sort((a, b) => a - b);
        for (let key of keys) {
            while (mp[key] > 0) {
                let numOfsets = mp[key];
                for (let i = 0; i < groupSize; i++) {
                    if ((mp[key + i] || 0) < numOfsets) {
                        return false;
                    }
                    mp[key+i] -= 1;
                }
            }
        }
        return true;
};