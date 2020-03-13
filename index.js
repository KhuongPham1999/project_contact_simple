var fs = require('fs');
var readlineSync = require('readline-sync');
var contacts = [];

function showMenu(){
	console.log("1. Show all contacts");
	console.log("2. Input contact");
	console.log("3. Search Contact");
	console.log("4. Edit Contact");
	console.log("5. Remove Contact");
	console.log("6. Save contacts and exit");
	var question = readlineSync.question("Your chose:");
	switch(question){
		case "1":
			showContacts(contacts);
			showMenu();
			break;
		case "2":
			inputContact();
			showMenu();
			break;
		case "3":
			showSearch();
			showMenu();
			break;
		case "4":
			editContact(contacts);
			showMenu();
			break;
		case "5":
			removeContact(contacts);
			showMenu();
			break;
		case "6":
			saveAndExit();
			break;
		default:
			console.log("Wrong chose!!!!!!!!!!!!!!!!!!!!!!!!!!");
			showMenu();
			break;
	}
}

function readData(){
	var content = fs.readFileSync("./data.json");
	contacts = JSON.parse(content);
}

function showContacts(ob){
	for (var contact of contacts){
		console.log(contact.name, contact.phone);
	}
}

function inputContact(){
	var name = readlineSync.question("Name:");
	var phone = readlineSync.question("phone:");
	var contact = {
		name: name,
		phone: phone
	};
	contacts.push(contact);
}

function searchContact(){
	console.log("Nhập bất kì tên hoặc số điện thoại để tìm trong danh bạ:");
  	var qs = read.question(">");
  	search(phoneList,qs);
}

function saveAndExit(){
	var contents = JSON.stringify(contacts);
	fs.writeFileSync("./data.json", contents, { encoding: 'utf8' });
}

function showSearch(){
  	console.log("Nhập bất kì tên hoặc số điện thoại để tìm trong danh bạ:");
  	var qs = readlineSync.question(">");
  	search(contacts,qs);
}

function search(ob, q){
	for(var x of ob){
		if(q == x.name || q == x.phone){
			console.log(x.name, x.phone);
		}
	}
}

function editContact(ob) {
	showContacts();
	var q = readlineSync.question("Name or phonenumber to chose contact need to fix:");
	var newName = readlineSync.question("Input new name:");
	var newPhone = readlineSync.question("Input new phone:");
	for(var x of ob){
		if(q == x.name || q == x.phone){
			x.name = newName;
  			x.phone = newPhone
		}
	}
  	fs.writeFileSync("data.json",JSON.stringify(contacts),{ encoding: 'utf8' });
}

function main(){
	readData();
	showMenu();
}
main();