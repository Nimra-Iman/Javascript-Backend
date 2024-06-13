// js is non blocking, single threaded
// V8 is a JS runtime that holds heap and call stack , heap is used for memory allocation
// and stack holds execution content

// JS in run time can do only one thing at a time but hm n parralel behavior bhi dekha tha
// asal m JS khud sirf ek kaam kr skti h but JS k saath kuch web API's bhi hoti hn jo k us
// ko parrallel behaviour deti h, like settimeout , fetch etc isi m aty

// JS can do only one thing at a time, the rest are transferred to web APIs, after
// completing there time, they are transferred to task queue and then event loop transfer
// them from task queue to call stack where they are executed
 