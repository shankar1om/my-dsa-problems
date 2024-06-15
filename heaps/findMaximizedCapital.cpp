class Solution {
public:
    int findMaximizedCapital(int k, int W, vector<int>& Profits, vector<int>& Capital) {
         int n = Profits.size();
        vector<pair<int, int>> projects;
        
        // Step 1: Create a list of projects with (capital, profit)
        for (int i = 0; i < n; ++i) {
            projects.push_back({Capital[i], Profits[i]});
        }
        
        // Step 2: Sort projects by capital required
        sort(projects.begin(), projects.end());
        
        // Step 3: Use a max-heap to keep track of the most profitable projects
        priority_queue<int> maxHeap;
        int i = 0;
        
        // Iterate up to k times to select projects
        while (k--) {
            // Add all projects that can be started with the current capital to the heap
            while (i < n && projects[i].first <= W) {
                maxHeap.push(projects[i].second);
                i++;
            }
            
            // If there are no projects that can be started, break
            if (maxHeap.empty()) break;
            
            // Select the project with the maximum profit
            W += maxHeap.top();
            maxHeap.pop();
        }
        
        return W;
    }
};