// Write a function that takes in a non-empty array of arbitrary intervals, merges any overlapping intervals and returns the new intervals in no particular order. 

// Each interval *interval* is an array of two integers, with *intervals[0]* as the start of the interval and interval[1] as the end of the interval. 

// Note that back-to-back intervals aren't considered to be overlapping. For example, [1, 5] and [6, 7] aren't overlapping; however, [1, 6] and [6, 7] *are* indeed overlapping. 

// Also note that the start of any particular interval will always be less than or equal to the end of that interval. 

// Sample input: 
//              intervals = [[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]]

// Sample output: 
// [[1, 2], [3, 8], [9, 10]]

//naive approach: We want to start by sorting each of the interval arrays in ascending order. That way we can use that to check if each individual interval start and end overlap each other. We can use a loop to accomplish this in which we'll check if it overlaps, then we push the current interval start and the next interval end to the merged intervals array. Otherwise, we can just continue to run this check through the loop to the next intervals array. 

//time complexity: This runs nLog(n) because of our sorting algorithm coupled with our for loop, where n is the length of the input array.

//space complexity: Because we're pushing the merged intervals to a new array, the space required is O(n) where n is the length of the merged intervals array.

//O(nLog(n)) time | O(n) space complexity
function mergeOverlappingIntervals(intervals) {
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);

  const mergedIntervals = [];
  let currentInterval = sortedIntervals[0];
  mergedIntervals.push(currentInterval);

  for(const nextInterval of sortedIntervals) {
    const [_, currentIntervalEnd] = currentInterval;
    const [nextIntervalStart, nextIntervalEnd] = nextInterval;

    if(currentIntervalEnd >= nextIntervalStart) currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd);
    else {
      currentInterval = nextInterval;
      mergedIntervals.push(currentInterval);
    }
  }
  return mergedIntervals;
}