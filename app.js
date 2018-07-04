

var MOCK_EMPLOYEE_UPDATES = {
	"employeeUpdates": [
        {
            "id": "1111111",
            "text": "available to work on Monday and Thursday",
            "standardId": "aaaaaa",
            "employeeName": "John Doe",
            "branchName": "Los Angeles",
            "phone":"999-999-9999",
            "email": "something@chase.com",
            "publishedAt": 1470016976609
        },
        {
            "id": "2222222",
            "text": " can work open shifts until 12PM everyday",
            "standardId": "bbbbbbb",
            "employeeName": "Jane Doe",
            "branchName": "Los Angeles",
            "phone":"999-999-9999",
            "email": "something@chase.com",
            "publishedAt": 1470012976609
        },
        {
            "id": "333333",
            "text": "open availability to work all summer",
            "standardId": "cccc",
            "employeeName": "Jim Doe",
            "branchName": "Los Angeles",
            "phone":"999-999-9999",
            "email": "something@chase.com",
            "publishedAt": 1470011976609
        }
    ]
};

var MOCK_MANAGER_UPDATES = {
	"managerUpdates": [
        {
            "id": "44444",
            "text": "available to work on Monday and Thursday",
            "standardId": "aaaaaa",
            "managerName": "John Doe",
            "branchName": "Los Angeles",
            "phone":"999-999-9999",
            "email": "something@chase.com",
            "publishedAt": 1470016976609
        },
        {
            "id": "555555",
            "text": " can work open shifts until 12PM everyday",
            "standardId": "bbbbbbb",
            "managerName": "Jane Doe",
            "branchName": "Los Angeles",
            "phone":"999-999-9999",
            "email": "something@chase.com",
            "publishedAt": 1470012976609
        },
        {
            "id": "6666666",
            "text": "open availability to work all summer",
            "standardId": "cccc",
            "employeeName": "Jim Doe",
            "managerName": "Los Angeles",
            "phone":"999-999-9999",
            "email": "something@chase.com",
            "publishedAt": 1470011976609
        }
    ]
};

// this function's name and argument can stay the
// same after we have a live API, but its internal
// implementation will change. Instead of using a
// timeout function that returns mock data, it will
// use jQuery's AJAX functionality to make a call
// to the server and then run the callbackFn
function getRecentStatusUpdates(callbackFn) {
    // we use a `setTimeout` to make this asynchronous
    // as it would be with a real AJAX call.
	setTimeout(function(){ callbackFn(MOCK_STATUS_UPDATES)}, 1);
}

// this function stays the same when we connect
// to real API later
function displayStatusUpdates(data) {
    for (index in data.statusUpdates) {
	   $('body').append(
        '<p>' + data.statusUpdates[index].text + '</p>');
    }
}

// this function can stay the same even when we
// are connecting to real API
function getAndDisplayStatusUpdates() {
	getRecentStatusUpdates(displayStatusUpdates);
}

//  on page load do this




module.exports = MOCK_EMPLOYEE_UPDATES;